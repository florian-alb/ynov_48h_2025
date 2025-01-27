import { login, create, getById } from "../services/user-service";

export const getUserById = async (req, res) => {
    // Calling the service function with the id parsed as an integer, the id is a path parameter from the URL, it's a string, declared in the router
    const user = await getById(parseInt(req.params.id))

    // If the user is not found, we will return a 404 status code
    if (!user) {
        return res.status(404).json({
            success: false,
            message: 'User not found'
        })
    }

    // Otherwise we will return the user object
    return res.json({
        success: true,
        data: user
    })
}

export const registerUser = async (req, res, next) => {
    // We get fullName, email, password, role, and status from the request body
    const { fullName, email, password, role } = req.body;
    let user;

    try {
        // Call the create service with the full name, email, password, and optional role/status
        user = await create(fullName, email, password, role);
    } catch (err) {
        // Handle errors (e.g., email already exists)
        return next(err);
    }

    // Return the created user as the response
    res.json({
        success: true,
        data: user,
    });
}

export const loginUser = async (req, res, next) => {
    const { email, password } = req.body
    let token

    try {
        token = await login(email, password)
    } catch (err) {
        return next(err)
    }

    res.json({
        success: true,
        message: 'Login successful',
        token: token
    })
}