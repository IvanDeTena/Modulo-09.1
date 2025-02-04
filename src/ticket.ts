import { LineaTicket, TicketFinal, ResultadoLineaTicket, ResultadoTotalTicket, TotalPorTipoIva } from './types';
import { calcularIva } from './iva';

// Calcula el ticket
export const calculaTicket = (lineasTicket: LineaTicket[]): TicketFinal => {
  const lineas: ResultadoLineaTicket[] = [];
  let totalSinIva = 0;
  let totalConIva = 0;
  let totalIva = 0;
  const desgloseIva: TotalPorTipoIva[] = [];

  lineasTicket.forEach((linea) => {
    const { nombre, precio, tipoIva } = linea.producto;
    const { cantidad } = linea;

    const precioSinIva = precio * cantidad;
    const { iva, porcentaje } = calcularIva(precio * cantidad, tipoIva);
    const precioConIva = precioSinIva + iva;

    // Líneas ticket
    lineas.push({
      nombre,
      cantidad,
      precioSinIva: parseFloat(precioSinIva.toFixed(2)),
      tipoIva,
      precioConIva: parseFloat(precioConIva.toFixed(2)),
    });

    // Acumula los totales
    totalSinIva += precioSinIva;
    totalConIva += precioConIva;
    totalIva += iva;

    // Desglose por tipo de IVA
    const ivaExistente = desgloseIva.find((item) => item.tipoIva === tipoIva);
    if (ivaExistente) {
      ivaExistente.cuantia += iva;
    } else {
      desgloseIva.push({ tipoIva, cuantia: iva, porcentaje });
    }
  });

  // Crear el total
  const total: ResultadoTotalTicket = {
    totalSinIva: parseFloat(totalSinIva.toFixed(2)),
    totalConIva: parseFloat(totalConIva.toFixed(2)),
    totalIva: parseFloat(totalIva.toFixed(2)),
  };

  return { lineas, total, desgloseIva };
};
