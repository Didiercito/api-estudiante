const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Alumno = sequelize.define('Alumno', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'El nombre no puede estar vacío'
      },
      len: {
        args: [2, 100],
        msg: 'El nombre debe tener entre 2 y 100 caracteres'
      }
    }
  },
  apellido: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'El apellido no puede estar vacío'
      },
      len: {
        args: [2, 100],
        msg: 'El apellido debe tener entre 2 y 100 caracteres'
      }
    }
  },
  email: {
    type: DataTypes.STRING(150),
    allowNull: false,
    unique: {
      msg: 'El email ya está registrado'
    },
    validate: {
      isEmail: {
        msg: 'Debe ser un email válido'
      },
      notEmpty: {
        msg: 'El email no puede estar vacío'
      }
    }
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
      min: {
        args: [16],
        msg: 'La edad mínima es 16 años'
      },
      max: {
        args: [99],
        msg: 'La edad máxima es 99 años'
      }
    }
  },
  carrera: {
    type: DataTypes.STRING(100),
    allowNull: true,
    validate: {
      len: {
        args: [0, 100],
        msg: 'La carrera no puede tener más de 100 caracteres'
      }
    }
  }
}, {
  tableName: 'alumnos',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  underscored: true
});

module.exports = Alumno;