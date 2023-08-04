// module.exports = {
//   getUsers: (req, res) => {
//     res.send("Respondo con todos los users");
//   },

//   getUserById: (req, res) => {
//     res.send("Respondo con un usuario por id");
//   },

//   createUser: (req, res) => {
//     res.send("Creo un nuevo usuario");
//   },
// };

class UsersController {
  constructor(usersService) {
    this.usersService = usersService;
  }

  getUsers = (req, res) => {
    const users = this.usersService.getUsers();
    res.status(200).json(users);
  };

  getUserById = (req, res) => {
    const { id } = req.params;
    const user = this.usersService.getUserById(id);
    res.status(200).json(user);
  };

  //CADENA DE RESPONSABILIDAD, CADENA DE MIDDLEWARE, SEPAREMOS BIEN LA RESPONSABILIDAD DE CADA COSA, CADA FUNCION HACE 1 SOLA COSA

  //LAS VALIDACIONES NO ES RESPONSABILIDAD DE ESTE CONTROLLER, MEJOR CREAR UNA FUNCION DEDICADA A ESO
  createUser = (req, res) => {
    const { username, email, address } = req.body;
    this.usersService.createUser({ username, email, address });
    res.status(200).json({ created: "OK" });
  };
}

module.exports = UsersController;
