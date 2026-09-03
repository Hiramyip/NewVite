import { getUsers } from './services/userService'

const clientes = await getUsers();

const clientesSimples = clientes.map(cliente => ({
    id: cliente.id,
    nombre: cliente.name,
    correo: cliente.email,
    empresa: cliente.company.name
  }));
  console.log('==Directorio de clientes==');
  console.log(clientesSimples);
 console.log('==Clientes con email .biz==');
const activeClients = clientes.filter(cliente => cliente.email.endsWith(".biz"));
activeClients.forEach(cliente => {console.log(`Cliente: ${cliente.name}| Ciudad: ${cliente.address.city}|Empresa: ${cliente.company.name}`)})

const clientesXciudad = clientes.reduce((acc, cliente) => {
    const city = cliente.address.city;
    acc[city] = (acc[city] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  console.log('==Clientes por ciudad==');
  console.log(clientesXciudad);