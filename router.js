const express = require("express")
const router = express.Router()
const { addUser, userList, getUser, deleteUser, updateUser } = require("./controller")

router.post("/adduser", addUser)

router.get("/list", userList)

router.get("/getUser", getUser)

router.delete("/delete", deleteUser)

router.put("/update", updateUser)



module.exports = router