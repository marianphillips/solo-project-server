import { Router } from 'express'
import { findWine } from '../controllers/wine.js'

const router = Router()

router.get('/', findWine)


export default router