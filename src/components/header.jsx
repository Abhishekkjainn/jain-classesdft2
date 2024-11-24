import { useState } from 'react';
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="header">
        <div className="company">
          <img src="/mainlogo.png" alt="mainlogo" className="complogo" />
        </div>
        <div className="links">
          <div className="link">Home</div>
          <div className="link">About Us</div>
          <div className="link">Founder</div>
          <div className="link">Results</div>
          <div className="link">Achievements</div>
          <div className="link">Gallery</div>
          <div className="link">Contact Us</div>
        </div>
        <div className="linkbutton" onClick={toggleMenu}>
          <img src="/menu.png" alt="menu icons" className="menubuttonicon" />
        </div>
      </div>
      <div
        className="menu"
        style={{ right: menuOpen ? '0%' : '-100%', transition: 'right 0.3s' }}
      >
        <div className="closebutton" onClick={toggleMenu}>
          x
        </div>
      </div>
    </>
  );
}
