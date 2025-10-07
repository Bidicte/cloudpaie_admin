import { PanelLeftClose, User } from "lucide-react";
import "../../styles/base.css";
import "../../styles/cloudpaie.css";

interface HeaderProps{
  onClose: () => void;
}

export default function Header({onClose} : HeaderProps) {
  return (
    <header className="header">
      <div className="header__left">
          <div onClick={onClose}><PanelLeftClose /></div>
        <div style={{ fontSize: 14, color: "#666" }}>Espace Collaborateur</div>
      </div>
      <div className="header__right">
        <div className="header__info__user">
          <div><p>Nom de l'agent</p></div>
          <div><p>Role</p></div>
        </div>
        <div className="header__avatar"><User /></div>
      </div>
    </header>
  );
}
