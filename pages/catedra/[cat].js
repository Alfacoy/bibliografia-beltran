//Import Components
import Layout from "../../components/Layout";
//Import Style
import style from "./style.scss";
//Import API
import data from "../../data";
//Import ROUTER
import Link from "next/link";
import { useRouter } from "next/router";

const Catedra = prop => {
  const router = useRouter();
  const { cat } = router.query;
  return (
    <Layout>
      <Link href="/">
        <div className={style.btn}>Volver Atras</div>
      </Link>

      <h2 className={style.titleCat}>
        <u>{cat}</u>
      </h2>
      <article>
        <h3 className={style.titleRes}>- Slides</h3>
        <ul>
          {prop.slides.length > 0 ? (
            prop.slides.map((slide, index) => (
              <li key={index} className={style.listItemCat}>
                <a href={slide.url} target="_blank">
                  {slide.name}
                </a>
              </li>
            ))
          ) : (
            <p>No se han encontrado recursos.</p>
          )}
        </ul>
      </article>
      <hr />
      <article>
        <h3 className={style.titleRes}>- Complementos</h3>
        <ul>
          {prop.complements.length > 0 ? (
            prop.complements.map((complement, index) => (
              <li key={index} className={style.listItemCat}>
                <a href={complement.url} target="_blank">
                  {complement.name}
                </a>
              </li>
            ))
          ) : (
            <p>No se han encontrado recursos.</p>
          )}
        </ul>
      </article>
      <hr />
      <article>
        <h3 className={style.titleRes}>- Libros</h3>
        <ul>
          {prop.books.length > 0 ? (
            prop.books.map((book, index) => (
              <li key={index} className={style.listItemCat}>
                <a href={book.url} target="_blank">
                  {book.name}
                </a>
              </li>
            ))
          ) : (
            <p>No se han encontrado recursos.</p>
          )}
        </ul>
      </article>
      <hr />
      <article>
        <h3 className={style.titleRes}>- Libros Opcionales</h3>
        <ul>
          {prop.optionalBooks.length > 0 ? (
            prop.optionalBooks.map((book, index) => (
              <li key={index} className={style.listItemCat}>
                <a href={book.url} target="_blank">
                  {book.name}
                </a>
              </li>
            ))
          ) : (
            <p>No se han encontrado recursos.</p>
          )}
        </ul>
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
