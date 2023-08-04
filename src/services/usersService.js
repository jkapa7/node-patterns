const data = [
  {
    id: 1,
    username: "juan",
    email: "juan@gmail.com",
    address: "Calle Falsa 123",
  },

  {
    id: 2,
    username: "daniel",
    email: "daniel@gmail.com",
    address: "Calle Falsa 124",
  },

  {
    id: 3,
    username: "laura",
    email: "laura@gmail.com",
    address: "Calle Falsa 125",
  },
];

const getUsers = () => {
  return data;
};

const getUserById = (id) => {
  return data.find((e) => e.id == id);
};

const createUser = (user) => {
  const newUser = { id: data.length + 1, ...user };
  data.push(newUser);
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
};
