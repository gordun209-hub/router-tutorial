import App from "./App";
import { test, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
test("renders", () => {
   render(<App />);
});
