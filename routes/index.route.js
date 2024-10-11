const userRoute = require('./user.route')


module.exports = (app) => {
    // const PATHversion1 = "/api/v1"

    app.use("/users",userRoute);
}
