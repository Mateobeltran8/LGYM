const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'Mateo',
    password: '12345678',
    database: 'bdlgym'
});

conexion.connect((error)=>{
    if (error){
        console.error('El error de conexion es: ' + error);
        return
    }
    console.log('¡Connectado a la DB MySQL!')
})

module.exports = conexion;