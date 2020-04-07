//Import Components
import Layout from "../components/Layout";
import List from "../components/List";
//Import style
import style from "../styles/styles.scss";
//API
import data from "../data";

const Home = () => {
  return (
    <Layout>
      <section>
        <h3 className={style.titleIndex}>Cátedra</h3>
        <ul>
          <List data={data} />
        </ul>
      </section>
    </Layout>
  );
};

export default Home;
