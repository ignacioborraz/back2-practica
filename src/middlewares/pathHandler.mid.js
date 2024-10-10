function pathHandler(req, res, next) {
    const statusCode = 404
    const message = `${req.method} ${req.url} NOT FOUND`
    return res.status(statusCode).json({ message })
}

export default pathHandler