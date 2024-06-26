import Link from "next/link";
import classNames from "classnames";
import menuData from "../../../data/header/navigation.json";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";
import { convertToSlug } from "../../../common/utils";

export default function Navigator({ disableSubmenu, className }) {
  const pathname = usePathname();

  function renderMenu() {
    return menuData.map((item, index) => {
      return (
        <li
          className={`relative ${pathname === item.to ? "active" : ""}`}
          key={index}
        >
          <Link href={item.to}>
            <span>{item.title}</span>
          </Link>
        </li>
      );
    });
  }
  if (disableSubmenu) {
    return (
      <div className={`navigator -off-submenu ${classNames(className)}`}>
        <ul>
          {menuData.map((item, index) => (
            <li key={index}>
              <Link href={process.env.PUBLIC_URL + item.to}>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className={`navigator ${classNames(className)}`}>
      <ul>{renderMenu()}</ul>
    </div>
  );
}
