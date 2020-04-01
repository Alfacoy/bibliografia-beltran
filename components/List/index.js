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
          <li key={index}>
            <Link href="/catedra/[cat]" as={`/catedra/${catedra.name}`}>
              <a>> {catedra.name} </a>
            </Link>{" "}
            [{count}]
          </li>
        );
      })}
    </>
  );
};

export default List;
