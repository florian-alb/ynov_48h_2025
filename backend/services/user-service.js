import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const create = async (fullName, email, password, dateOfBirth ,role) => {
    // Check if the email already exists
    const count = await prisma.user.count({
        where: {
            email
        }
    });

    if (count > 0) throw new Error('Email already exists');

    // Hash the password before saving to the database
    const encryptedPassword = bcrypt.hashSync(password, parseInt(process.env.BCRYPT_SALT_ROUNDS));

    // Create the user
    const user = await prisma.user.create({
        data: {
            fullName,
            email,
            password: encryptedPassword,
            dateOfBirth,
            role, 
        },
        select: {
            uid: true,
            email: true,
            fullName: true,
            dateOfBirth: true,
            role: true,
        }
    });

    return user;
}

export const login = async (email, password) => {
    const user = await prisma.user.findFirst({
        where: {
            email
        }
    })

    if (!user) throw new Error('User not found')

    if (!bcrypt.compareSync(password, user.password)) throw new Error('Invalid password')

    // Generate a token here
    const token = jwt.sign({
        uid: user.uid,
        email: user.email,
        role: user.role
    }, process.env.JWT_SECRET, {
        expiresIn: '1h'
    })

    return token
}


export const getById = async (uid) => {
    return await prisma.user.findUnique({
        select: {
            uid: true,
            fullName: true,
            email: true,
        },
        where: {
            uid
        }
    })
}