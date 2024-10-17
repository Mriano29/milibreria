/// <reference types="vitest" />
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts", // Punto de entrada de la librería.
      name: "milibreria", // Nombre de la librería.
      fileName: (format) => `index.${format}.js`, // Formato de los archivos de salida.
      formats: ["cjs", "es"], // Formatos: CommonJS y ES Module.
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)], // Excluir dependencias peer de la librería.
    },
    sourcemap: true, // Habilita sourcemaps para depuración.
    emptyOutDir: true, // Limpia el directorio de salida antes de la compilación.
  },
  plugins: [
    dts({
      insertTypesEntry: true, // Inserta automáticamente un archivo de declaración de tipos (index.d.ts).
    }),
  ],
  test: {
    globals: true, // Habilita variables globales en las pruebas.
    environment: "jsdom", // Establece "jsdom" como entorno de pruebas.
    setupFiles: "./setupTests.ts", // Archivo de configuración de pruebas.
  },
});
