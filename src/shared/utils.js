export const generatePagers = ({ numberOfPages, currentPage, spaces }) => {
  const pages = [];
  let start = currentPage < spaces ? 1 : currentPage - Math.floor(spaces / 2);
  let end = start + spaces - 1;
  if (end > numberOfPages) {
    end = numberOfPages;
    start = Math.max(1, numberOfPages - spaces + 1);
  }
  for (let index = start; index <= end; index++) {
    pages.push(index);
  }
  return pages;
};
