import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "./ui/button";
import { useState } from "react";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function Header() {
  const { pathname } = useLocation();

  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const codeLanguages = useSelector(
    (state: RootState) => state.compilerSlice.codeLanguages
  );

  const handleSaveCode = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5001/api/compile/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ codeLanguages }),
      });

      const data = await response.json();
      setLoading(false);
      toast.success("Code saved successfully");
      navigate(`/compile/${data.url}`);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <nav className="w-full h-[60px] flex p-3 justify-between items-center bg-gray-300 text-gray-200">
      <Link to="/">
        <h2 className="font-bold select-none text-slate-800">Collater</h2>
      </Link>
      {pathname === "/" ? (
        <Link to="/compile">
          <Button disabled={loading} variant={"secondary"}>
            Compile
          </Button>
        </Link>
      ) : (
        <Button onClick={handleSaveCode} variant={"secondary"}>
          Save
        </Button>
      )}
      <Toaster />
    </nav>
  );
}
