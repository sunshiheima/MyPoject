/**
 * 参考文档
 * 【eslint英文文档】https://eslint.org/docs/user-guide/configuring
 * 【eslint中文文档】http://eslint.cn/docs/rules/
 */

/**
 * eslint有三种使用方式
 * 【1】js代码中通过注释的方式使用
 * 【2】通过webpack的eslintConfig字段设置，eslint会自动搜索项目的package.json文件中的配置
 * 【3】通过配置文件的方式使用，配置文件有多种文件方式，如JavaScript、JSON 或者 YAML等
 */

/**
 * 文件忽略
 * 【】让eslint跳过特定文件的检测
 * 【】通过当前工作目录下 「.eslintignore」 文件进行设置
 *  其使用的是Glob路径书写方式，与「.gitignore」的使用方法相同
 * 【】也可以在 package.json 文件中，通过 eslintIgnore 参数进行设置
 */

/**
 * 文件内局部设置
 * 【】eslint可以具体文件中设置特定代码的规则，常用于跳过某条语句的检测。
 * 【】注销全部规则，在代码前新建一行，添加注销 /* eslint-disable *\/  。如果没有恢复设置的语句，则下列全部代码都会跳过检测。
 * 【】恢复eslint，在代码前新建一行，添加注销 /* eslint-enable *\/
 * 【】指定忽略的规则，/* eslint-disable no-alert, no-console *\/
 * 【】在特定行禁用，// eslint-disable-line
 * 【】在下一行禁用，// eslint-disable-next-line
 */

