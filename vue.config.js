// //使用这个个module时，他会和我们默认的config文件进行拼接
// const path = require('path');//引入path模块
// function resolve(dir){
//   return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
// }
// module.exports={
//   chainWebpack:(config)=>{
//     config.resolve.alias
//       .set('@',resolve('./src'))
//
//     //set第一个参数：设置的别名，第二个参数：设置的路径
//
//   }
// }
