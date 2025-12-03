import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Data from "./pages/Data";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/global/AppSidebar";

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger className="m-4" />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/data" element={<Data />} />
          </Routes>
        </div>
      </main>
    </SidebarProvider>
  );
}

export default App;
