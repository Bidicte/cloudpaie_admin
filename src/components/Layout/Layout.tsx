import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState } from "react";

export default function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  return (
    <div className={`app ${isSidebarOpen ? 'app--sidebar-open' : 'app--sidebar-closed'}`}>
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header onClose={() => setIsSidebarOpen(!isSidebarOpen)}/>
        <main className="main">
          <div className="card">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Sed earum, omnis dolorum vero cum atque quidem, debitis harum 
            velit temporibus facere minus repudiandae voluptates tenetur 
            ipsa in ducimus doloremque saepe.
          </div>
        </main>
      </div>
    </div>
  );
}