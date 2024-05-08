module.exports = (sequelize, Sequelize) => {
  const MedicalRecord = sequelize.define(
    "MedicalRecord",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      patient_id: Sequelize.INTEGER,
      doctor_id: Sequelize.INTEGER,
      record_date: Sequelize.DATEONLY,
      diagnosis: Sequelize.STRING,
      prescription: Sequelize.STRING,
      test_result: Sequelize.INTEGER,
      notes: Sequelize.STRING,
      problem: Sequelize.STRING,
      date_of_examination: Sequelize.DATEONLY,
      is_active: Sequelize.BOOLEAN,
      status: Sequelize.BOOLEAN,
      created_by: Sequelize.INTEGER,
      updated_by: Sequelize.INTEGER,
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );
  return MedicalRecord;
};
