import dbClient from '../utils/dbClient.js'

function generalQuery(req, query) {
    if(req.body.type !== "na" && req.body.type) query.type = req.body.type
    if(req.body.sweet !== "na" && req.body.sweet) query.sweet = req.body.sweet
    if(req.body.sweet === "off dry also") query.sweet = "off dry"
    if(req.body.body !== "na" && req.body.body) query.body = req.body.body
    if(req.body.traits.includes("vegan") || req.body.traits.includes("veg")) query.vegan = "Y"
    if(req.body.traits.includes("natural")) query.natural = "Y"
    if(req.body.traits.includes("sustainable")) query.sustainable = "Y"
}

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

  export async function fullSearch(req) {
    try{
    const query = {}

    generalQuery(req, query)

    let orQuery = []

    if(req.body.varietals.length !== 0) {
        for(let v of req.body.varietals) {
            if(v && character !== "na") {
                orQuery.push({
                    varietal: {
                        contains: v
                    }
                })
            }
        }
    }

    if(req.body.characteristics.length !== 0) {
        for(let character of req.body.characteristics) {
            if(character && character !== "na") {
                orQuery.push({
                    characteristics: {
                        contains: character
                    }
                })
            }
        }
    }

    
    query.OR = orQuery

    const wines = await dbClient.wine.findMany({
        where : query
        })

    return wines
    } catch (error) {
        return []
    }
  }

  export async function withVarietalsSearch(req) {
    try{
        const query = {}
    
        generalQuery(req, query)
    
        let varietalQuery = []
    
        if(req.body.varietals.length !== 0) {
            for(let v of req.body.varietals) {
                if(v) {
                    varietalQuery.push({
                        varietal: {
                            contains: v
                        }
                    })
                }
            }
        }
    
        query.OR = varietalQuery
    
        const wines = await dbClient.wine.findMany({
            where : query
            })
    
        return wines
        } catch (error) {
            return []
        }
      }
  

  export async function middleSearch(req) {
    try {
    const query = {}

    generalQuery(req, query)

    const wines = await dbClient.wine.findMany({
        where : query
        })

    return wines
    } catch (error) {
        return []
    }
  }

  export async function limitedSearch(req) {
      try {
    const query = {}

    if(req.body.type !== "na" && req.body.type) query.type = req.body.type
    if(req.body.sweet !== "na" && req.body.sweet) query.sweet = req.body.sweet
    if(req.body.sweet === "off dry also") query.sweet = "off dry"
    if(req.body.body !== "na" && req.body.body) query.body = req.body.body
    if(req.body.traits.includes("vegan") || req.body.traits.includes("veg")) query.vegan = "Y"

    const wines = await dbClient.wine.findMany({
        where : query
        })

    return wines
    } catch (error) {
        return []
    }
  }

  export async function semiBasicSearch(req) {
    try {
    const query = {}

    if(req.body.type !== "na" && req.body.type) query.type = req.body.type
    if(req.body.sweet !== "na" && req.body.sweet) query.sweet = req.body.sweet

    const wines = await dbClient.wine.findMany({
        where : query
        })

    return wines
    } catch (error) {
        return []
    }
  }

  export async function basicSearch(req) {
    const query = {}

    if(req.body.type !== "na" && req.body.type) query.type = req.body.type

    const wines = await dbClient.wine.findMany({
        where : query
        })

    return wines
  }