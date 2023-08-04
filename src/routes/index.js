const { Router } = require("express");
const UsersController = require("../controllers/UsersController");
const createUserValidation = require("../middleware/createUserValidation");

const controller = new UsersController(require("../services/usersService"));

const router = Router();

router.get("/users", controller.getUsers);

router.get("/users/:id", controller.getUserById);

router.post("/users", createUserValidation, controller.createUser);

module.exports = router;

// ruta => controlador => servicio

// ruta => handler => controladore
