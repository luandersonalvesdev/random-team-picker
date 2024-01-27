const { PrismaClient } = require('@prisma/client');
const playersSchema = require('../validations/playersSchema.joi');
const {
  httpResponseMapper, BAD_REQUEST, CREATED, SUCCESS,
} = require('../utils/httpResponseMapper');

const prisma = new PrismaClient();

const createPlayers = async (players, user) => {
  const { error } = playersSchema.validate({ players });
  if (error) {
    return {
      status: httpResponseMapper(BAD_REQUEST),
      data: { error: 'Data validation', message: error.message },
    };
  }

  const userId = user.id;

  await prisma.$transaction(players.map((playerName) => {
    const formattedName = playerName.trim();
    return prisma.player.create({ data: { name: formattedName, userId } });
  }));
  await prisma.$disconnect();

  return {
    status: httpResponseMapper(CREATED),
    data: { message: 'Players created' },
  };
};

const getAllPlayers = async (user) => {
  const userId = user.id;
  const players = await prisma.player.findMany({ where: { userId } });

  return {
    status: httpResponseMapper(SUCCESS),
    data: players,
  };
};

module.exports = {
  createPlayers,
  getAllPlayers,
};
