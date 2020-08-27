const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs')

function hashPW (password) {
    return bcrypt.hashSync(password, 10)
}

module.exports = {
    addUser: async (req, res) => {
        const user = {
            username: req.body.username,
            password: hashPW(req.body.password),
            role: "member"
        }
        let addedId = await userModel.addUser(user)
        let status = addedId ? 201 : 500
        let msg = addedId ? 'success' : 'That username already exists'
        res.status(status).json({msg})
    },
    updateUser: async (req, res) => {
        let userToEdit = await userModel.getUser(req.params.userId)

        if(userToEdit) {
            if(!req.user.isOwner(userToEdit) ) {
                console.log('incorrect user is making the request')
                return res.json({msg: 'incorrect user is trying to edit this user'})
            }
            const userToUpdate = {
                userId: req.params.userId,
                username: req.body.username,
                password: req.body.password
            }
    
            if(req.body.username) userToUpdate.username = req.body.username
            if(req.body.password) userToUpdate.password = hashPW(req.body.password)

            console.log(userToUpdate)

            let lastId = await userModel.updateUser(userToUpdate)
            let status = lastId ? 201 : 500;
            res.status(status).json({updated_count: lastId});
        }

    },
    deleteUser: async (req, res) => {
        let userToDelete = await userModel.getUser(req.params.userId)
        console.log(userToDelete)
        if(userToDelete) {
            if(!req.user.isOwner(userToDelete) ) {
                console.log('incorrect user is making the request')
                return res.json({msg: 'incorrect user is trying to edit this user'})
               
            }
        }
        const deleteId = req.params.userId;

        let response = await userModel.deleteUser(deleteId)
        let status = response ? 201 : 500;
        res.status(status).json({response: response});
    },
    getUsers: async (req, res) => {
        res.json(await userModel.getUsers())   
    },
    getUser: async (req, res) => {
        res.json(await userModel.getUser({Userinfo: req.params.userId}))  
    },
    getUserTodos: async(req, res) => {
        let response = await userModel.getUserPosts(req.params.userId)
        if(response.length > 0) {
            res.status(200).json(response) 
        } else {
            res.status(404).json("userid not found") 
        }
         
    }
}