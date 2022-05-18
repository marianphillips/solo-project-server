import { sendDataResponse, sendMessageResponse } from '../utils/responses.js'
import { findWineById, findManyWines } from '../domain/wine.js'

export const findWine = async (req, res) => {
   console.log(req.body)
    try {  
      const search = await findManyWines(req.body.type)
 
      if (!search) {
        return sendMessageResponse(res, 400, 'no match')
      }  

      const wine = await findWineById(search[0].wineId)

      if (!wine) {
        return sendMessageResponse(res, 400, 'wine does not exist in db')
      }  

      return sendDataResponse(res, 201, wine)
    } catch (error) {
      return sendMessageResponse(res, 500, 'Server Error')
    }
  }