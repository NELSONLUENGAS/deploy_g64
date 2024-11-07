const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const Tag = prisma.tag;

module.exports = {
    Tag,
};