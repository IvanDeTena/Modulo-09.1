import { LineaTicket, TicketFinal } from './interfaces';

// Elementos HTML
export const crearControlesProductos = (productos: LineaTicket[], productosContainer: HTMLElement) => {
  productos.forEach((linea, index) => {
    const productoDiv = document.createElement("div");
    productoDiv.classList.add("producto");

    const label = document.createElement("label");
    label.textContent = `${linea.producto.nombre} (Precio: ${linea.producto.precio}€): `;

    const input = document.createElement("input");
    input.type = "number";
    input.min = "0";
    input.value = linea.cantidad.toString();

    // Actualizar cantidad
    input.addEventListener("input", () => {
      productos[index].cantidad = parseInt(input.value) || 0;
    });

    productoDiv.appendChild(label);
    productoDiv.appendChild(input);
    productosContainer.appendChild(productoDiv);
  });
};

export const mostrarTicket = (ticket: TicketFinal, ticketElement: HTMLElement) => {
  // Limpiar contenido previo
  ticketElement.innerHTML = "";

  // Crear tabla del ticket
  const table = document.createElement("table");

  // Crear encabezado
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  ["Producto", "Cantidad", "Precio Sin IVA", "Tipo de IVA", "Precio Con IVA"].forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Crear cuerpo de la tabla
  const tbody = document.createElement("tbody");
  ticket.lineas.forEach((linea) => {
    const row = document.createElement("tr");

    [linea.nombre, linea.cantidad, linea.precioSinIva.toFixed(2), linea.tipoIva, linea.precioConIva.toFixed(2)].forEach((dato) => {
      const td = document.createElement("td");
      td.textContent = dato.toString();
      row.appendChild(td);
    });

    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  // Agregar tabla al ticket
  ticketElement.appendChild(table);

  // Desglose de IVA
  const desgloseTitle = document.createElement("h3");
  desgloseTitle.textContent = "Desglose por tipo de IVA";
  ticketElement.appendChild(desgloseTitle);

  const desgloseList = document.createElement("ul");
  ticket.desgloseIva.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.tipoIva} (${item.porcentaje}%): ${item.cuantia.toFixed(2)}€`;
    desgloseList.appendChild(li);
  });
  ticketElement.appendChild(desgloseList);

  // Mostrar el total de la compra
  const totalCompra = document.createElement("h2");
  totalCompra.textContent = `Total a pagar: ${ticket.total.totalConIva.toFixed(2)}€`;
  ticketElement.appendChild(totalCompra);
};
