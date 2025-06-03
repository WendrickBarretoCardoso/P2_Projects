const express = require("express");
const router = express.Router();
const sysUserController = require("../Controller/sysUserController");

router.get("/", sysUserController.getAllSysUsers);
router.get("/:id", sysUserController.getSysUserById);
router.post("/", sysUserController.createSysUser);
router.patch("/:id", sysUserController.updateSysUser);
router.delete("/:id", sysUserController.deleteSysUser);

module.exports = router;