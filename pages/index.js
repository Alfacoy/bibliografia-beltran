//Import Components
import Layout from "../components/Layout";
import List from "../components/List";
//API
import data from "../data";

const Home = () => {
  return (
    <Layout>
      <section>
        <h3>Catedra</h3>
        <ul>
          <List data={data} />
        </ul>
      </section>
    </Layout>
  );
};

export default Home;
