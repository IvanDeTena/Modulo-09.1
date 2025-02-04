import { calcularIva } from "../src/iva";
import { describe, it, expect } from "vitest";

describe("calcularIva", () => {
  it("debería calcular correctamente el IVA general (21%)", () => {
    // Arrange
    const precio = 100;
    const tipoIva = "general";

    // Act
    const resultado = calcularIva(precio, tipoIva);

    // Assert
    expect(resultado.iva).toBeCloseTo(21, 2);
    expect(resultado.porcentaje).toBe(21);
  });

  it("debería calcular correctamente el IVA reducido (10%)", () => {
    // Arrange
    const precio = 50;
    const tipoIva = "reducido";

    // Act
    const resultado = calcularIva(precio, tipoIva);

    // Assert
    expect(resultado.iva).toBeCloseTo(5, 2);
    expect(resultado.porcentaje).toBe(10);
  });

  it("debería calcular correctamente cuando el IVA es 0%", () => {
    // Arrange
    const precio = 30;
    const tipoIva = "sinIva";

    // Act
    const resultado = calcularIva(precio, tipoIva);

    // Assert
    expect(resultado.iva).toBe(0);
    expect(resultado.porcentaje).toBe(0);
  });
});
