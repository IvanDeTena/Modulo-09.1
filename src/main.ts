import { LineaTicket } from './interfaces';
import { calculaTicket } from './calculaticket';
import { crearControlesProductos, mostrarTicket } from './ui';

// Elementos en el HTML
const ticketElement = document.getElementById("ticket");
const productosContainer = document.getElementById("productos-container");
const calcularButton = document.getElementById("calcular-btn");

if (ticketElement instanceof HTMLElement && productosContainer instanceof HTMLElement && calcularButton instanceof HTMLButtonElement) {
  // Productos iniciales
  const productos: LineaTicket[] = [
    { producto: { nombre: "Legumbres", precio: 2, tipoIva: "general" }, cantidad: 0 },
    { producto: { nombre: "Perfume", precio: 20, tipoIva: "general" }, cantidad: 0 },
    { producto: { nombre: "Leche", precio: 1, tipoIva: "superreducidoC" }, cantidad: 0 },
    { producto: { nombre: "Lasaña", precio: 5, tipoIva: "superreducidoA" }, cantidad: 0 },
    { producto: { nombre: "Pan", precio: 1.5, tipoIva: "superreducidoC" }, cantidad: 0 },
    { producto: { nombre: "Vino", precio: 8, tipoIva: "reducido" }, cantidad: 0 },
    { producto: { nombre: "Agua", precio: 0.8, tipoIva: "sinIva" }, cantidad: 0 },
    { producto: { nombre: "Chocolate", precio: 3, tipoIva: "reducido" }, cantidad: 0 },
    { producto: { nombre: "Queso", precio: 4.5, tipoIva: "superreducidoB" }, cantidad: 0 },
  ];

  // Controles de entrada para cada producto
  crearControlesProductos(productos, productosContainer);

  // Calcular ticket y mostrar resultados seleccionados
  calcularButton.addEventListener("click", () => {
    // Filtrar productos seleccionados
    const productosSeleccionados = productos.filter(linea => linea.cantidad > 0);

    // Si no hay productos seleccionados, mostrar un mensaje 
    if (productosSeleccionados.length === 0) {
      ticketElement.innerHTML = "No se ha seleccionado ningún producto.";
      return;
    }

    // Calcula el ticket con los productos seleccionados
    const ticket = calculaTicket(productosSeleccionados);
    
    // Ticket con los productos seleccionados
    mostrarTicket(ticket, ticketElement);
  });
}
