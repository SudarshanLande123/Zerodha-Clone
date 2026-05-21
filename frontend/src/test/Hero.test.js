import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing-page/home/Hero";

describe("Hero Component", () => {
  
  test("renders hero image correctly", () => {
    render(<Hero />);

    const heroImg = screen.getByAltText("hero image");

    expect(heroImg).toBeInTheDocument();
    expect(heroImg).toHaveAttribute("src", "Media/Images/homeHero.png");
  });

  test("renders main heading", () => {
    render(<Hero />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Invest in Everything");
  });

  test("renders description paragraph", () => {
    render(<Hero />);

    const paragraph = screen.getByText(/Online Platform to Invest in Stocks/i);

    expect(paragraph).toBeInTheDocument();
  });

  test("renders signup link with correct text and href", () => {
    render(<Hero />);

    // Since <a> is inside <button>, we query the link
    const signupLink = screen.getByRole("link", { name: /sign up/i });

    expect(signupLink).toBeInTheDocument();
    expect(signupLink).toHaveAttribute("href", "/signup");
    expect(signupLink).toHaveTextContent("Sign up");
  });

});