const { Router } = require("express");

const router = Router();

router.post("/check-token", (req, res) => {
  if (req.user) {
    return res.status(200).json({
      success: true,
      message: "token valid",
      accessToken: req.accessToken,
      user: { email: req.user.email },
    });
  }
  return res.status(401).json({ success: false, message: "token invalid" });
});

module.exports = router;
