# 好用的Npm包
1. degit <不带commit信息, 从Git直接拉项目>

  ## antfu推荐
  1. unplugin-auto-import
  2. carbon-product-icons
  3. github.com/antfu/eslint-config
  ```js
  // setting.json
  "eslint.validate": [
    "javascript",
    "typescript",
    "javascriptreact",
    "typescriptreact",
    "vue",
    "html",
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll": false,
    "source.organizeImports": false
  }
  // .eslintrc
  {
    "extends": "@antfu"
  }
  ```
  4. VueUse <useStorage...>
  5. antfu/ts-starter
  6. ni <antfu/ni>
  7. .zshrc
  8. where an i

# 好用的vscode插件
1. gitlens
2. copilot
3. Iconify IntelliSense
5. where am i

# 好用的vscode设置
1. Guides: Bracket Pairs => active
2. Cursor Blinking => smooth

# 新框架

## 测试
1. vitest

## CSS
1. UnoCSS

## 微前端
1. qiankun
2. mirco-app