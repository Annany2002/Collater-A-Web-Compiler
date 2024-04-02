import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { updateCodeValue } from "@/redux/slice/compilerSlice";

export default function Editor() {
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );
  const codeLanguages = useSelector(
    (state: RootState) => state.compilerSlice.codeLanguages
  );
  const dispatch = useDispatch();

  const onChange = React.useCallback((value: string) => {
    // console.log("val:", val);
    // setValue(val);

    dispatch(updateCodeValue(value));
  }, []);

  return (
    <>
      <CodeMirror
        theme={dracula}
        value={codeLanguages[currentLanguage]}
        height="calc(100vh - 60px - 50px)"
        extensions={[loadLanguage(currentLanguage)!]}
        onChange={onChange}
      />
    </>
  );
}
