个人任务管理器（ToDo List）

一个基于原生 HTML / CSS / JavaScript 实现的轻量级任务管理工具，支持任务的添加、完成标记、删除与本地持久化存储。

> 在线预览：https://zhangzebin0992.github.io/todo-list/

## ✨ 功能特性

- ➕ **添加任务**：输入任务内容后点击按钮或按回车即可添加
- ✅ **完成标记**：点击任务文本即可切换完成/未完成状态（划线样式）
- 🗑️ **删除任务**：每条任务右侧提供删除按钮
- 💾 **数据持久化**：使用 LocalStorage 存储，刷新或关闭浏览器后数据不丢失
- 📱 **响应式布局**：采用 Flex 布局，兼容不同屏幕尺寸

## 🛠️ 技术栈

- **HTML5**：语义化标签构建页面结构
- **CSS3**：Flex 布局、过渡动画、响应式设计
- **原生 JavaScript**：
  - DOM 操作（`querySelector`、`createElement`）
  - 事件监听（`addEventListener`）
  - 数组方法（`push`、`splice`、`forEach`）
  - 本地存储（`localStorage`）

## 📁 项目结构

```
todo-list/
├── index.html   # 页面结构
├── style.css    # 样式文件
└── script.js    # 交互逻辑
```

## 🚀 本地运行

1. 克隆仓库
```bash
git clone https://github.com/zhangzebin0992/todo-list.git
```

2. 进入项目目录
```bash
cd todo-list
```

3. 直接用浏览器打开 `index.html` 即可运行（无需构建工具）

## 💡 核心实现思路

1. **数据驱动渲染**：用 `tasks` 数组作为唯一数据源，`renderTasks()` 负责根据数据重新渲染 DOM
2. **状态持久化**：每次数据变更后调用 `localStorage.setItem()` 保存，初始化时从 `localStorage` 读取
3. **事件委托思想**：为动态生成的任务项绑定点击事件，通过闭包捕获索引 `index` 实现精准操作

## 📌 可扩展方向

- [ ] 添加任务分类（工作 / 生活 / 学习）
- [ ] 支持任务编辑
- [ ] 添加暗黑模式切换
- [ ] 按状态筛选（全部 / 已完成 / 未完成）
- [ ] 添加截止日期与提醒
- [ ] 数据同步到后端（Node.js / Firebase）

## 📄 License

MIT
