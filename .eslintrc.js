module.exports = {
    root: true,
    env: {
        node: true
    },
    // extends: ["plugin:vue/essential", "@vue/prettier"],
    extends: ["plugin:vue/essential", "@vue/prettier", "plugin:vue/recommended"],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-warning-comments": 1,

        "no-alert": 2,//禁止使用alert confirm prompt

        "no-array-constructor": 2,//禁止使用数组构造器
        "no-new-object": 2,//禁止使用new Object()
        "no-new-wrappers": 2,//禁止使用new创建包装实例，new String new Boolean new Number

        "no-caller": 2,//禁止使用arguments.caller或arguments.callee
        "no-catch-shadow": 2,//禁止catch子句参数与外部作用域变量同名
        "no-class-assign": 2,//禁止给类赋值
        "no-constant-condition": 2,//禁止在条件中使用常量表达式 if(true) if(1)
        "no-empty": 2,//块语句中的内容不能为空
        "no-empty-character-class": 2,//正则表达式中的[]内容不能为空
        "no-extra-boolean-cast": 2,//禁止不必要的bool转换
        "no-extra-parens": 2,//禁止非必要的括号
        "no-extra-semi": 2,//禁止多余的冒号
        "no-undef-init": 2,//变量初始化时不能直接给它赋值为undefined


        "quotes": [2, "single"], //引号风格
        // "indent": [2,4],
        // "indent": 0,
        "vue/script-indent": ["error", 4, { "baseIndent": 1, "switchCase": 1, }],
        // 'vue/script-indent': ['error', 2, {'baseIndent': 1}],
        // 'vue/script-indent': [
        //     'error',
        //     4,
        //     {
        //         'baseIndent': 1
        //     }
        // ],


        "no-with": 2,//禁用with

        // es6
        "no-var": 2,
    },
    overrides:[
        {
            'files':['*.vue'],
            'rules':{
                'indent':'off'
            }
        }
    ],
    parserOptions: {
        parser: "babel-eslint"
    }
};
