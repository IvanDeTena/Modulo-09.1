// Definición del tipo de IVA
export type TipoIva =
  | "general"
  | "reducido"
  | "superreducidoA"
  | "superreducidoB"
  | "superreducidoC"
  | "sinIva";

// Definición de la interfaz Producto
export interface Producto {
  nombre: string;
  precio: number;
  tipoIva: TipoIva;
}

// Definición de la interfaz LineaTicket
export interface LineaTicket {
  producto: Producto;
  cantidad: number;
}

// Resultado de cada línea de ticket
export interface ResultadoLineaTicket {
  nombre: string;
  cantidad: number;
  precioSinIva: number;
  tipoIva: TipoIva;
  precioConIva: number;
}

// Resultado del total del ticket
export interface ResultadoTotalTicket {
  totalSinIva: number;
  totalConIva: number;
  totalIva: number;
}

// Desglose por tipo de IVA
export interface TotalPorTipoIva {
  tipoIva: TipoIva;
  cuantia: number;
  porcentaje: number;
}

// Ticket final
export interface TicketFinal {
  lineas: ResultadoLineaTicket[];
  total: ResultadoTotalTicket;
  desgloseIva: TotalPorTipoIva[];
}
