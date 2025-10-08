import { ChevronDown, ChevronUp, PanelLeftClose } from "lucide-react"; 
import Logo from "../../assets/images/avatar.jpg";
import Drapeau from "../../assets/images/drapeau2.png";
import { useState } from "react";
import { dossiers } from "../../data/modulesData";
import { NavLink } from "react-router-dom";

interface HeaderProps {
  onClose: () => void;
}

export default function Header({ onClose }: HeaderProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedModule, setSelectedModule] = useState<string>(dossiers[0].nomModule);

  const handleModuleSelect = (moduleName: string) => {
    setSelectedModule(moduleName);
    setShowDropdown(false); // refermer le dropdown après sélection
  };

  return (
    <header className="header">
      <div className="header__left">
        <h5>{selectedModule}</h5>

        <img src={Drapeau} alt="Drapeau" />

        <div
          onClick={() => setShowDropdown(prev => !prev)}
          className="dropdown-toggle"
          aria-haspopup="true"
          aria-expanded={showDropdown}
          style={{ cursor: "pointer" }}
        >
          {showDropdown ? <ChevronUp /> : <ChevronDown />}
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

        <div onClick={onClose} className="header__left__icon">
          <PanelLeftClose />
        </div>

        <div style={{ fontSize: 14, color: "#666" }}>Espace Collaborateur</div>
      </div>

      <div className="header__right">
        <div className="header__info__user">
          <div><p>AGENT CHK</p></div>
          <div><p>Agent</p></div>
        </div>
        <div className="header__avatar">
          <img src={Logo} alt="Avatar" />
        </div>
      </div>
    </header>
  );
}
