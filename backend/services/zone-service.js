import prisma from "../db";

export const getAll = async () => {
    return await prisma.zones.findMany()
}

export const getById = async (id) => {
    if (!id) {
        throw new Error('ID is required');
    }
    return await prisma.zones.findUnique({
        select: {
            id: true,
            name: true,
            description: true,
            longitudeLocation: true,
            latitudeLocation: true,
            status: true,
            updatedAt: true,
            activities: true
        },
        where: {
            id: id
        }
    });
}

export const create = async (name, description, longitudeLocation, latitudeLocation, status) => {
    const zone = await prisma.zones.create({
        data: {
            name,
            description,
            longitudeLocation,
            latitudeLocation,
            status
        },
        select: {
            id: true,
            name: true,
            description: true,
            longitudeLocation: true,
            latitudeLocation: true,
            status: true,
            updatedAt: true,
        }
    })
    return zone
}

export const update = async (id, data) => {
    const zone = await prisma.zones.update({
        where: {
            id: id
        },
        data: {
            name: data.name,
            description: data.description,
            longitudeLocation: data.longitudeLocation,
            latitudeLocation: data.latitudeLocation,
            status: data.status
        },
        select: {
            id: true,
            name: true,
            description: true,
            longitudeLocation: true,
            latitudeLocation: true,
            status: true,
            updatedAt: true,
        }
    })

    return zone
}

export const remove = async (id) => {
    const zone = await getById(id)
    if (!zone) {
        throw new Error('zone not found');
    }

    return await prisma.zones.delete({
        where: {
            id: zone.id
        }
    });
}