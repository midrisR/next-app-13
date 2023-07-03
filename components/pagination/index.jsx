import styles from "./pagination.module.css";
const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize);
  if (pagesCount === 1) {
    return null;
  }
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  console.log(pages);
  return (
    <div>
      {" "}
      <ul className={styles.pagination}>
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === currentPage ? styles.pageItemActive : styles.pageItem
            }
          >
            <span
              className={styles.pageLink}
              onClick={() => onPageChange(page)}
            >
              {page}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Pagination;
1;
