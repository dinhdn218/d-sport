import { routes } from "@/constants";
import Header from "../header";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

// Mocking nested components
jest.mock("next/link", () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

jest.mock("../../header-dropdown-menu", () => {
  return () => <div>HeaderDropdownMenu</div>;
});

jest.mock("../../header-shopping-cart", () => {
  return () => <div>HeaderShoppingCart</div>;
});

// Mocking constants
jest.mock("@/constants", () => ({
  routes: {
    home: "/",
    products: "/products",
    about: "/about",
  },
}));

describe("Header() Header method", () => {
  // Happy Path Tests
  describe("Happy Paths", () => {
    it("should render the header with the correct structure", () => {
      render(<Header />);
      expect(screen.getByText("DSport")).toBeInTheDocument();
      expect(screen.getByText("Trang chủ")).toBeInTheDocument();
      expect(screen.getByText("Sản phẩm")).toBeInTheDocument();
      expect(screen.getByText("Về chúng tôi")).toBeInTheDocument();
      expect(screen.getByText("HeaderDropdownMenu")).toBeInTheDocument();
      expect(screen.getByText("HeaderShoppingCart")).toBeInTheDocument();
    });

    it("should have the correct links", () => {
      render(<Header />);
      expect(screen.getByText("DSport").closest("a")).toHaveAttribute(
        "href",
        routes.home
      );
      expect(screen.getByText("Trang chủ").closest("a")).toHaveAttribute(
        "href",
        routes.home
      );
      expect(screen.getByText("Sản phẩm").closest("a")).toHaveAttribute(
        "href",
        routes.products
      );
      expect(screen.getByText("Về chúng tôi").closest("a")).toHaveAttribute(
        "href",
        routes.about
      );
    });
  });

  // Edge Case Tests
  describe("Edge Cases", () => {
    it("should render without crashing when no props are passed", () => {
      // This test is more about ensuring no unexpected errors occur
      render(<Header />);
      expect(screen.getByText("DSport")).toBeInTheDocument();
    });

    it("should handle missing routes gracefully", () => {
      jest.mock("@/constants", () => ({
        routes: {
          home: undefined,
          products: undefined,
          about: undefined,
        },
      }));

      render(<Header />);
      expect(screen.getByText("DSport").closest("a")).toHaveAttribute(
        "href",
        ""
      );
      expect(screen.getByText("Trang chủ").closest("a")).toHaveAttribute(
        "href",
        ""
      );
      expect(screen.getByText("Sản phẩm").closest("a")).toHaveAttribute(
        "href",
        ""
      );
      expect(screen.getByText("Về chúng tôi").closest("a")).toHaveAttribute(
        "href",
        ""
      );
    });
  });
});
