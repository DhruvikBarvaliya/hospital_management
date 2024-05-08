module.exports = (sequelize, Sequelize) => {
  const Room = sequelize.define(
    "Room",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      patient_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Patient",
          key: "id"
        }
      },
      staff_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Staff",
          key: "id"
        }
      },
      admission_date: Sequelize.DATEONLY,
      is_active: Sequelize.BOOLEAN,
      status: Sequelize.BOOLEAN,
      created_by: {
        type: Sequelize.INTEGER,
        references: {
          model: "Doctor",
          key: "id"
        }
      },
      updated_by: {
        type: Sequelize.INTEGER,
        references: {
          model: "Doctor",
          key: "id"
        }
      }
    },
    {
      freezeTableName: true,
      timestamps: true
    }
  );
  return Room;
};
