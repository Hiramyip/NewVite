import { getUsers } from './services/userService'

const clientes = await getUsers();

const activeClients = clientes.filter(client => client.email.endsWith(".biz"));

console.log('Clientes:', activeClients);

console.log(clientes);


clientes.forEach(cliente => {
    console.log(`Cliente: ${cliente.id} - Categoría: ${cliente.name} - Correo electronico: ${cliente.email} - Ciudad ${cliente.address.city} - Empresa ${cliente.company.name}`);
  });