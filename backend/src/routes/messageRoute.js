import express from 'express'
import { protectedRoute } from '../middleware/authMiddleware.js'
import { getMessage, getUserForSideBar, sendMessage } from '../controllers/messageController.js'

const router = express.Router()

router.get('/users', protectedRoute, getUserForSideBar )
router.get('/:id', protectedRoute, getMessage)
router.post('/send/:id', protectedRoute, sendMessage)


export default router