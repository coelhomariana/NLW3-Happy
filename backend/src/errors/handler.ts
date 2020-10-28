import {ErrorRequestHandler} from 'express'


const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
    console.error(error)

    return
}