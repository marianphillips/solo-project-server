import { sendDataResponse, sendMessageResponse } from '../utils/responses.js'
import { findWineById, findManyWines } from '../domain/wine.js'

export const findWine = async (req, res) => {

    try {  
       const search = await findManyWines(req)
    
      if (!search) {
        return sendMessageResponse(res, 400, 'no match')
      }  

      const wine = search[2]

      if (!wine) {
        return sendMessageResponse(res, 400, 'wine does not exist in db')
      }  

      return sendDataResponse(res, 201, wine)
    } catch (error) {
      return sendMessageResponse(res, 500, 'Server Error')
    }
  }