function mostrarPrecio() {
    var producto = document.getElementById("producto").value;
    var precio;
  
    switch (producto) {
        case "arroz":
            precio = 4.50;
            break;
        case "azucar":
            precio = 6.20;
            break;
        case "chocolate":
            precio = 1.20;
            break;
        case "aceite":
            precio = 12.50;
            break;
        default:
            precio = 0;
    }

    document.getElementById("precio").textContent = "Precio: S/ " + precio.toFixed(2);
  }
  
  
  function calcularImporte() {
    var producto = document.getElementById("producto").value;
  
    if (producto.trim() === "") {
      alert("Por favor, seleccione un producto antes de calcular el importe.");
      return;
    }
  
    var cantidad = document.getElementById("cantidad").value;
    var descuento = document.getElementById("descuento").value;
    var precio;
  
  
    if (isNaN(cantidad) || cantidad.trim() === "") {
        alert("Por favor, ingrese un número válido para la cantidad.");
        return;
    }
  
    if (isNaN(descuento) || descuento.trim() === "") {
        alert("Por favor, ingrese un número válido para el descuento.");
        return;
    }
  
    cantidad = parseInt(cantidad);
    descuento = parseInt(descuento);
  
    switch (producto) {
        case "arroz":
            precio = 4.50;
            break;
        case "azucar":
            precio = 6.20;
            break;
        case "chocolate":
            precio = 1.20;
            break;
        case "aceite":
            precio = 12.50;
            break;
        default:
            precio = 0;
    }
  
    if (cantidad <= 0) {
        alert("La cantidad debe ser mayor a 0.");
        return;
    }
  
    if (descuento < 0) {
        alert("El descuento no puede ser menor que 0.");
        return;
    }
  
    var importeSoles = cantidad * precio - (cantidad * precio * descuento) / 100;
    var importeDolares = importeSoles / 3.8;
  
    document.getElementById("importeSoles").textContent = "Importe en Soles: S/ " + importeSoles.toFixed(2);
    document.getElementById("importeDolares").textContent = "Importe en Dólares: $ " + importeDolares.toFixed(2);
  }

  function limpiar() {
    document.getElementById("producto").value = "";
    document.getElementById("cantidad").value = "1";
    document.getElementById("descuento").value = "0";
    document.getElementById("precio").textContent = "Precio: ";
    document.getElementById("importeSoles").textContent = "";
    document.getElementById("importeDolares").textContent = "";
  }

  document.getElementById("producto").addEventListener("change", function() {
    mostrarPrecio();
  });

  document.getElementById("calcularButton").addEventListener("click", function() {
    calcularImporte();
  });
  
