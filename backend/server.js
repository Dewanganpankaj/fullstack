import express from 'express'
const app = express()
const port = 4000
// app.get('/',(req,res)=>{
//     res.send('server is ready here')
// })
//get a list of 5 jokes

// 
app.get('/api/jokes',(req,res)=>{
    const jokes=[{
        id:1,
        title:'A joke one',
        content :"this is joke one "
    },{
        id:2,
        title:'A joke two',
        content :"this is joke two "
    },{
        id:3,
        title:'A joke three',
        content :"this is joke three "
    },{
        id:4,
        title:'A joke four',
        content :"this is joke four "
    },{
        id:5,
        title:'A joke five',
        content :"this is joke five "
    }];
    res.send(jokes);
});

app.listen(port ,(req,res)=>{
    console.log(`server is running at port ${port}`);
})