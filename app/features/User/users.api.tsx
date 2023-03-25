import { faker } from '@faker-js/faker';

export async function getUsers() {
  return Array.from({ length: 12 }, () => ({
    id: faker.datatype.uuid(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    email: faker.internet.email(),
    avatar: faker.image.avatar()
  }))
}