const express = require("express");
const user = require("../models/user");
const userSchema = require("../models/user");

const router = express.Router();

router.get("/user", async (req, res) => {//obtener
  try {
    const list = await user.find({ activo: true });
    res.send(list);
  } catch (error) {
    res.json({ msj: "Contactos optenidos correctamente" });
  }

});

router.post("/user", async (req, res) => {//agregar
  try {
    console.log(req.body);
    const user = userSchema(req.body);
    await user.save();
  } catch (error) {
    res.json({ msj: "Documento insertado en db", id: "user._id" });
  }

});

router.put("/user/:id", async (req, res) => {//actualizar
  try {
    const id = req.params.id;
    const data = req.body;

    if (id && data) {
      await user.findByIdAndUpdate(id, data);
      res.json("registro actualizado");
    } else {
      res.json({ msj: "datos insuficientes" })
    }
  } catch (error) {
    res.json({ msj: "datos insuficientes" })
  }

});

router.delete("/user/:id", async (req, res) => {//eliminar
  try {
    const id = req.params.id;
    console.log(id);
    const borraro = await user.findByIdAndUpdate(id, { activo: false })
    res.status(200).json({ msj: "CONTACTO BORRADO" });
  } catch (error) {
  }

});

module.exports = router;
