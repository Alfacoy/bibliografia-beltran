//Import Style
import style from "./style.scss";
//Import Next
import Link from "next/link";

const List = ({ data }) => {
  return (
    <>
      {data.catedras.map((catedra, index) => {
        let count =
          catedra.slides.length +
          catedra.complements.length +
          catedra.books.length +
          catedra.optionalBooks.length;
        return (
          <li key={index} className={style.list}>
            <Link href="/catedra/[cat]" as={`/catedra/${catedra.name}`}>
              <a>> {catedra.name} </a>
            </Link>{" "}
            <span>[ {count} ]</span>
          </li>
        );
      })}
    </>
  );
};

export default List;
