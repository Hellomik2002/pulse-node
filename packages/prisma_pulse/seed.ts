import { PrismaClient } from "./pulse_client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding...");

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
  const clinic1 = await prisma.clinic.create({
    data: {
      name: "Clinic 1",
      address: "1234 Main St",
      email: "clinic@gmail.com",
      description: "Clinic 1 description",
      coverPhoto: "https://pulse-backup-kyrg.s3.amazonaws.com/992a7a49-0328-4117-a116-12037d4796bc-2023-03-09%2023.04.40.jpg",
      phoneNumber: "+380999999999",
    }
  })
  const clinic2 = await prisma.clinic.create({
    data: {
      name: "Clinic 1",
      address: "1234 Main St",
      email: "clinic@gmail.com",
      description: "Clinic 1 description",
      coverPhoto: "https://pulse-backup-kyrg.s3.eu-central-1.amazonaws.com/9a05568a-1879-4232-9fcd-400205be98b6-2023-03-09%2023.04.35.jpg",
      phoneNumber: "+380999999999",
    }
  })
  const clinic3 = await prisma.clinic.create({
    data: {
      name: "Clinic 1",
      address: "1234 Main St",
      email: "clinic@gmail.com",
      description: "Clinic 1 description",
      coverPhoto: "https://pulse-backup-kyrg.s3.eu-central-1.amazonaws.com/7ce09aed-0571-4d72-ba07-db8b4683bd0a-2023-03-09%2023.04.27.jpg",
      phoneNumber: "+380999999999",
    }
  })
  const user = await prisma.pulseUser.create({
    data: {
      address: "1234 Main St",
      email: "bart@simpson.com",
      fullName: "Bart Simpson",
      phoneNumber: "+380999999999",
      uniqueName: "bart",
      role: "ADMIN",
      password: "$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm", // secret42
    },
  });

  const doctor = await prisma.doctor.create({
    data: {
      clinic: {
        connect: {
          id: clinic1.id
        }
      },
      user: {
        create: {
          address: "1234 Main St",
          email: "doctor@gmail.com",
          fullName: "Doctor Simpson",
          phoneNumber: "+380999999998",
          uniqueName: "doctor",
          role: "DOCTOR",
          password: "$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm",
        },
      },
    },
  });


  console.log({ user, doctor });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
