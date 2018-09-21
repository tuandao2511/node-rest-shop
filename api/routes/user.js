const express = require('express');
const router = express.Router();

const UsersControllers = require('../controllers/users');





router.post("/signup", UsersControllers.user_signup);

router.post('/login',UsersControllers.user_login);
    
router.delete("/:userId", UsersControllers.user_delete);

module.exports = router;





