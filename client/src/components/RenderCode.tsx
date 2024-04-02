import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function RenderCode() {
  const codeLanguages = useSelector(
    (state: RootState) => state.compilerSlice.codeLanguages
  );

  const fullCode = `
        <html>
            <style>${codeLanguages.css}</style>
            <body>${codeLanguages.html}</body>
            <script>${codeLanguages.javascript}</script>
        </html>
  `;
  const iframeCode = `data:text/html;charset=utf-8,${encodeURIComponent(
    fullCode
  )}`;
  return (
    <div className="h-[calc(100dvh-60px)] border-2 border-slate-700 bg-white">
      <iframe className="w-full h-full" src={iframeCode} />
    </div>
  );
}
