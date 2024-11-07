const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { faker } = require('@faker-js/faker');
const { handleHashPassword } = require('../helpers/bcrypt')
const { Post } = require('../models/post')
const { User } = require('../models/user')
const { Tag } = require('../models/tag')


const createUser = async (email, password, role) => {
    let user = await User.findUnique({ where: { email } });
    if (!user) {
        user = await User.create({
            data: { email, password: await handleHashPassword(password), role },
        });
        console.log(`Usuario con rol '${role}' creado: ${email}\n`);
    } else {
        console.log(`Usuario ya existe: ${email}\n`);
    }
    return user;
};

const createTag = async (name) => {
    let tag = await Tag.findUnique({ where: { name } });
    if (!tag) {
        tag = await Tag.create({ data: { name } });
        console.log(`Etiqueta creada: ${name}\n`);
    } else {
        console.log(`Etiqueta ya existe: ${name}\n`);
    }
    return tag;
};

const createPost = async (title, content, authorId, tagNames, commentAuthors) => {

    const existingPost = await Post.findFirst({
        where: { title },
    });

    if (existingPost) {
        console.log(`El post con el título "${title}" ya existe.`);
        return existingPost;
    }

    return await Post.create({
        data: {
            title,
            content,
            authorId,
            tags: {
                connectOrCreate: tagNames.map(tagName => ({
                    where: { name: tagName },
                    create: { name: tagName },
                })),
            },
            comments: {
                create: commentAuthors.map(userId => ({
                    content: faker.lorem.sentence({ min: 50, max: 100 }),
                    userId,
                })),
            },
        },
    });
}

const seedDatabase = async () => {
    try {

        const userAdmin = await createUser('admin@example.com', 'securePassword123', 'ADMIN');
        const userAuthor = await createUser('author@example.com', 'securePassword123', 'AUTHOR');
        const userContributor = await createUser('contributor@example.com', 'securePassword123', 'CONTRIBUTOR');


        const tags = [
            'Tecnología',
            'Salud',
            'Estilo de vida',
            'Deportes', 'Educación',
            'Negocios',
            'Entretenimiento',
            'Viajes'
        ];

        Promise.all(tags.map(tag => createTag(tag)))

        await createPost(
            'La revolución tecnológica en 2023',
            faker.lorem.paragraphs(3),
            userAdmin.id,
            ['Tecnología', 'Educación'],
            [userAdmin.id, userContributor.id]
        );

        await createPost(
            'Beneficios de la meditación diaria',
            faker.lorem.paragraphs(3),
            userAuthor.id,
            ['Salud', 'Estilo de vida'],
            [userAdmin.id]
        );

        await createPost(
            'Consejos para un estilo de vida saludable',
            faker.lorem.paragraphs(3),
            userAdmin.id, ['Salud'],
            [userAuthor.id]
        );

        await createPost(
            'Avances en inteligencia artificial',
            faker.lorem.paragraphs(3),
            userAuthor.id,
            ['Tecnología', 'Educación'],
            [userAdmin.id]
        );

        await createPost(
            'El futuro del trabajo remoto',
            faker.lorem.paragraphs(3),
            userAdmin.id,
            ['Negocios', 'Tecnología'],
            [userContributor.id]
        );

        await createPost(
            'Importancia de la educación financiera',
            faker.lorem.paragraphs(3),
            userAuthor.id,
            ['Negocios'],
            [userAdmin.id]
        );

        await createPost(
            'Viajar para aprender: beneficios de las experiencias culturales',
            faker.lorem.paragraphs(3),
            userAdmin.id,
            ['Viajes'],
            [userContributor.id]
        );

        await createPost(
            'Los mejores ejercicios para mantenerse en forma',
            faker.lorem.paragraphs(3),
            userAuthor.id,
            ['Salud'],
            [userAdmin.id]
        );

        await createPost(
            'Cómo crear un negocio exitoso desde casa',
            faker.lorem.paragraphs(3),
            userAdmin.id,
            ['Negocios'],
            [userAuthor.id]
        );

        await createPost(
            'La música y su impacto en la salud mental',
            faker.lorem.paragraphs(3),
            userAuthor.id,
            ['Salud', 'Entretenimiento'],
            [userAdmin.id]
        );

        await createPost(
            'Guía para una alimentación balanceada',
            faker.lorem.paragraphs(3),
            userAdmin.id,
            ['Salud'],
            [userContributor.id]
        );

        await createPost(
            'Tendencias en marketing digital para 2023',
            faker.lorem.paragraphs(3),
            userAuthor.id,
            ['Negocios'],
            [userAdmin.id]
        );

        await createPost(
            'La sostenibilidad en el mundo actual',
            faker.lorem.paragraphs(3),
            userAdmin.id,
            ['Tecnología', 'Salud'],
            [userContributor.id]
        );

        await createPost(
            'Cómo manejar el estrés en la vida diaria',
            faker.lorem.paragraphs(3),
            userAuthor.id,
            ['Salud'],
            [userAdmin.id]
        );

        await createPost(
            'El arte de la fotografía en la era digital',
            faker.lorem.paragraphs(3),
            userAdmin.id,
            ['Entretenimiento'],
            [userAuthor.id]
        );

        await createPost(
            'Historias de éxito en emprendimiento',
            faker.lorem.paragraphs(3),
            userAuthor.id,
            ['Negocios'],
            [userContributor.id]
        );

        await createPost(
            'La influencia de las redes sociales en la sociedad',
            faker.lorem.paragraphs(3),
            userAdmin.id,
            ['Tecnología'],
            [userAdmin.id]
        );

        await createPost(
            'Consejos para mejorar la productividad',
            faker.lorem.paragraphs(3),
            userAuthor.id,
            ['Negocios'],
            [userAdmin.id]
        );

        await createPost(
            'Las mejores aplicaciones para la salud y el bienestar',
            faker.lorem.paragraphs(3),
            userAdmin.id,
            ['Salud', 'Tecnología'],
            [userContributor.id]
        );

        await createPost('El impacto de la inteligencia artificial en la educación',
            faker.lorem.paragraphs(3),
            userAuthor.id,
            ['Educación', 'Tecnología'],
            [userAdmin.id]
        );


        console.log('20 posts creados correctamente con comentarios.');
    } catch (error) {
        console.error('Error al conectar o poblar la base de datos', error);
    }
};

const connectToDatabase = async () => {
    try {
        await prisma.$connect();
        console.log('Conectado a la base de datos');
        await seedDatabase();
    } catch (error) {
        console.error('Error al conectar o poblar la base de datos', error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
};
module.exports = {
    connectToDatabase,
    prisma
}