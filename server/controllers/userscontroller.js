const router = require ('express')
const user = require ('../models/users')
const db = require('../models')

router.get ('/', (req, res) => {
    db.users.find()
.then((user) => {
    res.render('users/index', {user})
})
.catch(err => {
    console.log('ERROR404')
    })

})

router.post('/', (req,res) => {
    db.users.create(req.body)
    .then(() => {
        res.redirect('/users')
    })
})

module.exports = router 