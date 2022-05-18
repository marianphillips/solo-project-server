import { Router } from 'express'
import { findWine } from '../controllers/wine.js'

const router = Router()

router.post('/', findWine)


export default router