import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// export const addHero = async (hero_title, hero_description, hero_image) => {
//   const hero = await prisma.hero.create({
//     data: {
//       hero_title,
//       hero_description,
//       hero_image,
//     },
//   });
//   return hero;
// };

export const editHero = async (
  heroId,
  hero_title,
  hero_description,
  hero_image
) => {
  const updatedHero = await prisma.hero.update({
    where: {
      id: heroId,
    },
    data: {
      hero_title,
      hero_description,
      hero_image,
    },
  });

  return updatedHero;
};

// export const getById = async (heroId) => {
//   const hero = await prisma.hero.findUnique({
//     where: {
//       id: heroId,
//     },
//   });

//   return hero;
// };

export const getAllHeroes = async () => {
  const heroes = await prisma.hero.findMany();
  return heroes;
};

// export const deleteHero = async (id) => {
//   const removeHero = await prisma.hero.delete({
//     where: {
//       id: id,
//     },
//   });

//   return removeHero;
// };