module.exports = {
  entry: './main.jsx',//入口文件 jsx比js更有优势，通常react使用jsx编写模板
  output: {
    filename: 'bundle.js'//定义输出文件名
  },
  module: {//定义对模块的处理逻辑
    loaders:[//定义一系列的加载器 是一个数组
      {
        test: /\.js[x]?$/,//正则表达式  用于匹配到的文件
        exclude: /node_modules/,//字符串或者数组，指排除的文件夹
        loader: 'babel-loader?presets[]=es2015&presets[]=react',//处理匹配到的文件
      },
    ]
  }
};
