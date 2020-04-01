//Import Style
import style from "./style.scss";
//Import Next
import Head from "next/head";

const Header = () => (
  <header className={style.header}>
    <Head>
      <title>Bibliografia - Cohorte 2020</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <h1>COHORTE 2020 1ER AÑO</h1>
  </header>
);

export default Header;
