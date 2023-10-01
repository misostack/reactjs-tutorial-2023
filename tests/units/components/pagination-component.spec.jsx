import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PaginationComponent from "../../../src/components/PaginationComponent";

/**
 * Test cases
 * 1. Number of pages <= 1 : must not render anything
 * 2. Number of pages <= 5 : always render n pages and 4 buttons:first,previous,next,last with n <=5
 * 3. Number of pages > 1 and current page = 1 : disabled first,previous, enable next,last
 * 4. Number of pages > 1 and current page > 1 && current page is not last page : enable, first, previous, next, last
 * 5. Number of pages > 1 and current page > 1 && current page is last page : enable, first, previous and disable next, last
 * 6. Number of pages > 5 and current page = 5 && pages includes: 3,4,5,6,7
 */
const onChangeCurrentPage = () => {};

describe("Test PaginationComponent", () => {
  test("TC1: Number of pages <= 1 : must not render anything", () => {
    // ARRANGE
    const props = {
      numberOfPages: 1,
      currentPage: 1,
      onChangeCurrentPage,
    };
    render(<PaginationComponent {...props} />);

    // ASSERT
    const pagination = screen.queryByLabelText("pagination");
    expect(pagination).toBeNull();
  });
  test(
    "TC2: Number of pages <= 5 : always render n pages and 4 buttons:first,previous,next,last with n <=5" +
      " \nTC3: Number of pages > 1 and current page = 1 : disabled first,previous, enable next,last",
    () => {
      // ARRANGE
      const props = {
        numberOfPages: 5,
        currentPage: 1,
        onChangeCurrentPage,
      };
      render(<PaginationComponent {...props} />);

      // ASSERT
      const pagination = screen.queryByLabelText("pagination");
      const pageItems = pagination.querySelectorAll("[data-page-item=true]");
      const firstPageItem = pagination.querySelector("[data-page-type=first]");
      const previousPageItem = pagination.querySelector(
        "[data-page-type=previous]"
      );
      const nextPageItem = pagination.querySelector("[data-page-type=next]");
      const lastPageItem = pagination.querySelector("[data-page-type=last]");
      expect(pageItems.length).toEqual(5);
      expect(firstPageItem).toBeTruthy();
      expect(firstPageItem).toHaveClass("disabled");
      expect(previousPageItem).toBeTruthy();
      expect(previousPageItem).toHaveClass("disabled");
      expect(nextPageItem).toBeTruthy();
      expect(nextPageItem).to.not.toHaveClass("disabled");
      expect(lastPageItem).toBeTruthy();
      expect(lastPageItem).to.not.toHaveClass("disabled");
    }
  );
});
