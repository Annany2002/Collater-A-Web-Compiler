import Editor from "@/components/Editor";
import RenderCode from "@/components/RenderCode";
import SecHeader from "@/components/SecHeader";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Compile() {
  return (
    <ResizablePanelGroup direction="horizontal" className="">
      <ResizablePanel
        className="min-w-[120px] h-[calc(100dvh-60px)]"
        defaultSize={50}
      >
        <SecHeader />
        <Editor />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel
        className="min-w-[120px] h-[calc(100dvh-60px)]"
        defaultSize={50}
      >
        <RenderCode />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
