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

  export async function findManyWines(req) {
    const query = {}

    if(req.body.type) query.type = req.body.type


    const wines = await dbClient.wine.findMany({
        where : query
        })

    return wines
  }