connection=require('./conection')

exports.registerfan = function(req,res){
    // console.log("req",req.body);
    var today = new Date();
    var users={
      "firstname":req.body.firstname,
      "lastname":req.body.lastname,
      "email":req.body.email,
      "password":req.body.password,
      
    }
    connection.query('INSERT INTO fans SET ?',users, function (error, results, fields) {
    if (error) {
      console.log("error ocurred",error);

      res.send({
        "code":400,
        "failed":"error ocurred",
        "status":false
      })
    }else{
      console.log('The solution is: ', results);
      
      
      // console.log(fields)
      // var email1=users.email;
      // connection.query('SELECT*FROM fans WHERE email=?', email1,function(error,results,fields){
      //   console.log(results)
      // })
      res.send({
        "code":200,
        "success":"user registered sucessfully",
        "status":true
          });
          
    }
    });
  }

 
exports.registersartist = function(req,res){
  // console.log("req",req.body);
  
  var users={
    "bandname":req.body.bandname,
    "phonenumber":req.body.phonenumber,
    "email":req.body.email,
    "password":req.body.password,
    
  }
  connection.query('INSERT INTO sartist SET ?',users, function (error, results, fields) {
  if (error) {
    console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred",
      "status":false

    });
  }
  else{
    console.log('The solution is: ', results);
    res.send({
      "code":200,
      "success":"user registered sucessfully",
      "status":true
        });
        
  }
  });
}
  exports.login = function(req,res){
    var email= req.body.email;
    var password = req.body.password;
    connection.query('SELECT email,password FROM fans UNION SELECT  email,password FROM sartist WHERE email = ?',[email], function (error, results, fields) {
    if (error) {
      // console.log("error ocurred",error);
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{
      // console.log('The solution is: ', results);
      if(results.length >0){
        if(results[0].password == password){
          res.send({
            "code":200,
            "success":"login sucessfull"
              });
        }
        else{
          res.send({
            "code":204,
            "success":"Email and password does not match"
              });
        }
      }
      else{
        res.send({
          "code":204,
          "success":"Email does not exits"
            });
      }
    }
    });
  }