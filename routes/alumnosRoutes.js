const express = require('express');
const router = express.Router();
const {
  getAllAlumnos,
  getAlumnoById,
  createAlumno,
  updateAlumno,
  deleteAlumno
} = require('../controllers/alumnoController');

router.get('/todos', getAllAlumnos);
router.get('/:id', getAlumnoById);
router.post('/crear', createAlumno);
router.put('/actualizar/:id', updateAlumno);
router.delete('/eliminar/:id', deleteAlumno);

module.exports = router;
