var mysql=require('mysql2');
var express=require('express');
var app=express();
var bodyparser=require('body-parser');


app.use(bodyparser.json());
var connection=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'',
        database:'Employee'
    });

connection.connect((err) =>{
   if(!err)
       console.log('DB connection succeded');
   else
       console.log('DB connection failed \n Error;'+ JSON.stringify(err,undefined,2));

});

app.listen(3000,()=>console.log('Express server is running at port :3000'));

app.get('/employees',(res,req)=>{
    connection.query('Select * from employee_detail',(err,rows,fields)=>{
        if(!err)
            console.log(rows);
        else
            console.log(err);
    })
});