import productsManager from "../data/managers/products.manager.js";

const create = async (req, res, next) => {
    try {
        const data = req.body;
        const response = await productsManager.create(data);
        return res.status(201).json({ response, message: "PRODUCT CREATED" });
    } catch (error) {
        return next(error);
    }
};

const readAll = async (req, res, next) => {
    try {
        const filter = req.query;
        const response = await productsManager.readAll(filter);
        if (response.length > 0) {
            return res.status(200).json({ response, message: "PRODUCTS READ" });
        } else {
            const error = new Error("NOT FOUND PRODUCTS")
            error.statusCode = 404
            throw error
        }
    } catch (error) {
        return next(error);
    }
};

const readById = async (req, res, next) => {
    try {
        const id = req.params.pid;
        const response = await productsManager.read(id);
        if (!response) return res.status(404).json({ message: "PRODUCT NOT FOUND" });
        return res.status(200).json({ response, message: "PRODUCT READ" });
    } catch (error) {
        return next(error);
    }
};

const updateById = async (req, res, next) => {
    try {
        const id = req.params.pid;
        const data = req.body;
        const response = await productsManager.update(id, data);
        if (!response) return res.status(404).json({ message: "PRODUCT NOT FOUND" });
        return res.status(200).json({ response, message: "PRODUCT UPDATED" });
    } catch (error) {
        return next(error);
    }
};

const deleteById = async (req, res, next) => {
    try {
        const id = req.params.pid;
        const response = await productsManager.destroy(id);
        if (!response) return res.status(404).json({ message: "PRODUCT NOT FOUND" });
        return res.status(200).json({ response, message: "PRODUCT DELETED" });
    } catch (error) {
        return next(error);
    }
}

export { create, readAll, readById, updateById, deleteById };