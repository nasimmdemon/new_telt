import Link from "next/link";
import menuData from "../../../data/header/navigation.json";

export default function Navigator() {
  function renderMenu() {
    return menuData.map((item, index) => (
      <li key={index}>
        <Link href={item.to}>
          <span>{item.title}</span>
        </Link>
      </li>
    ));
  }

  return (
    <div className="navigator-mobile">
      <ul>{renderMenu()}</ul>
    </div>
  );
}
