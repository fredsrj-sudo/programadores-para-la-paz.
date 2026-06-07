const express = require('express');
const app = express();

// Soporta formularios y JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/registro', (req, res) => {
    // Muestra en la consola los datos recibidos
    console.log("Cuerpo recibido:", req.body);

    const nombre = req.body.nombre;
    const mensaje = req.body.mensaje;

    res.json({
        estado: "Datos recibidos",
        nombre: nombre,
        mensaje: mensaje
    });
});

const PORT = 3000;
app.post('/incidencia', (req, res) => {

  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  res.json({
    mensaje: "Incidencia registrada",
    tipo: tipo,
    descripcion: descripcion
  });

});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});

