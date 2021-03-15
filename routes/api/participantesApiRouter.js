const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Entra correctamente en participantes. FUNSIONA!!');
})

module.exports = router;