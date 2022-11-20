const app = require('./app');

app.listen(8000, (err)=>{
    if (err){
        console.log('server can not connecting..!')
    }else{
        console.log('server connected successfully')
    }
})