const conexion = require('../database/db');

exports.save = (req, res) => {
    const user = req.body.user;
    const rol = req.body.rol;
    console.log(user+" - "+rol);
    conexion.query('INSERT INTO user SET?',{user:user, rol:rol}, (error, result)=> {
        if (error){
            console.log(error);
        } else{
            res.redirect('/');
        }
    })
};

exports.update = (req, res) => {

const id = req.id = req.body.id;
const user = req.id = req.body.user;
const rol = req.id = req.body.rol;
conexion.query('UPDATE users SET? WHERE id = ?' [{user:user, rol:rol}, id], (error, result)=> {
    if (error){
        console.log(error);
    } else{
        res.redirect('/');
    }
})

}