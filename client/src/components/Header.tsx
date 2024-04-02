import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <nav className="w-full h-[60px] flex p-3 justify-between items-center bg-gray-300 text-gray-200">
      <Link to="/">
        <h2 className="font-bold select-none text-slate-800">Collater</h2>
      </Link>
      <Link to="/compile">
        <Button variant={"secondary"}>Compile</Button>
      </Link>
    </nav>
  );
}
