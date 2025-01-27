import * as OpenApiValidator from 'express-openapi-validator'
import express from 'express'
import cors from 'cors'

import activitiesRouter from './router/activities-router.js'
import zoneRouter from './router/zone-router.js'

// Import path module to get the current directory (node < 20.11.X)
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// Initialize express
const app = express()

// Use default middlewares
app.use(cors()) // Cors is a middleware that allows/disallows access to the API
app.use(express.json()) // Parse incoming requests with JSON payloads
app.use(OpenApiValidator.middleware({
    apiSpec: __dirname + '/openapi-main.yaml',
    ignoreUndocumented: true
}))

// API routers
app.use('/activities', activitiesRouter)
app.use('/zone', zoneRouter)

app.use((err, req, res, next) => {
    // format error
    res.status(err.status || 500).json({
        message: err.message,
        errors: err.errors,
    })
})

// Export the app to be used in the server
export default app