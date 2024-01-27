const { PrismaClient } = require('@prisma/client');
const { playersSchema, playerSchema } = require('../validations/playersSchema.joi');
const {
  httpResponseMapper, BAD_REQUEST, CREATED, SUCCESS, NOT_FOUND,
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

const updatePlayer = async (playerId, newName) => {
  const { error } = playerSchema.validate({ name: newName });
  if (error) {
    return {
      status: httpResponseMapper(BAD_REQUEST),
      data: { error: 'Data validation', message: error.message },
    };
  }

  const playerFromDb = await prisma.player.findUnique({ where: { id: playerId } });

  if (!playerFromDb) {
    return {
      status: httpResponseMapper(NOT_FOUND),
      data: { error: 'Not found', message: 'Player not found' },
    };
  }

  await prisma.player.update({ where: { id: playerId }, data: { name: newName } });

  return {
    status: httpResponseMapper(SUCCESS),
    data: { message: 'Player updated' },
  };
};

module.exports = {
  createPlayers,
  getAllPlayers,
  updatePlayer,
};
