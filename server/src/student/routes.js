const { Router } = require('express');
const dbConn = require('../../config/databasemysql');
const controller = require('./controller');

const router = Router();

router.get("/psql/", controller.getStudents);
router.get("/mysql/", controller.getmysqlStudents);
router.post("/psql", controller.addStudent);
router.post("/mysql", controller.addStudent);
router.get("/psql/:id", controller.getStudentById);

router.put("/psql/:id", controller.updateStudent);
router.delete("/psql/:id", controller.removeStudent);



module.exports = router;