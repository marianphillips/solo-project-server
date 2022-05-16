import dbClient from '../utils/dbClient.js'

export async function findWines() {
    const wine = await dbClient.WineTest.findMany()
    return wine
  }