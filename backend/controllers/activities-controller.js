import { getAll, getById, create, update, remove } from '../services/activities-service.js'

export const getActivities = async (req, res) => {
    const activities = await getAll()
    res.json({
        success: true,
        activities
    })
}   

export const getActivityById = async (req, res) => {
    const activitiy = await getById(req.params.id)

    if (!activitiy) {
        return res.status(404).json({
            success: false,
            message: 'Activity not found'
        })
    }

    return res.json({
        success: true,
        data: activitiy
    })
}

export const createActivity = async (req, res) => {
    const { title, description, zoneId} = req.body

    const activity = await create(title, description, zoneId)

    res.json({
        success: true,
        data: activity
    })
}

export const updateActivity = async (req, res) => {
    
    //body = title, description, zoneId
    const activity = await update(req.params.id, req.body)
    
    if (!activity) {
        return res.status(404).json({
            success: false,
            message: 'Activity not found'
        })
    }

    return res.json({
        success: true,
        data: activity
    })
}

export const deleteActivity = async (req, res) => {
    const activity = await remove(req.params.id)

    if (!activity) {
        return res.status(404).json({
            success: false,
            message: 'Activity not found'
        })
    }

    return res.json({
        success: true,
        message: 'Activity deleted'
    })
}