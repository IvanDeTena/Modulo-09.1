import { TipoIva } from './interfaces';

// Calcula el IVA de acuerdo al tipo
export const calcularIva = (precio: number, tipoIva: TipoIva): { iva: number; porcentaje: number } => {
  const ivaPorcentaje = {
    general: 21,
    reducido: 10,
    superreducidoA: 5,
    superreducidoB: 4,
    superreducidoC: 0,
    sinIva: 0,
  };

  const porcentaje = ivaPorcentaje[tipoIva];
  return { iva: (precio * porcentaje) / 100, porcentaje };
};
