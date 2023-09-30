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
    render(
      <PaginationComponent
        numberOfPages={1}
        currentPage={1}
        onChangeCurrentPage={onChangeCurrentPage}
      />
    );

    // ASSERT
    const pagination = screen.queryByLabelText("pagination");
    expect(pagination).toBeNull();
  });
});
