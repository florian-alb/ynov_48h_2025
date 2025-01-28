import { getAll, getById, create, update, remove } from '../services/zone-service.js'

export const getZone = async (req, res) => {
    const zones = await getAll()
    res.json({
        success: true,
        zones
    })
}

export const getZoneById = async (req, res) => {
    const zone = await getById(req.params.id)

    if (!zone) {
        return res.status(404).json({
            success: false,
            message: 'Zone not found'
        })
    }

    return res.json({
        success: true,
        data: zone
    })
}

export const createZone = async (req, res) => {
    const { name, description, longitudeLocation, latitudeLocation, status } = req.body

    const zone = await create(name, description, longitudeLocation, latitudeLocation, status)

    res.json({
        success: true,
        data: zone
    })
}

export const updateZone = async (req, res) => {

    //body = name, description, longitudeLocation, latitudeLocation, status 
    const zone = await update(req.params.id, req.body)

    if (!zone) {
        return res.status(404).json({
            success: false,
            message: 'Zone not found'
        })
    }

    return res.json({
        success: true,
        data: zone
    })
}   

export const deleteZone = async (req, res) => {
    const zone = await remove(req.params.id)

    if(!zone){
        return res.status(404).json({
            success: false,
            message: 'Zone not found'
        })
    }

    return res.json({
        success: true,
        data: 'zone deleted'
    })
}