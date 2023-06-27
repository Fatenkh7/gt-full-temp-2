import { deleteHero, editHero, getById } from "@/prisma/hero";

export const PUT = async (req, { params }) => {
    const heroId = params.heroId;
    const { hero_title, hero_description, hero_image } = await req.json();

    try {
        const updatedHero = await editHero(
            heroId,
            hero_title,
            hero_description,
            hero_image
        );

        if (!updatedHero) {
            return new Response(JSON.stringify({
                status: "402",
                message: "Something went wrong",
            }));
        } else {
            return new Response(JSON.stringify({
                message: "Hero successfully updated",
                data: updatedHero,
            }));
        }
    } catch (error) {
        return new Response(JSON.stringify({
            status: "400",
            message: error.message,
        }));
    }
};

//get by id

// export const GET = async (req, { params }) => {
//     const heroId = params.heroId;

//     try {
//       const hero = await getById(heroId);
//       if (!hero) {
//         return new Response(JSON.stringify({
//           status: "404",
//           message: "Hero not found",
//         }));
//       } else {
//         return new Response(JSON.stringify({
//           message: "Hero retrieved successfully",
//           data: hero,
//         }));
//       }
//     } catch (error) {
//       return new Response(JSON.stringify({
//         status: "400",
//         message: error.message,
//       }));
//     }
//   };

//delete by id
// export const DELETE = async (req, { params }) => {
//     const heroId = params.heroId;

//     try {
//         const hero = await deleteHero(heroId);
//         if (!hero) {
//             return new Response(JSON.stringify({
//                 status: "404",
//                 message: "Hero not found",
//             }));
//         } else {
//             return new Response(JSON.stringify({
//                 message: "Hero deleted successfully",
//                 data: hero,
//             }));
//         }
//     } catch (error) {
//         return new Response(JSON.stringify({
//             status: "400",
//             message: error.message,
//         }));
//     }
// };