# gulp合图插件详解（隶属于[gulp-T](https://github.com/121595113/gulp-T)）

## 使用方法

### 一、安装依赖包
```
npm install
```

### 二、具体操作步骤

#### 1、添加图片
将要合成的图片以文件夹的形式放在`src/images/`目录下

#### 2、根目录下执行（命令行中）
```
gulp sprites -s 文件夹名1,文件夹名2,文件夹名3,文件夹名4
```
同时合图支持自定义`layout`，在命令行添加参数`-L`，空格后跟上要合成的方式，如：
```
gulp sprites -s 文件夹名 -L top-down
```
可选参数见下表（[来源gulp.spritesmith官网](https://www.npmjs.com/package/gulp.spritesmith#algorithms)）,默认`binary-tree`

|         `top-down`        |          `left-right`         |         `diagonal`        |           `alt-diagonal`          |          `binary-tree`          |
|---------------------------|-------------------------------|---------------------------|-----------------------------------|---------------------------------|
| ![top-down][top-down-img] | ![left-right][left-right-img] | ![diagonal][diagonal-img] | ![alt-diagonal][alt-diagonal-img] | ![binary-tree][binary-tree-img] |

[top-down-img]: https://raw.githubusercontent.com/twolfson/layout/2.0.2/docs/top-down.png
[left-right-img]: https://raw.githubusercontent.com/twolfson/layout/2.0.2/docs/left-right.png
[diagonal-img]: https://raw.githubusercontent.com/twolfson/layout/2.0.2/docs/diagonal.png
[alt-diagonal-img]: https://raw.githubusercontent.com/twolfson/layout/2.0.2/docs/alt-diagonal.png
[binary-tree-img]: https://raw.githubusercontent.com/twolfson/layout/2.0.2/docs/binary-tree.png
到此图片合成已经完成，是不是很简单！合成的图片位于要合图的同级目录中，命名方式`文件夹名 + '-sprite'`。生成的样式文件位于`src/sprites/`中。

#### 3、如果想对图片进行压缩，执行下面的命令
```
gulp imagemin
```
压缩后的图片位于`dist/images/`目录中

#### 4、清空文件
```
gulp delete
```

### 三、参数修改

#### 1、合图相关参数的修改
文件位于`gulp/tasks/sprites.js`,具体可修改说明如下：
```javascript
cssName: `_${item}.scss`,// 生成的样式文件名，默认配置 '_'+文件夹名
cssFormat: 'scss',// 生成样式的扩展名，可以设置成sass
padding: 4,// 合成图片间距
algorithm: sprite_arg.layout,// 合成方式，可选top-down、left-right、diagonal、alt-diagonal、binary-tree。这里设置成读取命令行参数
cssOpts: {
    dir_name: item// 自定义合成样式的前缀，此处动态的设置成文件夹名称
},
cssTemplate: path.resolve('./gulp/lib/handlebarsInheritance.scss.handlebars'),// 合图所需的模板
imgName: `${item}-sprite.png`,// 合成图片的名称，这里设置成 文件夹名+'-sprite.png'
imgPath: `../images/${item}-sprite.png`// 生成样式中图片路径，根据需求修改
```
#### 2、配置路径相关的修改
文件位于`gulp/config.js`,里面主要配置了源文件、生成文件路径相关的参数，供gulp任务调用
