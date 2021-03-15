const router = require('express').Router();

/** Importamos los archivos de cada ruta */
const participantesApiRouter = require('./api/participantesApiRouter');

/** Redirigimos las rutas */

router.use('/participantes', participantesApiRouter);

module.exports = router;