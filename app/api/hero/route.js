import { getAllHeroes } from "@/prisma/hero";

// export const POST = async (req) => {
//   const { hero_title, hero_description, hero_image } = await req.json();
//   const new_hero = await addHero(
//     hero_title,
//     hero_description,
//     hero_image
//   );
//   if (!new_hero) {
//     return new Response(JSON.stringify({
//       status: "402",
//       message: "Something Wrong!!",
//       error: error.message,
//     }));
//   }
//   return new Response(JSON.stringify({ message: "Hero successfully added", data: new_hero }));
// }

// export const update = async (req, { params }) => {
//   const { heroId } = req.params.heroId;
//   const { hero_title, hero_description, hero_image } = await req.json();
//   try {
//     const updated_hero = await editHero(
//       heroId,
//       hero_title,
//       hero_description,
//       hero_image
//     );
//     if (!updated_hero) {
//       return new Response(JSON.stringify({
//         status: "402",
//         message: "Something went wrong",
//       }));
//     } else {
//       return new Response(JSON.stringify({
//         message: "Hero successfully updated",
//         data: updated_hero
//       }));
//     }
//   } catch (error) {
//     return new Response(JSON.stringify({
//       status: "400",
//       message: error.message
//     }));
//   }
// };


// export const GET = async (req) => {
//   const { heroId } = req.query.heroId;
//   try {
//     const hero = await getById(heroId);
//     if (!hero) {
//       return new Response(JSON.stringify({
//         message: "Not found",
//       }));
//     }
//     return new Response(JSON.stringify({
//       message: "Hero successfully updated",
//       data: updated_hero
//     }));
//   } catch (error) {
//     return new Response(JSON.stringify({
//       status: "400",
//       message: error.message
//     }));
//   }
// }

export const GET = async (req) => {
  try {
    const heroes = await getAllHeroes();
    return new Response(JSON.stringify({
      message: "Heroes successfully retrieved",
      data: heroes
    }));
  } catch (error) {
    return new Response(JSON.stringify({
      status: "400",
      message: error.message
    }));
  }
};
