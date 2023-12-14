export const sleep = (timeout) => new Promise((r) => setTimeout(() => { r() }, timeout))

export const defaultErrorHandler = (err, req, res, next) => {
    const status = err.statusCode || 500;
    res.status(status).send({
        status,
        message: err.message || 'Something went wrong',
    });
    return next();
}
