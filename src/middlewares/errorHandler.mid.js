function errorHandler(error, req, res, next) {
    console.log(error);
    const { statusCode, messsage } = error
    statusCode = statusCode || 500
    messsage = messsage || "API ERROR"
    return res.status(statusCode).json({ messsage })
}

export default errorHandler