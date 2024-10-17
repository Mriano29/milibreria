import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MyFavourite from "../myfavourite";
describe("MyFavourite component", () => {
it("El icono se debe renderizar correctamente", () => {
render(<MyFavourite iconColor="success"/>);
const Button = screen.getByRole("button");
expect(Button).toBeInTheDocument();
});
});