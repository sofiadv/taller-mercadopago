const express = require('express');
const router = express.Router();

const indexController = require("../controllers/indexController");

/* GET home page. */
router.get('/', indexController.home);

/* GET detail page */
router.get('/detail', indexController.detail);

router.get('/callback', indexController.callback)

router.post('/notifications', indexController.notifications)

router.post('webhook', indexController.webhook)

/*POST/ comprar*/
router.post('/comprar', indexController.comprar)

module.exports = router;
