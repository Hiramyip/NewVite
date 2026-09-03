import type { User } from '../models/user';

export async function getUsers(): Promise<User[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const clientes: User[] = await response.json();
  return clientes;
}

