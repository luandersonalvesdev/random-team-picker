// eslint-disable-next-line import/no-extraneous-dependencies
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const jorel = await prisma.user.upsert({
    where: { email: 'jorel@email.com' },
    update: {},
    create: {
      email: 'jorel@email.com',
      username: 'Jorel',
      password: '123456',
      players: {
        create: [
          {
            name: 'Player1',
          },
          {
            name: 'Player2',
          },
        ],
      },
    },
  });
  const lara = await prisma.user.upsert({
    where: { email: 'lara@email.com' },
    update: {},
    create: {
      email: 'lara@email.com',
      username: 'Lara',
      password: '123456',
      players: {
        create: {
          name: 'Player3',
        },
      },
    },
  });
  console.log({ jorel, lara });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
