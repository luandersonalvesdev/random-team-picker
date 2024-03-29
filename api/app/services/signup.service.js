const { PrismaClient } = require('@prisma/client');
const signupSchema = require('../validations/signupSchema.joi');
const { generateToken } = require('../auth/authToken');
const { generateHashPass } = require('../validations/passwordValidator.bcrypt');
const {
  httpResponseMapper, CREATED, BAD_REQUEST, CONFLICT,
} = require('../utils/httpResponseMapper');

const prisma = new PrismaClient();

const doSignup = async (email, username, password) => {
  const { error } = signupSchema.validate({ email, username, password });
  if (error) {
    return {
      status: httpResponseMapper(BAD_REQUEST),
      data: {
        error: 'Validation error',
        message: error.message,
      },
    };
  }

  const userExists = await prisma.user.findFirst({
    where: {
      OR: [
        { username },
        { email },
      ],
    },
  });

  if (userExists) {
    return {
      status: httpResponseMapper(CONFLICT),
      data: {
        error: 'Conflict',
        message: 'Username or email already registered',
      },
    };
  }

  const hashedPass = await generateHashPass(password);

  const user = await prisma.user.create({
    data: { email, username, password: hashedPass },
  });

  const userPayload = {
    id: user.id,
    username,
  };

  const token = generateToken({ user: userPayload });

  return {
    status: httpResponseMapper(CREATED),
    data: { ...userPayload, token },
  };
};

module.exports = {
  doSignup,
};
