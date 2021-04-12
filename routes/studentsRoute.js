const express = require("express")
const {getAllStudents, addstudent}= require("../controllers/studentsControllers")

const router =express().Router()

router.route("/students").get(getAllStudents).post(addstudent)

module.exports = router;