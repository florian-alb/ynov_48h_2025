import express from 'express'

import { getActivities, getActivityById, createActivity, updateActivity, deleteActivity } from '../controllers/activities-controller.js'
const router = express.Router()

// TODO - add authentication middleware
router.get('/', null, getActivities);
router.get('/:id', null, getActivityById);
router.post('/', null, createActivity);
router.put('/:id', null, updateActivity);
router.delete('/:id', null, deleteActivity);

export default router