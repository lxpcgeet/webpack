
//多个模块分别打包成多个模块
// module.exports = {
//   entry: {//打包入口文件  可以是一个对象
//     bundle1: './main1.js',
//     bundle2: './main2.js'
//   },
//   output: {
//     filename: '[name].js'//定义输出文件  可以输出两个文件
//   }
// };



//多个模块打包成一个模块
module.exports = {
	entry:['./main1.js','./main2.js'],
	output:{
		filename:'bundle.js'
	}
}
