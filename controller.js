const usermodel = require("./model");

const addUser = async (req, res) => {
    try {
        let body = req.body
        let user = new usermodel();

        //user.id = body.id
        user.firstName = body.firstName;
        user.lastName = body.lastName;
        user.email = body.email;
        user.mobile = body.mobile;
        user.weight = body.weight;
        user.height = body.height;
        user.bmi = body.bmi
        user.bmiresult = body.bmiresult
        user.gender = body.gender;
        user.requireTrainer = body.requireTrainer;
        user.package = body.package
        user.important = body.important;
        user.haveGYMBefore = body.haveGYMBefore;
        user.enquiryDate = body.enquiryDate


        user.save().then(
            result => res.status(200).json({ msg: "success", data: result }),
            err => res.status(404).json({ msg: "failed to save", data: err }))
    } catch (error) {

        res.status(404).json({ msg: "something went wrong", error: error })
    }

}

const userList = async (req, res) => {
    try {
        let users = await usermodel.find()
        res.status(200).json({ msg: "success", result: users })

    } catch (error) {
        res.status(404).json({ msg: "something went wrong", error: error })
    }
}

const getUser = async (req, res) => {
    try {
        let id = req.body.id
        let user = await usermodel.find({ id: id })
        res.status(200).json({ status: "success", result: user })
    } catch (error) {
        console.log("error", error);
        res.status(404).json({ status: "failed", msg: "something went wrong" })
    }
}


const deleteUser = async (req, res) => {
    try {
        let id = req.body.id
        let user = await usermodel.deleteOne({ id: id })
        res.status(200).json({ msg: "success", data: user })

    } catch (error) {
        console.log("error", error);
        res.status(404).json({ status: "failed to delete", msg: "something went wrong" })
    }
}


const updateUser = async (req, res) => {
    try {
        let body = req.body
        let id = req.query.id
        let user = new usermodel();
        if (id != "") {
            user = await usermodel.findOne({ id: id })
        }

        user.firstName = body.firstName;
        user.lastName = body.lastName;
        user.email = body.email;
        user.mobile = body.mobile;
        user.weight = body.weight;
        user.height = body.height;
        user.bmi = body.bmi
        user.bmiresult = body.bmiresult
        user.gender = body.gender;
        user.requireTrainer = body.requireTrainer;
        user.package = body.package
        user.important = body.important;
        user.haveGYMBefore = body.haveGYMBefore;
        user.enquiryDate = body.enquiryDate
        user.id = body.id


        user.save().then(
            result => res.status(200).json({ msg: "success", data: result }),
            err => res.status(404).json({ msg: "failed", data: err }))
    } catch (error) {

        res.status(404).json({ msg: "something went wrong", error: error })
    }

}


module.exports = { addUser, userList, getUser, deleteUser, updateUser }

