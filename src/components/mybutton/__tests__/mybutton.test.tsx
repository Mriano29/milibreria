import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MyCustomButton from "../mybutton"; // importo mi componente CustomButton
describe("MyCustomButton component", () => {
it("El botón se debería renderizar correctamente", () => {
render(<MyCustomButton text='Hola' txtcolor='white' bgcolor='orange' borderWidth="small" borderColor={"red"} hoverTxtColor={"blue"} hoverColor={"black"}/>);
const button = screen.getByRole("button");
expect(button).toBeInTheDocument();
});
});