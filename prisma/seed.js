import prisma from '@prisma/client'

const db = new prisma.PrismaClient()


async function seed() {
    await createWine1(); 
    await createWine2(); 
    process.exit(0);
  }

  async function createWine1() {
    const wine = await db.wine.create({
      data: {
        producer: "Division Winemaking Co.",
        name: "Division-Villages Methode Carbonique",
        description: "A very good wine",
        price: 28,
        imageUrl: "https://www.pacificwines.co.uk/assets/images/products/32-2x.jpg",
        url: "https://www.pacificwines.co.uk/wine/division-villages-mthode-carbonique",
        info: {
          create: {
            type: "red",
            varietal: "pinot noir",
            natural: true,
            vegan: false,
            body: "light",
            sweet: 1,
            primary: "cherry",
            secondary: "leather",
            tertiary: "oak"
          },
        },
      },
      include: {
        info: true,
      },
    });

    console.log("Customer created", wine);

    return wine;
  }

  async function createWine2() {
    const wine = await db.wine.create({
      data: {
        producer: "Division Wine Co",
        name: "Chardonnay",
        description: "Also a very good wine",
        price: 33,
        imageUrl: "https://www.pacificwines.co.uk/assets/images/products/31-2x.jpg",
        url: "https://www.pacificwines.co.uk/wine/division-wine-chardonnay",
        info: {
          create: {
            type: "white",
            varietal: "chardonnay",
            natural: true,
            vegan: true,
            body: "light",
            sweet: 3,
            primary: "citrus",
            secondary: "apple",
            tertiary: "oak"
          },
        },
      },
      include: {
        info: true,
      },
    });

    console.log("Customer created", wine);

    return wine;
  }

  seed()
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  })
  .finally(() => process.exit(1));