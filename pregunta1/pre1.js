function calcular() {
  let numero = document.getElementById('numero').value.trim(); 
  if (numero === '') {
    alert('Por favor ingresa un número.');
    return;
  }

  if (isNaN(numero)) {
    alert('El valor ingresado no es un número válido.');
    return;
  }

  numero = parseInt(numero);
  let resultadoElemento = document.getElementById('resultado');
  if (numero === 0) {
    resultadoElemento.textContent = 'Cero';
  } else if (numero > 0) {
    resultadoElemento.textContent = 'El número ingresado es Positivo';
  } else {
    resultadoElemento.textContent = 'El número ingresado es Negativo';
  }
}

function limpiar() {
  document.getElementById('numero').value = '';
  document.getElementById('resultado').textContent = '';
}
