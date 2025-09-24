const Alumno = require('../models/alumnos');

const getAllAlumnos = async (req, res) => {
  try {
    const alumnos = await Alumno.findAll({
      order: [['id', 'DESC']]
    });
    
    res.status(200).json({
      success: true,
      data: alumnos,
      message: 'Alumnos obtenidos correctamente'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener los alumnos',
      error: error.message
    });
  }
};

const getAlumnoById = async (req, res) => {
  try {
    const { id } = req.params;
    const alumno = await Alumno.findByPk(id);
    
    if (!alumno) {
      return res.status(404).json({
        success: false,
        message: 'Alumno no encontrado'
      });
    }
    
    res.status(200).json({
      success: true,
      data: alumno,
      message: 'Alumno obtenido correctamente'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener el alumno',
      error: error.message
    });
  }
};

const createAlumno = async (req, res) => {
  try {
    const { nombre, apellido, email, edad, carrera } = req.body;
    
    const nuevoAlumno = await Alumno.create({
      nombre,
      apellido,
      email,
      edad,
      carrera
    });
    
    res.status(201).json({
      success: true,
      data: nuevoAlumno,
      message: 'Alumno creado correctamente'
    });
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({
        success: false,
        message: 'Error de validación',
        errors: error.errors.map(err => ({
          field: err.path,
          message: err.message
        }))
      });
    }
    
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({
        success: false,
        message: 'El email ya está registrado'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Error al crear el alumno',
      error: error.message
    });
  }
};

const updateAlumno = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, email, edad, carrera } = req.body;
    
    const alumno = await Alumno.findByPk(id);
    
    if (!alumno) {
      return res.status(404).json({
        success: false,
        message: 'Alumno no encontrado'
      });
    }
    
    const alumnoActualizado = await alumno.update({
      nombre,
      apellido,
      email,
      edad,
      carrera
    });
    
    res.status(200).json({
      success: true,
      data: alumnoActualizado,
      message: 'Alumno actualizado correctamente'
    });
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({
        success: false,
        message: 'Error de validación',
        errors: error.errors.map(err => ({
          field: err.path,
          message: err.message
        }))
      });
    }
    
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({
        success: false,
        message: 'El email ya está registrado'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Error al actualizar el alumno',
      error: error.message
    });
  }
};

const deleteAlumno = async (req, res) => {
  try {
    const { id } = req.params;
    const alumno = await Alumno.findByPk(id);
    
    if (!alumno) {
      return res.status(404).json({
        success: false,
        message: 'Alumno no encontrado'
      });
    }
    
    await alumno.destroy();
    
    res.status(200).json({
      success: true,
      message: 'Alumno eliminado correctamente'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar el alumno',
      error: error.message
    });
  }
};

module.exports = {
  getAllAlumnos,
  getAlumnoById,
  createAlumno,
  updateAlumno,
  deleteAlumno
};