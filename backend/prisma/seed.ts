import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        email: 'user@example.com',
      },
    });

    if (existingUser) {
      return;
    }

    const password = 'adminpassword';
    const hashedPassword =
      '$2a$12$77NK1cuwhri3H.PV6g8IEu8JC18DTkZyssmKIEBFM5jg1pP8/7xqm'; // Mot de passe : password

    const admin = await prisma.user.create({
      data: {
        email: 'admin@example.com',
        password: hashedPassword,
        role: 'ADMIN',
        firstname: 'John',
        lastname: 'Doe',
        jobTitle: 'Admin',
        teamId: null, // Remplacez par l'ID de l'équipe par défaut
      },
    });

    const user = await prisma.user.create({
      data: {
        email: 'user@example.com',
        password: hashedPassword,
        role: 'USER',
        firstname: 'Jack',
        lastname: 'Doe',
        jobTitle: 'User',
        teamId: null, // Remplacez par l'ID de l'équipe par défaut
      },
    });
  } catch (error) {
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  process.exit(1);
});
