function getAllStudents(req, res){
    res.send("all students route")

    module.exports={getAllStudents};
}

const addstudent = (req, res)=> {
res.send("add students request")
}

const deletestudent = (req, res) => {
    res.send("student deleted")
}
module.exports ={getAllStudents, addstudent, deletestudent};