import express from 'express'
import { getZone, getZoneById, createZone, updateZone, deleteZone } from '../controllers/zone-controller.js'

const router = express.Router()

// Define routes with their respective callback functions
router.get('/', getZone)
router.get('/:id', getZoneById)
router.post('/', createZone)
router.put('/:id', updateZone)
router.delete('/:id', deleteZone)

export default router