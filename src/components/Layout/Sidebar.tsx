import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { modules } from "../../data/modulesData";

export default function Sidebar() {
  // Par défaut, le premier module est sélectionné
  const [selectedModule, setSelectedModule] = useState<string>(modules[0].name);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleModuleSelect = (moduleName: string) => {
    setSelectedModule(moduleName);
    setShowDropdown(false);
  };

  const activeModule = modules.find((m) => m.name === selectedModule);

  // Fermer le dropdown si on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".sidebar__icon")) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <aside className="sidebar">
      <div className="sidebar__kicker">Cloudpaie</div>
      <div className="sidebar__brand">
        <div className="sidebar_brand_module">
          <div className="sidebar__title">
            <p>{selectedModule}</p>
          </div>
           {/* Icône du menu principal */}
          <div className="sidebar__icon">
            <div
              className="sidebar__icon__one"
              onClick={() => setShowDropdown(!showDropdown)}
            >
            <ChevronDown className="sidebar_layout_grid"/>
            </div>

            {/* Dropdown */}
            {showDropdown && (
              <div className="dropdown">
                {modules.map((mod) => (
                  <div
                    key={mod.name}
                    className={`dropdown__item ${
                      mod.name === selectedModule ? "dropdown__item--active" : ""
                    }`}
                    onClick={() => handleModuleSelect(mod.name)}
                  >
                    {mod.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sous-menu du module sélectionné */}
      <nav>
        {activeModule && (
          activeModule.items.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              end
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link--active" : ""}`
              }
            >
              {it.label}
            </NavLink>
          ))
        ) }
      </nav>
    </aside>
  );
}
