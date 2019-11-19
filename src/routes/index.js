const express = require("express");
const router = express.Router();
const nosotrosController = require("../controllers/nosotrosController");
const homeController = require("../controllers/homeController");
const viajesController = require("../controllers/viajesController");
const {
  crearTestimonial,
  mostrarTestimoniales
} = require("../controllers/testimonialesController");

router.get("/", homeController.inicio);
router.get("/nosotros", nosotrosController.infoNosotros);

router.get("/viajes", viajesController.infoViajes);
router.get("/viajes/:id", viajesController.infoViaje);

router.get("/testimoniales", mostrarTestimoniales);
router.post("/testimoniales", crearTestimonial);

module.exports = router;
