import { getUsers } from './services/userService'

const clientes = await getUsers();
console.log(clientes);

