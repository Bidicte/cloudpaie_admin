import { PanelLeftClose } from "lucide-react";
import Logo from "../../assets/images/avatar.jpg"

interface HeaderProps{
  onClose: () => void;
}

export default function Header({onClose} : HeaderProps) {
  return (
    <header className="header">
        <div className="header__btn"></div>

      <div className="header__left">
          <div onClick={onClose}><PanelLeftClose /></div>
        <div style={{ fontSize: 14, color: "#666" }}>Espace Collaborateur</div>
      </div>
      <div className="header__right">
        <div className="header__info__user">
          <div><p>AGENT CHK</p></div>
          <div><p>Agent</p></div>
        </div>
        <div className="header__avatar">
          <img src={Logo} alt="" />
          </div>
      </div>
    </header>
  );
}
