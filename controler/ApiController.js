const Db = require('../utilities/DB');

class ApiController{
    constructor(){
        this.db = Db;
       }

       async getUsers(){ 
         try{

                var sqlquerys = "Select * from users";
                var result = this.db.myquery(sqlquerys,[]);
                 return await  result ;
               
            }

        catch(err){
                console.log(err);
         }
       }
}

module.exports = new ApiController();