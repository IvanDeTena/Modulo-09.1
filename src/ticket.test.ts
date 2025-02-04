import { calculaTicket } from "../src/ticket";
import { LineaTicket } from "../src/types";
import { describe, it, expect } from "vitest";

describe("calculaTicket", () => {
  it("debería calcular correctamente el total del ticket", () => {
    // Arrange
    const lineas: LineaTicket[] = [
      { producto: { nombre: "Pan", precio: 1, tipoIva: "superreducidoC" }, cantidad: 2 },
      { producto: { nombre: "Vino", precio: 8, tipoIva: "reducido" }, cantidad: 1 },
    ];

    // Act
    const ticket = calculaTicket(lineas);

    // Assert
    expect(ticket.total.totalSinIva).toBeCloseTo(10, 2);
    expect(ticket.total.totalConIva).toBeCloseTo(10.8, 2);
    expect(ticket.total.totalIva).toBeCloseTo(0.8, 2);
  });

  it("debería devolver totales en 0 si no hay productos", () => {
    // Arrange
    const lineas: LineaTicket[] = [];

    // Act
    const ticket = calculaTicket(lineas);

    // Assert
    expect(ticket.total.totalSinIva).toBe(0);
    expect(ticket.total.totalConIva).toBe(0);
    expect(ticket.total.totalIva).toBe(0);
  });
});
