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
      console.log('User already exists.');
      return;
    }

    const password = 'adminpassword';
    const hashedPassword =
      '$2y$10$n3znieqptUX.ocWt22zZFO.Qg6DmGqgj1Lg2trt5dLayP9eadGJKW'; // Mot de passe : password

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
  console.error('Error during seed:', error);
  process.exit(1);
});
