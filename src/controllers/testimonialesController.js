const Testimonial = require("../models/Testimoniales");

mostrarTestimoniales = async (req, res) => {
  const testimoniales = await Testimonial.findAll();
  res.render("testimoniales", {
    pagina: "Testimoniales",
    testimoniales
  });
};

crearTestimonial = async (req, res) => {
  let { nombre, email, mensaje } = req.body;
  let errores = [];
  if (!nombre) {
    errores.push({ mensaje: "Agrega tu nombre" });
  }
  if (!email) {
    errores.push({ mensaje: "Agrega tu email" });
  }
  if (!mensaje) {
    errores.push({ mensaje: "Agrega tu mensaje" });
  }

  if (errores.length > 0) {
    //mostrar los errores
    const testimoniales = await Testimonial.findAll();
    res.render("testimoniales", {
      errores,
      nombre,
      email,
      mensaje,
      testimoniales
    });
  } else {
    //almacenar en la db
    const testimonial = await Testimonial.create({
      nombre,
      email,
      mensaje
    });
    res.redirect("/testimoniales");
  }
};

module.exports = { mostrarTestimoniales, crearTestimonial };
