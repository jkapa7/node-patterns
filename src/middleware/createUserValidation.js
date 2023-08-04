//PARA QUE NO ME MUESTRE ERROR POR ERROR AL IR RECIBIENDO BIEN LA DATA MIENTRAS SE VA AGREGANDO. MEJOR MOSTRAR TODOS LOS ERRORES EN UNA SOLA RESPUESTA.

//CREO UN PRIMER MIDDLEWARE QUE CREA UN ARRAY VACIO DONDE IRAN LOS ERRORES, A MEDIDA QUE PASE LA REQ POR LOS DEMAS, EN CASO DE HABER ERRORES SERAN AGREGADOS, Y AL FINAL SE DEVOLVERA EL ARRAY CON TODOS LOS ERRORES.
const initValidation = (req, res, next) => {
  req.errors = [];
  next();
};

//COMO PRINCIPIO, CADA VALIDACION SE DEBE ENCARGAR DE 1 SOLA COSA, SOLO UNA COSA.
const validateUsername = (req, res, next) => {
  const { username } = req.body;
  if (!username) req.errors.push("Falta el username");
  if (username && username.length < 6)
    req.errors.push("El username es muy corto");
  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email) req.errors.push("Falta el email");
  if (email && !email.includes("@")) req.errors.push("Esto no es un email");
  next();
};

const validateAddress = (req, res, next) => {
  const { address } = req.body;
  if (!address) req.errors.push("falta el address");
  next();
};

//PREGUNTO SI HUBO ALGUN ERROR, SI LO HUBO LO DEVUELVO
const validateErrors = (req, res, next) => {
  if (req.errors.length) {
    res.status(400).json(req.errors);
  } else {
    next();
  }
};

//COMO QUIERO QUE LA REQUEST PASE POR LAS TRES VALIDACIONES, UNA DESPUES DE LA OTRA, AL EXPORTARLAS LO HAGO EN UN ARRAY, ASI EN LA RUTA PASARA PRIMERO POR EL ARRAY, Y LUEGO CON EL CONTROLLER
module.exports = [
  initValidation,
  validateUsername,
  validateEmail,
  validateAddress,
  validateErrors,
];
