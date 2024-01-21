
module.exports = (sequelize, Sequelize) => {
    const DoctorModel = sequelize.define('Doctor', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: Sequelize.STRING },
        email: { type: Sequelize.STRING },
        date_of_birth: { type: Sequelize.DATEONLY },
        sex: { type: Sequelize.STRING },
        address: { type: Sequelize.STRING },
        city: { type: Sequelize.STRING },
        zip_code: { type: Sequelize.INTEGER },
        state: { type: Sequelize.STRING },
        country: { type: Sequelize.STRING },
        status: { type: Sequelize.BOOLEAN },
    },
    {
        freezeTableName: true,
        timestamps: true
    })
    return DoctorModel;
}