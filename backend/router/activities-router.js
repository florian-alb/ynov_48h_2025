import express from 'express'
import { getActivities, getActivityById, createActivity, updateActivity, deleteActivity } from '../controllers/activities-controller.js'

const router = express.Router()

// Define routes with their respective callback functions
router.get('/', getActivities)
router.get('/:id', getActivityById)
router.post('/', createActivity)
router.put('/:id', updateActivity)
router.delete('/:id', deleteActivity)

export default router