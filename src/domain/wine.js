import dbClient from '../utils/dbClient.js'

export async function findWineById(id) {
    const wine = await dbClient.wine.findUnique({
        where : {
            id: Number(id)
        },
        include : {
            info: true
        }
    })

    return wine
  }

  export async function findManyWines(type) {
    const wines = await dbClient.info.findMany({
        where : {
            type: {
                equals: type
            }
        },
    })

    return wines
  }