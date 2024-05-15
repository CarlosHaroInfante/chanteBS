/**
 * 
 */

  function validarFormulario() {
            var email = document.getElementById("email").value;
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            var confirmPassword = document.getElementById("confirmPassword").value;

            // Validar que las contraseñas coincidan
            if (password !== confirmPassword) {
                alert("Las contraseñas no coinciden");
                return false;
            }

            // Aquí podrías agregar más validaciones según tus necesidades

            // Si todo está correcto, puedes enviar el formulario
            alert("Registrado correctamente");
            return true;
        }
 

// Funciones relacionadas con el carrito de compras
function getCartCount() {
    var count = localStorage.getItem('cartCount');
    return count ? parseInt(count) : 0;
}

function saveCartCount(count) {
    localStorage.setItem('cartCount', count);
}

function addToCart(producto) {
    var counter = getCartCount();
    counter++;
    saveCartCount(counter);
    document.getElementById('contador-carrito').textContent = counter;
}

// Llamamos a la función de calcularTotal al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia al contador del carrito
    const contadorCarrito = document.getElementById('contador-carrito');

    // Escuchar clics en los botones "Agregar al carrito"
    const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');
    botonesAgregarCarrito.forEach(boton => {
        boton.addEventListener('click', () => {
            // Obtener el nombre del producto
            const producto = boton.getAttribute('data-producto');
            // Obtener el valor actual del contador
            let cantidad = parseInt(contadorCarrito.textContent);
            // Incrementar el contador en 1
            cantidad++;
            // Actualizar el texto del contador
            contadorCarrito.textContent = cantidad;
            // Agregar producto al carrito
            addToCart(producto);
            calcularTotal(); // Llamamos a la función para recalcular el total después de agregar un producto
        });
    });

    // Al cargar la página, recuperar el contador del carrito del almacenamiento local
    var counter = getCartCount();
    contadorCarrito.textContent = counter;

    // Escuchar clics en el botón "Limpiar carrito"
    document.getElementById('clear-cart-button').addEventListener('click', function() {
        // Establecer la cantidad del carrito a cero
        contadorCarrito.textContent = '0';
        // Guardar el contador a cero en el almacenamiento local
        saveCartCount(0);
    });
});
