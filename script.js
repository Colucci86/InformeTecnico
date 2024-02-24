function generarInforme() {
    const orden = document.getElementById('orden').value;
    const informe = document.getElementById('informe').value;
    const reparacion = document.getElementById('reparacion').value;
    const costo = document.getElementById('costo').value;
    const demora = document.getElementById('demora').value;
    const observaciones = document.getElementById('observaciones').value;

    // Puedes realizar acciones con estos datos, como enviarlos a un servidor, generar un documento, etc.

    // Por ahora, solo mostraremos los datos en la consola para demostración.
    console.log(`Número de Orden: ${orden}`);
    console.log(`Informe Técnico: ${informe}`);
    console.log(`Reparación: ${reparacion}`);
    console.log(`Costo: ${costo}`);
    console.log(`Demora: ${demora}`);
    console.log(`Observaciones: ${observaciones}`);
}

function enviarWhatsApp() {
    const orden = document.getElementById('orden').value;
    const informe = document.getElementById('informe').value;
    const reparacion = document.getElementById('reparacion').value;
    const costo = document.getElementById('costo').value;
    const demora = document.getElementById('demora').value;
    const observaciones = document.getElementById('observaciones').value;

    const mensajeWhatsApp = `Número de Orden: ${orden}%0AInforme Técnico: ${informe}%0AReparación: ${reparacion}%0ACosto: ${costo}%0ADemora: ${demora}%0AObservaciones: ${observaciones}`;

    // Reemplaza el siguiente número con el número de teléfono al que deseas enviar el mensaje por WhatsApp.
    const numeroWhatsApp = '123456789';

    // Crea el enlace de WhatsApp con el mensaje.
    const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;

    // Abre el enlace en una nueva ventana.
    window.open(enlaceWhatsApp, '_blank');
}
