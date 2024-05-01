import { Code, Copy, Share2Icon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import {
  InitialStateType,
  updateCurrentLanguage,
  updatePrevCode,
} from "@/redux/slice/compilerSlice";
import { RootState } from "@/redux/store";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SecHeader() {
  const { codeId } = useParams();
  const dispatch = useDispatch();

  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );

  const codeLanguages = useSelector(
    (state: RootState) => state.compilerSlice.codeLanguages
  );

  const handleClick = () => {
    window.navigator.clipboard.writeText(window.location.href);
    toast("URL copied to clipboard");
  };

  const loadCode = async () => {
    try {
      const body = {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ codeId }),
      };
      const response = await fetch(
        "http://localhost:5001/api/compile/load",
        body
      );
      const data = await response.json();
      dispatch(updatePrevCode(data.languages));
    } catch (error) {
      console.log("Error is: ", error);
    }
  };

  const saveCode = async () => {
    dispatch(updatePrevCode(codeLanguages));
  };

  useEffect(() => {
    if (codeId) {
      loadCode();
    }
  }, []);

  return (
    <div className="flex justify-between items-center h-[50px] p-2">
      <div className="flex gap-1">
        <Button onClick={saveCode}>Save Changes</Button>
        <Dialog>
          <Button
            variant={"secondary"}
            className="flex gap-1 items-center justify-between"
            onClick={handleClick}
          >
            <Share2Icon size={16} />
            Share
          </Button>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center justify-center gap-2">
                <Code /> Share your Code!!!
              </DialogTitle>
              <DialogDescription className="flex items-center justify-center gap-3">
                <input
                  value={window.location.href}
                  type="text"
                  disabled
                  className="w-full px-2 py-4 bg-transparent/25 font-bold"
                />
                <Button onClick={handleClick}>
                  <Copy />
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
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
