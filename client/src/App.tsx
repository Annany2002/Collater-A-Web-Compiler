import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Compile from "./pages/Compile";
import Error from "./pages/Error";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <>
      <Toaster position="top-center" />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compile" element={<Compile />} />
          <Route path="/compile/:codeId" element={<Compile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
