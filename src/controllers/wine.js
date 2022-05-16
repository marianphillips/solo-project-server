import { sendDataResponse, sendMessageResponse } from '../utils/responses.js'
import { findWines } from '../domain/wine.js'

export const findWine = async (req, res) => {
    return sendMessageResponse(res, 400, 'Nothing happening')
    // const userToCreate = await User.fromJson(req.body)
  
    // try {
    //   const existingUser = await User.findByEmail(userToCreate.email)
  
    //   if (existingUser) {
    //     return sendDataResponse(res, 400, { email: 'Email already in use' })
    //   }
    //   if (!validator.validate(userToCreate.email)) {
    //     return sendDataResponse(res, 400, { email: 'invalid email address' })
    //   }
    //   const createdUser = await userToCreate.save()
  
    //   return sendDataResponse(res, 201, createdUser)
    // } catch (error) {
    //   return sendMessageResponse(res, 500, 'Server Error')
    // }
  }