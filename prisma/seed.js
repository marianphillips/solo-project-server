import prisma from '@prisma/client'
import csv from 'csv-parser'
import fs from 'fs'
const db = new prisma.PrismaClient()
const results = [];

fs.createReadStream('prisma/winedatafinal.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    async function createWine() {
      await db.wine.createMany({
        data: results
      });
    }

    async function seed() {
      await createWine(); 
      process.exit(0);
    }
  
  
    seed()
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
    })
    .finally(() => process.exit(1));
    
    console.log(results);
  });


