const app = require("./app");
const db = require("./Config/Sequelize");
const { PORT, ENV } = require("./Config/Config");
const bcrypt = require("bcryptjs");

const createDefaultUser = async (userData) => {
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(userData.password, salt);
  await db.UserModel.create({
    ...userData,
    password: password,
  })
    .then((res) => {
      setTimeout(function () {
        console.log(`>>> ${userData.role} ${userData.first_name.toUpperCase()} ${userData.last_name.toUpperCase()}`);
      }, 2000);
    })
    .catch((error) => {
      console.error("Failed to create a new record : ", error);
    });
};

db.sequelize
  .sync({ force: false, alter: true })
  .then(async () => {
    console.log("Drop and re-sync db.");
    const superAdmin = {
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
    };
    const apolloAdmin = {
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
    };

    const superAdminUser = await db.UserModel.findOne({
      where: {
        email: superAdmin.email,
      },
    });

    if (!superAdminUser) {
      createDefaultUser(superAdmin);
    }

    const apolloAdminUser = await db.UserModel.findOne({
      where: {
        email: apolloAdmin.email,
      },
    });

    if (!apolloAdminUser) {
      createDefaultUser(apolloAdmin);
    }
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

if (ENV === "production") {
  app.listen(
    PORT,
    console.log(
      `Server is Running on https://hospital-dyev.onrender.com and Swagger is Running on https://hospital-dyev.onrender.com/api-docs/`
    )
  );
} else {
  app.listen(
    PORT,
    console.log(
      `Server is Running on http://localhost:${PORT} and Swagger is Running on http://localhost:${PORT}/api-docs/`
    )
  );
}
