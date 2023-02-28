import { PrismaClient } from './pulse_client';

const prisma = new PrismaClient();

async function main() {

  console.log('Seeding...');

  // const user1 = await prisma.user.create({
  // 	data: {
  // 		email: 'lisa@simpson.com',
  // 		fullName: 'Lisa Simpson',
  // 		phoneNumber: '+3809999999998',
  // 		uniqueName: 'lisa',
  // 		password:
  // 			'$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
  // 		role: 'USER',
  // 	},
  // });
  const user = await prisma.pulseUser.create({
    data: {
      address: "1234 Main St",
      email: 'bart@simpson.com',
      fullName: 'Bart Simpson',
      phoneNumber: '+380999999999',
      uniqueName: 'bart',
      role: 'PATIENT',
      password:
        '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
    },
  });

  const doctor = await prisma.doctor.create({
    data: {
      user: {
        create: {
          address: "1234 Main St",
          email: "doctor@gmail.com",
          fullName: "Doctor Simpson",
          phoneNumber: "+380999999998",
          uniqueName: "doctor",
          role: "DOCTOR",
          password: "$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm"
        }
      }
    }
  });

  console.log({ user, doctor });

}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
