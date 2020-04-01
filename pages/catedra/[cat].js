//Import Components
import Layout from "../../components/Layout";
//Import API
import data from "../../data";
//Import ROUTER
import { useRouter } from "next/router";

const Catedra = prop => {
  const router = useRouter();
  const { cat } = router.query;
  return (
    <Layout>
      <h2>{cat}</h2>

      <article>
        <h3>Slides</h3>
        {prop.slides.length > 0 ? (
          prop.slides.map((slide, index) => (
            <li key={index}>
              <a href={slide.url} target="_blank">
                {slide.name}
              </a>
            </li>
          ))
        ) : (
          <p>No hay información</p>
        )}
      </article>
    </Layout>
  );
};

Catedra.getInitialProps = async ctx => {
  const route = ctx.query;
  const catedra = data.catedras.find(e => e.name == route.cat) || " ";
  return catedra;
};

export default Catedra;
