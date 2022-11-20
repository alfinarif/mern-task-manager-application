

exports.HelloWorld = (req, res)=>{
 res.status(200).json({
     status: 'success',
     data: "Controller is working"
 });

}