const router = require('express').Router();

/** Importamos los archivos de cada ruta */
const ciudadanosApiRouter = require('./api/ciudadanosApiRouter');

/** Redirigimos las rutas */

router.use('/ciudadanos', ciudadanosApiRouter);

module.exports = router;