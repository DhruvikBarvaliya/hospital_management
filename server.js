const app = require("./app");
const db = require("./Config/Sequelize");
const { PORT, ENV } = require("./Config/Config");

db.sequelize
  .sync({ force: false })
  .then(async () => {
    console.log("Drop and re-sync db.");
    const user = await db.UserModel.findOne({
      where: {
        email: "superadmin@gmail.com",
      },
    });
    if (user == null) {
      await db.UserModel.create({
        role: "SUPER_ADMIN",
        first_name: "super",
        last_name: "admin",
        phone_number: "7894560322",
        email: "superadmin@gmail.com",
        password: "superadmin",
        date_of_birth: "1994-02-02",
        is_verified: true,
        is_active: true,
        status: true,
      })
        .then((res) => {
          setTimeout(function () {
            console.log(">>> SUPER_ADMIN");
          }, 2000);
        })
        .catch((error) => {
          console.error("Failed to create a new record : ", error);
        });

      await db.UserModel.create({
        role: "ADMIN",
        first_name: "apollo",
        last_name: "admin",
        phone_number: "6502314789",
        email: "apolloadmin@gmail.com",
        password: "apolloadmin",
        date_of_birth: "1994-01-01",
        is_verified: true,
        is_active: true,
        status: true,
      })
        .then((res) => {
          setTimeout(function () {
            console.log(">>> APOLLO ADMIN");
          }, 2000);
        })
        .catch((error) => {
          console.error("Failed to create a new record : ", error);
        });
    }
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

if (ENV == "production") {
  app.listen(
    PORT,
    console.log(`Server is Running on https://hospital-dyev.onrender.com and Swagger is Running on https://hospital-dyev.onrender.com/api-docs/`)
  );
} else {
  app.listen(
    PORT,
    console.log(`Server is Running on http://localhost:${PORT} and Swagger is Running on http://localhost:${PORT}/api-docs/`)
  );
}
