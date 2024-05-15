/**
 * 
 */

 /*//Función para calcular el subtotal y el total
	function calcularTotal() {
	    let subtotal = 0;
	
	    // Itera sobre cada fila de producto
	    document.querySelectorAll('.precio').forEach(precioElemento => {
	        const precio = parseFloat(precioElemento.getAttribute('data-precio'));
	        const cantidad = parseInt(precioElemento.closest('tr').querySelector('.cantidad').value);
	        subtotal += precio * cantidad;
	    });
	
	    const shipping = 2.99; // Costo de envío
	    const total = subtotal + shipping;
	
	    // Actualiza los valores en la página
	    document.getElementById('subtotal').textContent = subtotal.toFixed(2) + '€';
	    document.getElementById('total').textContent = total.toFixed(2) + '€';
	    document.getElementById('checkoutTotal').textContent = total.toFixed(2) + '€';
	}
	

// Botones de más y menos cantidad
const botonesMasCantidad = document.querySelectorAll('.btn-plus');
const botonesMenosCantidad = document.querySelectorAll('.btn-minus');

botonesMasCantidad.forEach(boton => {
    boton.addEventListener('click', () => {
        // Llamar a la función calcularTotal() para actualizar el subtotal y el total
        calcularTotal();
    });
});

botonesMenosCantidad.forEach(boton => {
    boton.addEventListener('click', () => {
        // Llamar a la función calcularTotal() para actualizar el subtotal y el total
        calcularTotal();
    });
});
	
	
	document.getElementById('btnPagar').addEventListener('click', function() {
	    alert('¡Pedido realizado correctamente!');
	});
	
	
	document.getElementById("btnPagar").addEventListener("click", function() {
	    var nombreTarjeta = document.getElementById("typeName").value;
	    var numeroTarjeta = document.getElementById("typeText").value;
	    var expiracion = document.getElementById("typeExp").value;
	    var cvv = document.getElementById("typeText").value;
	    
	    // Expresiones regulares para validar nombre y número de tarjeta
	    var regexNombre = /^[a-zA-Z\s]+$/;
	    var regexNumero = /^[0-9\s]+$/;
	    
	    var isValid = true;
	    
	    // Validar nombre de tarjeta
	    if (!regexNombre.test(nombreTarjeta)) {
	        isValid = false;
	        alert("Por favor, ingresa un nombre de tarjeta válido.");
	        return;
	    }
	    
	    // Validar número de tarjeta
	    if (!regexNumero.test(numeroTarjeta)) {
	        isValid = false;
	        alert("Por favor, ingresa un número de tarjeta válido.");
	        return;
	    }
	    
	    // Más validaciones (expiración, CVV, etc.) aquí
	    
	    // Si todos los campos son válidos, continuar con el pago
	    if (isValid) {
	        alert("Pago exitoso. Gracias por su compra.");
	        // Aquí puedes enviar los datos del pago al servidor o realizar otras acciones necesarias
	    }
	});*/
	
	
	    // Agrega eventos para recalcular el subtotal y el total cuando cambia la cantidad
    document.querySelectorAll('.cantidad').forEach(input => {
        input.addEventListener('change', calcularTotal);
    });

    // Función para calcular el subtotal y el total
    function calcularTotal() {
        let subtotal = 0;

        // Itera sobre cada fila de producto
        document.querySelectorAll('.precio').forEach(precioElemento => {
            const precio = parseFloat(precioElemento.getAttribute('data-precio'));
            const cantidad = parseInt(precioElemento.closest('tr').querySelector('.cantidad').value);
            subtotal += precio * cantidad;
        });

        const shipping = 2.99; // Costo de envío
        const total = subtotal + shipping;

        // Actualiza los valores en la página
        document.getElementById('subtotal').textContent = subtotal.toFixed(2) + '€';
        document.getElementById('total').textContent = total.toFixed(2) + '€';
        document.getElementById('checkoutTotal').textContent = total.toFixed(2) + '€';
    }
    
    
  /*  document.getElementById('btnPagar').addEventListener('click', function() {
        alert('¡Pedido realizado correctamente!');
    });
    
    
    document.getElementById("btnPagar").addEventListener("click", function () {
    var nombreTarjeta = document.getElementById("typeName").value;
    var numeroTarjeta = document.getElementById("typeText").value;
    var expiracion = document.getElementById("typeExp").value;
    var cvv = document.getElementById("typeCvv").value;

    // Expresiones regulares para validar nombre y número de tarjeta
    var regexNombre = /^[a-zA-Z\s]+$/;
    var regexNumero = /^[0-9\s]+$/;
    var regexCVV = /^[0-9]{3,4}$/;
    var isValid = true;

    // Validar nombre de tarjeta
    if (!regexNombre.test(nombreTarjeta)) {
        isValid = false;
        alert("Por favor, ingresa un nombre de tarjeta válido.");
        return;
    }

    // Validar número de tarjeta
    if (!regexNumero.test(numeroTarjeta)) {
        isValid = false;
        alert("Por favor, ingresa un número de tarjeta válido.");
        return;
    }

    // Validar CVV
    if (!regexCVV.test(cvv)) {
        isValid = false;
        alert("Por favor, ingresa un CVV válido.");
        return;
    }

    // Validar fecha de expiración
    var fechaActual = new Date();
    var mesActual = fechaActual.getMonth() + 1; // El mes actual es base cero
    var añoActual = fechaActual.getFullYear();
    var expiracionSplit = expiracion.split('/'); // Suponiendo que la fecha de expiración está en formato MM/YY
    var expiracionMes = parseInt(expiracionSplit[0]);
    var expiracionAño = parseInt(expiracionSplit[1]);

    if (expiracionAño < añoActual || (expiracionAño === añoActual && expiracionMes < mesActual)) {
        isValid = false;
        alert("La fecha de expiración no puede ser anterior al mes y año actual.");
        return;
    }

    // Si todos los campos son válidos, continuar con el pago
    if (isValid) {
        alert("Pago exitoso. Gracias por su compra.");
        // Aquí puedes enviar los datos del pago al servidor o realizar otras acciones necesarias
    }
});

document.getElementById('btnPagar').addEventListener('click', function() {
        alert('¡Pedido realizado correctamente!');
    });
    */
    
    document.getElementById("btnPagar").addEventListener("click", function() {
        var nombreTarjeta = document.getElementById("typeName").value;
        var numeroTarjeta = document.getElementById("typeText").value;
        var expiracion = document.getElementById("typeExp").value;
        
        
        // Expresiones regulares para validar nombre y número de tarjeta
        var regexNombre = /^[a-zA-Z\s]+$/;
        var regexNumero = /^[0-9\s]+$/;
        
        var isValid = true;
        
        // Validar nombre de tarjeta
        if (!regexNombre.test(nombreTarjeta)) {
            isValid = false;
            alert("Por favor, ingresa un nombre de tarjeta válido.");
            return;
        }
        
        // Validar número de tarjeta
        if (!regexNumero.test(numeroTarjeta) || numeroTarjeta.length !== 16) {
        isValid = false;
        alert("Por favor, ingresa un número de tarjeta válido de 16 dígitos.");
        return;
    }
        
        // Validar fecha de expiración
	    var fechaActual = new Date();
	    var mesActual = fechaActual.getMonth() + 1; // El mes actual es base cero
	    var añoActual = fechaActual.getFullYear();
	    var expiracionSplit = expiracion.split('/'); // Suponiendo que la fecha de expiración está en formato MM/YY
	    var expiracionMes = parseInt(expiracionSplit[0]);
	    var expiracionAño = parseInt(expiracionSplit[1]);

    if (expiracionAño < añoActual || (expiracionAño === añoActual && expiracionMes < mesActual)) {
        isValid = false;
        alert("La fecha de expiración no puede ser anterior al mes y año actual.");
        return;
    }
        
        // Si todos los campos son válidos, continuar con el pago
        if (isValid) {
            alert("Pago exitoso. Gracias por su compra.");
            // Aquí puedes enviar los datos del pago al servidor o realizar otras acciones necesarias
        }
    });


