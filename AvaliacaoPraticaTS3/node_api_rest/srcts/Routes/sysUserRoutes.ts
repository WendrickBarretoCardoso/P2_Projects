const express = require("express");
const router = express.Router();
const sysUserController = require("../Controller/sysUserController");
const loginController = require("../Controller/loginController");
const { verifyJWTRegular, verifyJWTAdmin } = require("../Middlewares/auth");

//ROTA DE LOGIN
router.post("/login", loginController.doLogin);

//ROTAS PRIVADAS
//Rota de Regulares
router.get("/", verifyJWTRegular, sysUserController.getAllSysUsers);
router.get("/:id", verifyJWTRegular, sysUserController.getSysUserById);
router.patch("/:id", verifyJWTRegular, sysUserController.updateSysUser);
//Rota de Admin
router.post("/", verifyJWTAdmin, sysUserController.createSysUser);
router.delete("/:id", verifyJWTAdmin, sysUserController.deleteSysUser);



module.exports = router;