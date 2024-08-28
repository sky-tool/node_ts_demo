演示 node ts 调试工程
这个demo主要配置了 简单的 node 项目，采用 ts 语言，可通过 vscode 调试

主要关注下面几点:
- package.json
- tsconfig.json
- launch.json
- task.json


### 初始化 Node.js 项目
```
npm init -y
```

### 创建 tsconfig.json 文件

```
npx tsc --init
```

### 安装 TypeScript 和相关依赖
```
npm install typescript ts-node @types/node --save-dev
```