const express = require('express');
const router = express.Router();
const { getAllAlumnos, getAlumnoById, createAlumno, updateAlumno, deleteAlumno, getAlumnosByCarrera } = require('../controllers/alumnoController');

router.get('/all', getAllAlumnos);
router.get('/:id', getAlumnoById);
router.post('/create', createAlumno);
router.put('/update/:id', updateAlumno);
router.get('/carrera/:carrera', getAlumnosByCarrera);
router.delete('/delete/:id', deleteAlumno);

module.exports = router;
