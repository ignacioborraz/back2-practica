import cartsManager from "../data/managers/cart.manager.js"

const create = async (req, res, next) => {
    try {
        const data = req.body
        const response = await cartsManager.create(data)
        return res.status(201).json({ response, message: "CART CREATED" })
    } catch (error) {
        return next(error)
    }
}

const readAll = async (req, res, next) => {
    try {
        const filter = req.query
        const response = await cartsManager.readAll(filter)
        if (response.length > 0) {
            return res.status(200).json({ response, message: "CARTS READ" });
        } else {
            const error = new Error("NOT FOUND CARTS")
            error.statusCode = 404
            throw error
        }
    } catch (error) {
        return next(error)
    }
}

const read = async (req, res, next) => {
    try {
        const { cid } = req.params
        const response = await cartsManager.read(cid)
        if (!response) return res.status(404).json({ message: "CART NOT FOUND" });
        return res.status(200).json({ response, message: "CART READ" });
    } catch (error) {
        return next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const { cid } = req.params
        const data = req.body
        const response = await cartsManager.update(cid)
        if (!response) return res.status(404).json({ message: "CART NOT FOUND" });
        return res.status(200).json({ response, message: "CART UPDATED" });
    } catch (error) {
        return next(error)
    }
}

const destroy = async (req, res, next) => {
    try {
        const { cid } = req.params
        const response = await cartsManager.destroy(cid)
        if (!response) return res.status(404).json({ message: "CART NOT FOUND" });
        return res.status(200).json({ response, message: "CART DELETED" });
    } catch (error) {
        return next(error)
    }
}

export { create, readAll, read, update, destroy }