const formulario = document.getElementById('form-contacto');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre === '' || correo === '' || mensaje === '') {
        alert('¡Alto ahí! Debes llenar todos los campos antes de enviar tu mensaje.');
    } else {
        alert('¡Excelente, ' + nombre + '! Tu mensaje ha sido enviado con éxito. Pronto me comunicaré contigo.');
        
        formulario.reset();
    }
});