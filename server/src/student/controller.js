const pool = require('../../config/database');
const dbConn = require('../../config/databasemysql');
const queries = require('./queries')

const getStudents = (req, res) =>{
    pool.query(queries.getStudents, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getmysqlStudents = (req, res) => {
    dbConn.query(queries.getStudents, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getStudentById =(req, res) => {
    const id = parseInt(req.params.id);
    console.log(`the request is for ${id}`);
    pool.query(queries.getStudentById, [id],(error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const addStudent = (req, res) => {
    const {name, email, age, dob } = req.body;
    

    // check if email exists
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exits");
        }

        // add student to database
        pool.query(queries.addStudent, [name, email, age, dob], (error, results) => {
            if(error) throw error;
            res.status(201).send("Student Created Successfully");
            console.log("Student Created");
        });
    });
};

const addmysqlStudent = (req, res) => {
    const {name, email, age, dob } = req.body;
    

    // check if email exists
    dbConn.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exits");
        }

        // add student to database
        dbConn.query(queries.addStudent, [name, email, age, dob], (error, results) => {
            if(error) throw error;
            res.status(201).send("Student Created Successfully");
            console.log("Student Created");
        });
    });
};


const removeStudent = (req, res) => {
    const id = parseInt(req.params.id);
    

    pool.query(queries.getStudentById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if (noStudentFound){
            res.send("Student does not exist in the database, could not remove");
        }

        pool.query(queries.removeStudent, [id], (error, results) => {
            if(error) throw error;

            res.status(200).send("Student removed successfully");
        })

    });
}

const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    pool.query(queries.getStudentById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if (noStudentFound){
            res.send("Student does not exist in the database, could not remove");
        }   

        pool.query(queries.updateStudent, [name, id], (error, results) => {
            if(error) throw error;
            res.status(200).send("Student updated successfully");
        })
    })
}
module.exports  = {
    getStudents,
    getmysqlStudents,
    getStudentById,
    addStudent,
    addmysqlStudent,
    removeStudent,
    updateStudent,
};