import { getUserById,registerUser,loginUser } from "../controllers/user-controller";
import express from 'express'
import authMiddleware from '../middlewares/auth.js'

const router = express.Router()


router.get('/:id', authMiddleware, getUserById) // Will match GET /users/:id
router.delete('/:id', authMiddleware, deleteUserById) // Will match DELETE /users/:id
router.post('/register', authMiddleware, registerUser) // Will match POST /users/register
router.post('/login', loginUser) // Will match POST /users/login


export default router