import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../db.js'

export const create = async (username, email, password, role = 'USER') => {
    // Check if the email or username already exists
    const existingUser = await prisma.user.findFirst({
        where: {
            OR: [{ email }, { username }]
        }
    });

    if (existingUser) throw new Error('Email or username already exists');

    const encryptedPassword = await bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT_ROUNDS));

    const user = await prisma.user.create({
        data: {
            username,
            email,
            password: encryptedPassword,
            role,
        },
        select: {
            id: true,
            username: true,
            email: true,
            role: true,
            createdAt: true,
        }
    });

    return user;
};

export const login = async (email, password) => {
    // Find user by email
    const user = await prisma.user.findUnique({
        where: { email }
    });

    if (!user) throw new Error('User not found');

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new Error('Invalid password');

    // Generate JWT
    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
            role: user.role
        },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    return token;
};

export const getById = async (id) => {
    const user = await prisma.user.findUnique({
        where: { id },
        select: {
            id: true,
            username: true,
            email: true,
            role: true,
            createdAt: true,
        }
    });

    if (!user) throw new Error('User not found');

    return user;
};
