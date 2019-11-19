const Viaje = require("../models/Viajes");

exports.infoViajes = async (req, res) => {
  const viajes = await Viaje.findAll();
  res.render("viajes", {
    pagina: "Proximos viajes",
    viajes
  });
};

exports.infoViaje = async (req, res) => {
  const { id } = req.params;
  const viaje = await Viaje.findByPk(id);
  res.render("viajes/viaje", {
    pagina: `${viaje.titulo}`,
    viaje
  });
};
