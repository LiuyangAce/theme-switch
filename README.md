### 启动项目
```
npm i

npm run serve
```

### 需求
切换项目主题 
element-ui组件主题切换并且
自己项目主题随着element-ui主题变化

### 思路

从[element-ui](https://element.eleme.cn/#/zh-CN/theme)自定义全局样式,并下载,给自定义主题的加`class`,然后全局引入,动态修改根目录dom的`class`,让两者保持一致,达到更换主题的效果。

系统样式跟随`element-ui`样式切换
`public/style`添加全局主题样式文件,用全局变量定义颜色,在系统中使用全局变量; `public/index`引入该样式文件,动态切换引入的`href`来选择不同全局样式文件

达到项目主题切换

### 实现

这里用两套主题为例子
1. [下载主题](https://element.eleme.cn/#/zh-CN/theme) 放入 `scr/style`下并取名`theme-blue` 和 `theme-red`;

2. `npm i gulp gulp-clean-css gulp-css-wrap`
该目录下加入`gulpfile.js`
切换注释 分别执行 `npx gulp`

3. 分别用`dist`文件夹下的`index.css`代替`theme-blue`和`theme-red`

4. 修改`public`下的`index.html`,详细见源码

5. `public`下添加`style/`并添加文件夹`blue`和`red`,用全局变量定义颜色

6. 切换组件`src/components/HelloWorld.vue`,关键代码
```
  document.body.className = `theme-${this.model}`
  
  document.head.querySelector('#theme-link').setAttribute('href', `./style/${this.model}/index.css`)
```


### 另外
网上还有一种  [通过改变覆盖全局变量](https://juejin.cn/post/7024025899813044232) 的方法

