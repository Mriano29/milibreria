import { expect } from "vitest";
import * as matchers from "@testing-library/jest-dom/matchers";
// Importa jest-dom para usar aserciones adicionales como toBeInTheDocument()
import '@testing-library/jest-dom';

// Extender expect con los matchers de jest-dom
expect.extend(matchers);

// Extender la interfaz Assertion de Vitest para que incluya los matchers de jest-dom
declare module "vitest" {
  interface Assertion<T = any> extends jest.Matchers<void, T>, matchers.TestingLibraryMatchers<T, void> {}
}
