const express = require('express');
const router = express.Router();
const {
  getAllAlumnos,
  getAlumnoById,
  createAlumno,
  updateAlumno,
  deleteAlumno
} = require('../controllers/alumnoController');

router.get('/', getAllAlumnos);
router.get('/:id', getAlumnoById);
router.post('/', createAlumno);
router.put('/:id', updateAlumno);
router.delete('/:id', deleteAlumno);

module.exports = router;
