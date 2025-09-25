const express = require('express');
const router = express.Router();
const {
  getAllAlumnos,
  getAlumnoById,
  createAlumno,
  updateAlumno,
  deleteAlumno
} = require('../controllers/alumnoController');

router.get('/all', getAllAlumnos);
router.get('/:id', getAlumnoById);
router.post('/create', createAlumno);
router.put('/update/:id', updateAlumno);
router.delete('/delete/:id', deleteAlumno);

module.exports = router;
