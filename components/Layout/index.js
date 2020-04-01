//Import Components
import Header from "../Header";
//Import Style
import style from "./style.scss";

const Layout = props => (
  <>
    <Header />
    <main className={style.container}>{props.children}</main>
  </>
);

export default Layout;
