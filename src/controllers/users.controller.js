import usersManager from "../data/managers/users.manager.js";

const create = async (req, res, next) => {
    try {
        const data = req.body;
        const response = await usersManager.create(data);
        return res.status(201).json({ response, message: "USER CREATED" });
    } catch (error) {
        return next(error);
    }
};

const readAll = async (req, res, next) => {
    try {
        const filter = req.query;
        const response = await usersManager.readAll(filter);
        if (response.length > 0) {
            return res.status(200).json({ response, message: "USERS READ" });
        } else {
            const error = new Error("NOT FOUND USERS")
            error.statusCode = 404
            throw error
        }
    } catch (error) {
        return next(error);
    }
};

const readById = async (req, res, next) => {
    try {
        const id = req.params.uid;
        const response = await usersManager.read(id);
        if (!response) return res.status(404).json({ message: "USER NOT FOUND" });
        return res.status(200).json({ response, message: "USER READ" });
    } catch (error) {
        return next(error);
    }
};

const updateById = async (req, res, next) => {
    try {
        const id = req.params.uid;
        const data = req.body;
        const response = await usersManager.update(id, data);
        if (!response) return res.status(404).json({ message: "USER NOT FOUND" });
        return res.status(200).json({ response, message: "USER UPDATED" });
    } catch (error) {
        return next(error);
    }
};

const deleteById = async (req, res, next) => {
    try {
        const id = req.params.uid;
        const response = await usersManager.destroy(id);
        if (!response) return res.status(404).json({ message: "USER NOT FOUND" });
        return res.status(200).json({ response, message: "USER DELETED" });
    } catch (error) {
        return next(error);
    }
}

export { create, readAll, readById, updateById, deleteById };