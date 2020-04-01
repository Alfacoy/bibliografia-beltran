//Import Style
import style from "./style.scss";
import Link from "next/link";

const Header = () => (
  <header className={style.header}>
    <Link href="/">
      <h1>COHORTE 2020 1ER AÑO</h1>
    </Link>
  </header>
);

export default Header;
