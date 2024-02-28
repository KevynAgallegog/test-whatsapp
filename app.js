const express = require('express');
const app = express();

// Ruta para manejar el enlace de WhatsApp con mensaje predefinido
app.get('/whatsapp/:phoneNumber', (req, res) => {
  const phoneNumber = req.params.phoneNumber;
  const mensaje = req.query.text || ''; // Obtener el mensaje predefinido de la consulta de la URL
  // Redirigir a la URL de WhatsApp con el mensaje predefinido
  res.redirect(`https://wa.me/${phoneNumber}?text=${mensaje}`);
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
