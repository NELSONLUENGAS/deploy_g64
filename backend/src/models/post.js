const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const Post = prisma.post;

module.exports = {
    Post,
};