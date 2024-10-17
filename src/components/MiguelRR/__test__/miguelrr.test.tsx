import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MiguelRR from "../miguelrr";
import React from "react";
describe("MiguelRR component", () => {
it("El icono se debe renderizar correctamente", () => {
render(<MiguelRR text="Esto es un texto de prueba" alignment="center" color="primary" bottomMargin={true} variant="h1"/>);
const textElement = screen.getByText("Esto es un texto de prueba");
expect(textElement).toBeInTheDocument();
});
});