import React from "react";
import About from "../page";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Mocking components
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, ...props }: any) => <a {...props}>{children}</a>,
}));

jest.mock("lucide-react", () => ({
  ArrowLeft: () => <svg data-testid="arrow-left-icon" />,
  Award: () => <svg data-testid="award-icon" />,
  MapPin: () => <svg data-testid="map-pin-icon" />,
  ShoppingBag: () => <svg data-testid="shopping-bag-icon" />,
  Users: () => <svg data-testid="users-icon" />,
}));

jest.mock("@/components/ui/button", () => ({
  Button: ({ children, ...props }: any) => (
    <button {...props}>{children}</button>
  ),
}));

jest.mock("@/components/ui/card", () => ({
  Card: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  CardContent: ({ children, ...props }: any) => (
    <div {...props}>{children}</div>
  ),
}));

jest.mock("@/components/ui/separator", () => ({
  Separator: (props: any) => <hr {...props} />,
}));

describe("About() About method", () => {
  // Happy Path Tests
  describe("Happy Paths", () => {
    it("should render the About component with all sections", () => {
      render(<About />);

      // Check for the presence of the hero section
      expect(
        screen.getByRole("heading", {
          name: /Về Cửa Hàng Cầu Lông Của Chúng Tôi/i,
        })
      ).toBeInTheDocument();

      // Check for the presence of the "Our Story" section
      expect(
        screen.getByRole("heading", { name: /Câu Chuyện Của Chúng Tôi/i })
      ).toBeInTheDocument();

      // Check for the presence of the "Mission & Values" section
      expect(
        screen.getByRole("heading", { name: /Sứ Mệnh & Giá Trị/i })
      ).toBeInTheDocument();

      // Check for the presence of the "Our Team" section
      expect(
        screen.getByRole("heading", { name: /Đội Ngũ Của Chúng Tôi/i })
      ).toBeInTheDocument();

      // Check for the presence of the "Our Stores" section
      expect(
        screen.getByRole("heading", { name: /Cửa Hàng Của Chúng Tôi/i })
      ).toBeInTheDocument();

      // Check for the presence of the "Testimonials" section
      expect(
        screen.getByRole("heading", { name: /Khách Hàng Nói Gì Về Chúng Tôi/i })
      ).toBeInTheDocument();

      // Check for the presence of the CTA section
      expect(
        screen.getByRole("heading", {
          name: /Ghé Thăm Chúng Tôi Ngay Hôm Nay/i,
        })
      ).toBeInTheDocument();
    });

    it("should render the back link with correct href", () => {
      render(<About />);
      const backLink = screen.getByRole("link", { name: /Trở về trang chủ/i });
      expect(backLink).toHaveAttribute("href", "/");
    });
  });

  // Edge Case Tests
  describe("Edge Cases", () => {
    it("should render default images when no image source is provided", () => {
      render(<About />);
      const images = screen.getAllByRole("img");
      images.forEach((img) => {
        expect(img).toHaveAttribute(
          "src",
          expect.stringContaining("/placeholder.svg")
        );
      });
    });

    it("should render all icons correctly", () => {
      render(<About />);
      expect(screen.getByTestId("arrow-left-icon")).toBeInTheDocument();
      expect(screen.getByTestId("award-icon")).toBeInTheDocument();
      expect(screen.getByTestId("map-pin-icon")).toBeInTheDocument();
      expect(screen.getByTestId("shopping-bag-icon")).toBeInTheDocument();
      expect(screen.getByTestId("users-icon")).toBeInTheDocument();
    });
  });
});
