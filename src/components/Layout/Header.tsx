import { ChevronDown, ChevronUp, Menu } from "lucide-react"; 
import Logo from "../../assets/images/avatar.jpg";
// import Drapeau from "../../assets/images/drapeau2.png";
import { useState } from "react";
import { dossiers } from "../../data/modulesData";
import { NavLink } from "react-router-dom";

interface HeaderProps {
  onClose: () => void;
  isSidebarOpen: boolean;
}

export default function Header({ onClose, isSidebarOpen }: HeaderProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedModule, setSelectedModule] = useState<string>(dossiers[0].nomModule);

  const handleModuleSelect = (moduleName: string) => {
    setSelectedModule(moduleName);
    setShowDropdown(false); 
  };

  return (
    <header className={`header ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <div className="header__left">
        <div onClick={onClose} className="header__left__icon">
          <Menu className="sidebar_layout_grid"/>
        </div>
        <h5>{selectedModule}</h5>

        {/* <img src={Drapeau} alt="Drapeau" /> */}

        <div
          onClick={() => setShowDropdown(prev => !prev)}
          className="dropdown-toggle"
          aria-haspopup="true"
          aria-expanded={showDropdown}
          style={{ cursor: "pointer" }}
        >
          {showDropdown ? <ChevronUp className="sidebar_layout_grid"/> : <ChevronDown className="sidebar_layout_grid"/>}
        </div>

        {showDropdown && (
          <div className="dropdown2">
            {dossiers.map((mod) => (
              <NavLink
                key={mod.pays}
                to={`/dossiers/${mod.pays}`}
                onClick={() => handleModuleSelect(mod.nomModule)}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "nav-link--active" : ""}`
                }
              >
                {mod.nomModule} - {mod.pays}
              </NavLink>
            ))}
          </div>
        )}

        <div className="header__espace">Espace Collaborateur</div>
      </div>

      <div className="header__right">
        <div className="header__info__user">
          <p className="username">AGENT CHK</p>
          <p className="user_role">Agent</p>
        </div>
        <div className="header__avatar">
          <img src={Logo} alt="Avatar" />
        </div>
      </div>
    </header>
  );
}
