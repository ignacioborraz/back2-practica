function errorHandler(error, req, res, next) {
    console.log(error);
    const statusCode = error.statusCode || 500
    const message = error.message || "API ERROR"
    return res.status(statusCode).json({ message })
}

export default errorHandler