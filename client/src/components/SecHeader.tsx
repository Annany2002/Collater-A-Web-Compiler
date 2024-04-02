import { SaveIcon, Share2Icon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import {
  InitialStateType,
  updateCurrentLanguage,
} from "@/redux/slice/compilerSlice";
import { RootState } from "@/redux/store";

export default function SecHeader() {
  const dispatch = useDispatch();

  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );
  const codeLanguages = useSelector(
    (state: RootState) => state.compilerSlice.codeLanguages
  );

  const handleSaveCode = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/compile/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ codeLanguages }),
      });

      const data = await response.json();
      console.log("Code saved successfully:", data);
    } catch (error) {
      console.error("Error saving code:", error);
    }
  };

  return (
    <div className="flex justify-between items-center h-[50px] p-2 ">
      <div className="__btn_container flex gap-1">
        <Button
          className="flex gap-1 items-center justify-between"
          onClick={handleSaveCode}
        >
          <SaveIcon size={16} />
          Save
        </Button>
        <Button
          variant={"secondary"}
          className="flex gap-1 items-center justify-between"
        >
          <Share2Icon size={16} />
          Share
        </Button>
      </div>
      <div className="flex gap-2 justify-center items-center">
        Language:
        <Select
          defaultValue={currentLanguage}
          onValueChange={(val) =>
            dispatch(
              updateCurrentLanguage(val as InitialStateType["currentLanguage"])
            )
          }
        >
          <SelectTrigger className="w-[180px] bg-[#353935] font-medium outline-none">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="html">HTML</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
            <SelectItem value="javascript">Javascript</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
