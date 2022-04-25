const router = require("express").Router();
const usr = require("../usecases/user");
const jwt = require("../lib/jwt");

router.post("/login", async (req, res, next) => {
  try {
    const { user, password } = req.body;
    const retrievedUser = await usr.findUser(user);
    console.log(retrievedUser);
    const isMatch = await usr.authenticate(password);
    if (isMatch && retrievedUser.password == password) {
      const token = await jwt.sing({
        sub: retrievedUser._id,
        role: retrievedUser.role,
      });
      res.json({
        success: true,
        playload: token,
      });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Contraseña incorrecta" });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
