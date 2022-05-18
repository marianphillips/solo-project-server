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
    if(req.body.body) query.body = req.body.body
    if(req.body.sweet) query.sweet = parseInt(req.body.sweet)


    const wines = await dbClient.info.findMany({
        where : query
        })

    return wines
  }