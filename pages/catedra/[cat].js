//Import Components
import Layout from "../../components/Layout";
//Import API
import data from "../../data";
//Import ROUTER
import { useRouter } from "next/router";

const Catedra = () => {
  const router = useRouter();
  const { cat } = router.query;
  const libros = data.catedras.find(e => e.name == cat);

  return (
    <Layout>
      <h2>{cat}</h2>

      <article>
        <h3>Slides</h3>
        {libros.slides.length > 0 ? (
          libros.slides.map((i, index) => (
            <li key={index}>
              <a href={i.url || "/"} target="_blank">
                {i.name}
              </a>
            </li>
          ))
        ) : (
          <p>No hay material disponible</p>
        )}
      </article>

      <article>
        <h3>Complementos</h3>
        {libros.complements.length > 0 ? (
          libros.complements.map((i, index) => (
            <li key={index}>
              <a href={i.url || "/"} target="_blank">
                {i.name}
              </a>
            </li>
          ))
        ) : (
          <p>No hay material disponible</p>
        )}
      </article>

      <article>
        <h3>Libros</h3>
        {libros.books.length > 0 ? (
          libros.books.map((i, index) => (
            <li key={index}>
              <a href={i.url || "/"} target="_blank">
                {i.name}
              </a>
            </li>
          ))
        ) : (
          <p>No hay material disponible</p>
        )}
      </article>

      <article>
        <h3>Libros opcionales</h3>
        {libros.optionalBooks.length > 0 ? (
          libros.optionalBooks.map((i, index) => (
            <li key={index}>
              <a href={i.url || "/"} target="_blank">
                {i.name}
              </a>
            </li>
          ))
        ) : (
          <p>No hay material disponible</p>
        )}
      </article>
    </Layout>
  );
};

export default Catedra;
