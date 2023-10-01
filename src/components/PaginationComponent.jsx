import { generatePagers } from "@app/shared/utils";

const PaginationComponent = ({
  numberOfPages,
  currentPage,
  onChangeCurrentPage,
  ...props
}) => {
  const spaces = 5; // 5 page links
  const isDisabledPrevious = currentPage === 1;
  const isDisabledNext = currentPage === numberOfPages;
  const pages = generatePagers({ numberOfPages, currentPage, spaces });

  return (
    <>
      {pages.length > 1 && (
        <nav aria-label="pagination">
          <ul className="pagination">
            <li
              data-page-type="first"
              aria-disabled={isDisabledPrevious ? true : false}
              className={
                isDisabledPrevious ? "page-item disabled" : "page-item"
              }
            >
              <a
                style={{
                  cursor: "pointer",
                }}
                className="page-link"
                onClick={() => onChangeCurrentPage(1)}
              >
                First
              </a>
            </li>
            <li
              data-page-type="previous"
              className={
                isDisabledPrevious ? "page-item disabled" : "page-item"
              }
            >
              <a
                style={{
                  cursor: "pointer",
                }}
                className="page-link"
                onClick={() => onChangeCurrentPage(currentPage - 1)}
              >
                Previous
              </a>
            </li>
            {pages.map((p) => (
              <li data-page-item={true} data-page-number={p} key={p}>
                <a
                  aria-current={p === currentPage ? "page" : "false"}
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => onChangeCurrentPage(p)}
                  className={
                    p === currentPage ? "page-link active" : "page-link"
                  }
                >
                  {p}
                </a>
              </li>
            ))}
            <li
              data-page-type="next"
              className={isDisabledNext ? "page-item disabled" : "page-item"}
            >
              <a
                style={{
                  cursor: "pointer",
                }}
                className="page-link"
                onClick={() => onChangeCurrentPage(currentPage + 1)}
              >
                Next
              </a>
            </li>
            <li
              data-page-type="last"
              className={isDisabledNext ? "page-item disabled" : "page-item"}
            >
              <a
                style={{
                  cursor: "pointer",
                }}
                className="page-link"
                onClick={() => onChangeCurrentPage(numberOfPages)}
              >
                Last
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

PaginationComponent.displayName = "PaginationComponent";

export default PaginationComponent;
