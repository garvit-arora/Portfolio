import PillNav from "../PillNav.jsx";
import logo from "../../assets/react.svg";
export default function Header() {
  return (
    <div className="flex justify-center">
      <PillNav
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "#projects" },
          { label: "Resume", href: "/services" },
          { label: "Contact", href: "/contact" },
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />
    </div>
  );
}
