const { PrismaClient } = require('@prisma/client');
const { playersSchema, playerSchema } = require('../validations/playersSchema.joi');
const {
  httpResponseMapper, BAD_REQUEST, CREATED, SUCCESS, NOT_FOUND, NO_CONTENT,
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

  players.forEach(async (player) => {
    const formattedName = player.trim();
    await prisma.player.create({ data: { name: formattedName, userId } });
  });

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

const deletePlayer = async (playerId) => {
  try {
    await prisma.player.delete({
      where: { id: playerId },
    });

    return {
      status: httpResponseMapper(NO_CONTENT),
      data: '',
    };
  } catch (error) {
    console.log(error);
    return {
      status: httpResponseMapper(NOT_FOUND),
      data: { error: 'Not found', message: 'Player not found' },
    };
  }
};

module.exports = {
  createPlayers,
  getAllPlayers,
  updatePlayer,
  deletePlayer,
};
