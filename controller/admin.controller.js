const Admin = require('../models/accounts/admin.model')

const generateHelper = require('../helpers/generateHelper')


const getUsers = async (req, res) => {
    try {
        const users = await User.find({
            deleted : false
        })
        res.json({
            code : 200,
            message : "Success!",
            data : users
        })
    } catch (error) {
        res.json({
            code : 400,
            message : "Error!",
            error : error
        })
    } 
}
const getUser = async (req, res) => {
    try {
        const id = req.params.id

        const user = await User.findOne({
            _id : id,
            deleted : false
        }).select("fullname email phone")

        res.status(200).json({
            message : "Thông tin user!",
            user : user,
        })
    } catch (error) {
        res.status(400).json({
            message : "Error!",
            error : error
        })
    } 
    
}
const register = async (req, res) => {
    try {
        const existEmail = await User.findOne({
            email : req.body.email,
            deleted : false
        })
        if(existEmail) {
            res.status(400).json({
                message : "Email đã tồn tại!",
            })
        } else {
            const user = new User({
                fullname : req.body.fullname,
                email : req.body.email,
                password : req.body.password,
                phone : req.body.phone,
                token : generateHelper.generateRandomString(20)
            });
            const data = await user.save();
            const token = data.token
            res.cookie("token" , token)


            res.status(201).json({
                message : "Đăng ký tài khoản thành công!",
                data : data,
                token : token
            })
        }
    } catch (error) {
        res.status(500).json({
            message : "Đăng ký thất bại!",
            error : error
        })
    } 
}
const login = async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    // Check email
    const user = await User.findOne({
        email: email,
        deleted: false
    })
    // console.log(user)
    if(!user) {
        res.status(400).json({
            message : "Email không tồn tại!"
        })
        return;
    }
    // Check password
    if(user.password != password){
        res.status(300).json({
            message : "Bạn đã nhập sai mật khẩu !"
        })
        return;
    }
    const token = user.token;
    res.cookie("token" , token);
    res.status(200).json({
        message : "Đăng nhập thành công!",
        user : user.fullname,
    })

}
const updateUser = async (req, res) => {
    try {
        const id = req.params.id
        const updateIn4 = req.body

        const data = await User.updateOne({
            _id : id
        }, {
            $set : updateIn4
        })
        const updatedUser = await User.findOne({ _id: id }).select("-password");
        res.status(200).json({
            message : "Cập nhật thông tin thành công!",
            user : updatedUser
        })
    } catch (error) {
        res.status(400).json({
            message : "Error!",
            error : error
        })
    } 
}


module.exports = {
    getUser,
    getUsers,
    register,
    login,
    updateUser,
}