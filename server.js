const app = require("./app")
const db = require('./Config/Sequelize');
const { PORT } = require('./Config/Config')

db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.");

    // db.AddressModel.create({
    //     streetAddress1: "aaa",
    //     streetAddress2: "bbb",
    //     country: "ccc",
    //     state: "ddd",
    //     city: "eee",
    //     zip_code: 123456,
    //     is_active: true,
    //     status: true,
    //     created_by: 3,
    //     updated_by: 3,
    // }).then(res => {
    //     console.log(res)
    // }).catch((error) => {
    //     console.error('Failed to create a new record : ', error);
    // });

}).catch((error) => {
    console.error('Unable to create table : ', error);
});;

app.listen(PORT, console.log(`Server is Running on Port No ${PORT} `))