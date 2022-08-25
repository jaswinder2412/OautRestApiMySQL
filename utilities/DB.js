var mysql = require('mysql');
var path = require('path');

require('dotenv').config({
    path: path.join(__dirname, '../config.env')
})
 
class DB{
    
     constructor(){
         this.connection = mysql.createPool({
            host: process.env.DBHOST,
            user: process.env.DBUSER,
            password: process.env.DBPASSWORD,
            database: process.env.DBBASE,
            socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
            connectionLimit: 100
          });
        }

        myquery(sql,args){
           
            return new Promise ((myResolve, myReject) => { 
                this.connection.query(sql, args,  (err, result) => {
                    if (err) myReject(err);
                     myResolve(result);
                 });
                });


        }
     }

 module.exports = new DB(); 