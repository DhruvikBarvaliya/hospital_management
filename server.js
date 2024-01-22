const app = require("./app")
const db = require('./Config/Sequelize');
const { PORT } = require('./Config/Config')

db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.");
});

app.listen(PORT, console.log(`Server is Running on Port No ${PORT} `))