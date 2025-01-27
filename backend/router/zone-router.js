import express from 'express'

import { getZone, getZoneById, createZone, updateZone, deleteZone } from '../controllers/zone-controller.js'

const router = express.Router()

// TODO - add authentication middleware
router.get('/', null, getZone);
router.get('/:id', null, getZoneById);
router.post('/', null, createZone);
router.put('/:id', null, updateZone);
router.delete('/:id', null, deleteZone);

export default router