module.exports = {

  /**
   * 根目录标识
   * http://eslint.cn/docs/user-guide/configuring#using-configuration-files
   * http://eslint.cn/docs/user-guide/configuring#configuration-cascading-and-hierarchy
   * 【】标识当前配置文件为最底层的文件，无需往更上一级的文件目录中进行搜索
   * 【】默认eslint的配置文件搜索方式是，从目标文件夹进行搜索，遍历内部每一个文件夹，找到配置文件并层叠使用。再跳出本项目，往祖先文件夹进行遍历
   * 【】注意「~/.eslintrc」的意义，「~」是指linux上的家目录，「~/.eslintrc」是指家目录下的eslint配置文件，用于私人开发者，用于整个电脑全局约束的。这个配置通过本配置项root去设置，设置了root,eslint检测时将不会再往上搜索
   * 【】eslint的生效规则是就近使用，越近的配置项优先级越高，覆盖其他配置项。如一个项目中，可以在不同文件夹中都添加配置文件，这些规则将重叠组合生效
   */
  root: true, // 标识当前配置文件为eslint的根配置文件，让其停止在父级目录中继续寻找。


  /**
   * 解析器
   * http://eslint.cn/docs/user-guide/configuring#specifying-parser
   * 【】ESLint 默认使用Espree作为其解析器
   * 【】解析器必须是本地安装的一个 npm 模块。即必须按照在本地的node_module中
   * 【】解析器是用于解析js代码的，怎么去理解每一个表达式，有点C++中编译器的概念，会对js进行一些语法分析，语义分析什么的，才能判断语句符不符合规范。而不是通过简单的字符串对比。
   * 【】解析器有很多，但兼容eslint的解析器有以下几个
   * Espree：默认解析器，一个从Esprima中分离出来的解析器，做了一些优化
   * Esprima：js标准解析器
   * Babel-ESLint： 一个对Babel解析器的包装，babel本身也是js解析器的一种（不然怎么能转化为兼容性代码呢？首先需要进行js解析，才能转化）。如果我们的代码需要经过babel转化，则对应使用这个解析器
   * typescript-eslint-parser(实验) - 一个把 TypeScript 转换为 ESTree 兼容格式的解析器
   */
  parser: 'babel-eslint',


  /**
   * 解析器配置项
   * http://eslint.cn/docs/user-guide/configuring#specifying-parser-options
   * 【】这里设置的配置项将会传递到解析器中，被解析器获取到，进行一定的处理。具体被利用到，要看解析器的源码有没有对其进行利用。这里仅仅做了参数定义，做了规定，告诉解析器的开发者可能有这些参数
   * 【】配置项目有：
   * "sourceType": "module",  // 指定JS代码来源的类型，script(script标签引入？) | module（es6的module模块），默认为script。为什么vue的会使用script呢？因为vue是通过babel-loader编译的，而babel编译后的代码就是script方式
   * "ecmaVersion": 6,     // 支持的ES语法版本，默认为5。注意只是语法，不包括ES的全局变量。全局变量需要在env选项中进行定义
   * "ecmaFeatures": {     // Features是特征的意思，这里用于指定要使用其他那些语言对象
     "experimentalObjectRestSpread": true, //启用对对象的扩展
     "jsx": true,              //启用jsx语法
     "globalReturn":true,          //允许return在全局使用
     "impliedStrict":true          //启用严格校验模式
    }
   */
  parserOptions: {},


  /**
   * 运行环境
   * http://eslint.cn/docs/user-guide/configuring#specifying-environments
   * 【】一个环境定义了一组预定义的全局变量
   * 【】获得了特定环境的全局定义，就不会认为是开发定义的，跳过对其的定义检测。否则会被认为改变量未定义
   * 【】常见的运行环境有以下这些，更多的可查看官网
   * browser - 浏览器环境中的全局变量。
   * node - Node.js 全局变量和 Node.js 作用域。
   * es6 - 启用除了 modules 以外的所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）。
   * amd - 将 require() 和 define() 定义为像 amd 一样的全局变量。
   * commonjs - CommonJS 全局变量和 CommonJS 作用域 (用于 Browserify/WebPack 打包的只在浏览器中运行的代码)。
   * jquery - jQuery 全局变量。
   * mongo - MongoDB 全局变量。
   * worker - Web Workers 全局变量。
   * serviceworker - Service Worker 全局变量。
   */
  env: {
    browser: true, // 浏览器环境
  },


  /**
   * 全局变量
   * http://eslint.cn/docs/user-guide/configuring#specifying-globals
   * 【】定义额外的全局，开发者自定义的全局变量，让其跳过no-undef 规则
   * 【】key值就是额外添加的全局变量
   * 【】value值用于标识该变量能否被重写，类似于const的作用。true为允许变量被重写
   * 【】注意：要启用no-global-assign规则来禁止对只读的全局变量进行修改。
   */
  globals: {
    // gTool: true, // 例如定义gTool这个全局变量，且这个变量可以被重写
  },


  /**
   * 插件
   * http://eslint.cn/docs/user-guide/configuring#configuring-plugins
   * 【】插件同样需要在node_module中下载
   * 【】注意插件名忽略了「eslint-plugin-」前缀，所以在package.json中，对应的项目名是「eslint-plugin-vue」
   * 【】插件的作用类似于解析器，用以扩展解析器的功能，用于检测非常规的js代码。也可能会新增一些特定的规则。
   * 【】如 eslint-plugin-vue，是为了帮助我们检测.vue文件中 <template> 和 <script> 中的js代码
   */
  plugins: [
    'vue'
  ],


  /**
   * 规则继承
   * http://eslint.cn/docs/user-guide/configuring#extending-configuration-files
   *【】可继承的方式有以下几种
   *【】eslint内置推荐规则，就只有一个，即「eslint:recommended」
   *【】可共享的配置， 是一个 npm 包，它输出一个配置对象。即通过npm安装到node_module中
   *  可共享的配置可以省略包名的前缀 eslint-config-，即实际设置安装的包名是 eslint-config-airbnb-base
   *【】从插件中获取的规则，书写规则为 「plugin:插件包名/配置名」，其中插件报名也是可以忽略「eslint-plugin-」前缀。如'plugin:vue/essential'
   *【】从配置文件中继承，即继承另外的一个配置文件，如'./node_modules/coding-standard/eslintDefaults.js'
   */
  extends: [
    'plugin:vue/essential', // 额外添加的规则可查看 https://vuejs.github.io/eslint-plugin-vue/rules/
    /**
     * 「airbnb，爱彼迎」
     * 【】有两种eslint规范，一种是自带了react插件的「eslint-config-airbnb」，一种是基础款「eslint-config-airbnb-base」，
     * 【】airbnb-base 包括了ES6的语法检测，需要依赖 「eslint-plugin-import」
     * 【】所以在使用airbnb-base时，需要用npm额外下载 eslint-plugin-import
     * 【】所以eslint实际上已经因为 airbnb-base 基础配置项目，添加上了 eslint-plugin-import 插件配置
     * 【】所以在setting和rules里，都有 'import/xxx' 项目，这里修改的就是 eslint-plugin-import 配置
     */
    'airbnb-base',
  ],


  /**
   * 规则共享参数
   * http://eslint.cn/docs/user-guide/configuring#adding-shared-settings
   * 【】提供给具体规则项，每个参数值，每个规则项都会被注入该变量，但对应规则而言，有没有用，就看各个规则的设置了，就好比 parserOptions，解析器用不用它就不知道了。这里只是提供这个方法
   * 【】不用怀疑，经源码验证，这就是传递给每个规则项的，会当做参数传递过去，但用不用，就是具体规则的事情
   */
  settings: {
    /**
     *
     * 注意，「import/resolver」并不是eslint规则项，与rules中的「import/extensions」不同。它不是规则项
     * 这里只是一个参数名，叫「import/resolver」，会传递给每个规则项。
     * settings并没有具体的书写规则，「import/」只是import模块自己起的名字，原则上，它直接命名为「resolver」也可以，加上「import」只是为了更好地区分。不是强制设置的。
     * 因为「import」插件很多规则项都用的这个配置项，所以并没有通过rules设置，而是通过settings共享
     * 具体使用方法可参考https://github.com/benmosher/eslint-plugin-import
     */
    'import/resolver': {
      /**
       * 这里传入webpack并不是import插件能识别webpack，而且通过npm安装了「eslint-import-resolver-webpack」，
       * 「import」插件通过「eslint-import-resolver-」+「webpack」找到该插件并使用，就能解析webpack配置项。使用里面的参数。
       * 主要是使用以下这些参数，共享给import规则，让其正确识别import路径
       * extensions: ['.js', '.vue', '.json'],
       * alias: {
       * 'vue$': 'vue/dist/vue.esm.js',
       * '@': resolve('src'),
       * 'static': resolve('static')
       * }
       */
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },

  /**
   * 针对特定文件的配置
   * 【】可以通过overrides对特定文件进行特定的eslint检测
   * 【】特定文件的路径书写使用Glob格式，一个类似正则的路径规则，可以匹配不同的文件
   * 【】配置几乎与 ESLint 的其他配置相同。覆盖块可以包含常规配置中的除了 extends、overrides 和 root 之外的其他任何有效配置选项，
   */
  overrides: [
    {
      'files': ['bin/*.js', 'lib/*.js'],
      'excludedFiles': '*.test.js',
      'rules': {
        'quotes': [2, 'single']
      }
    }
  ],

  /**
   * 自定义规则
   * http://eslint.cn/docs/user-guide/configuring#configuring-rules
   * 【】基本使用方式
   * "off" 或者0 关闭规则
   * "warn" 或者1 将规则打开为警告（不影响退出代码）
   * "error" 或者2 将规则打开为错误（触发时退出代码为1）
   * 如：'no-restricted-syntax': 0, // 表示关闭该规则
   * 【】如果某项规则，有额外的选项，可以通过数组进行传递，而数组的第一位必须是错误级别。如0,1,2
   * 如 'semi': ['error', 'never'], never就是额外的配置项
   */
  rules: {
    /**
     * 具体规则
     * 【】具体的规则太多，就不做介绍了，有兴趣的同学可以上eslint官网查
     * 【】注意 xxx/aaa 这些规则是 xxx 插件自定的规则，在eslint官网是查不到的。需要到相应的插件官网中查阅
     * 【】如 import/extensions，这是「eslint-plugin-import」自定义的规则，需要到其官网查看 https://github.com/benmosher/eslint-plugin-import
     */
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-restricted-syntax": 0, //
    "guard-for-in": 0, //
    "prefer-const": 0, //
    "no-else-return": 0, //
    "no-plusplus": 0, // 不允许使用++符号
    "object-shorthand": ["error", "always", { "avoidQuotes": false }], // 去除禁止'videoData.isPause'(newValue) 的命名
    "no-lonely-if": 0, // 不允许给函数参数重新赋值
    "no-param-reassign": 0, // 不允许给函数参数重新赋值
    "no-mixed-operators": 0, // 不允许混合使用运算符
    "no-underscore-dangle": 0, // 不允许下划线作为变量名之一
    "no-under": 0, // 不允许混合使用运算符
    'generator-star-spacing': 'off',
    'no-console': 'off', // 禁用no-console规则
    'semi': ['error', 'never'], // 行尾不使用分号
    'comma-dangle': ['error'],
    'eqeqeq': 0, // 不需要强制使用全等
    'max-len': 0,
    'radix': 0,// parseInt不需要传第二个参数
    'linebreak-style': 0, // 强制执行一致的换行样式，windows和mac不一样
    'consistent-return': 0, // 箭头函数最后不需要最后强制return值
    'no-unused-expressions': ["error", { "allowShortCircuit": true, "allowTernary": true }], // 允许您在表达式中使用三元运算符
    'no-multi-spaces': ['error', { "ignoreEOLComments": true }],
  }
}