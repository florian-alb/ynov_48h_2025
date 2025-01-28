import prisma from '../db.js'

export const getAll = async () => {
    return await prisma.activities.findMany()
}

export const getById = async (id) => {
    if (!id) {
        throw new Error('ID is required');
    }
    return await prisma.activities.findUnique({
        select: {
            id: true,
            title: true,
            description: true,
            zoneId: true,
            createdAt: true,
        },
        where: {
            id: id
        }
    });
}

export const create = async (title, description, zoneId) => {
    const activitiy = await prisma.activities.create({
        data: {
            title,
            description,
            zoneId
        },
        select: {
            title: true,
            description: true,
            zoneId: true,
            createdAt: true,
        }
    })
    return activitiy
}

export const update = async (id, data) => {
    const activitiy = await prisma.activities.update({
        where: {
            id: id
        },
        data: {
            title: data.title,
            description: data.description,
            zoneId: data.zoneId
        },
        select: {
            title: true,
            description: true,
            zoneId: true,
            createdAt: true,
        }
    })

    return activitiy
}

export const remove = async (id) => {
    const activitiy = await getById(id)
    if (!activitiy) {
        throw new Error('Activitiy not found');
    }
    return await prisma.activities.delete({
        where: {
            id: activitiy.id
        }
    });
}