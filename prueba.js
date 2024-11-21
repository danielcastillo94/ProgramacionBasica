function generarTabla() {
    // Obtén los valores de las filas y columnas del input
    const num_filas = parseInt(document.getElementById('num_filas').value);
    const num_columnas = parseInt(document.getElementById('num_columnas').value);

    // Verifica que los valores sean números válidos
    if (isNaN(num_filas) || isNaN(num_columnas) || num_filas <= 0 || num_columnas <= 0) {
        alert("Por favor, ingrese un número válido de filas y columnas.");
        return;
    }

    // Crea la tabla
    let tabla = '<table>';
    for (let i = 0; i < num_filas; i++) {
        tabla += '<tr>';
        for (let j = 0; j < num_columnas; j++) {
            tabla += `<td>Celda ${i + 1}, ${j + 1}</td>`;
        }
        tabla += '</tr>';
    }
    tabla += '</table>';

    // Muestra la tabla en el div
    document.getElementById('tablaResultado').innerHTML = tabla;
}