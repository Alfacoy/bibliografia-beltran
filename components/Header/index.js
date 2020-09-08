//Import Style
import style from "./style.scss";
//Import Next
import Head from "next/head";

const Header = () => (
  <header className={style.header}>
    <Head>
      <title>Bibliografías - Cohorte 2020</title>
      <meta charset="UTF-8" />
      <meta name="author" content="Brian Durand" />
      <meta name="robots" content="noindex" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" href="icon/favicon.ico" />
    </Head>
    <h1>COHORTE 2020 1ER AÑO</h1>
  </header>
);

export default Header;
