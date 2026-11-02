# Changelog

## [1.1.0](https://github.com/CialloJS/karin-plugin-qbot/compare/v1.0.11...v1.1.0) (2026-11-02)


### ✨ 新功能

* 初始化QQ开放平台机器人管理插件 ([a794650](https://github.com/CialloJS/karin-plugin-qbot/commit/a7946507e5032ca966a57f000601a0ce59ded977))
* 初始化QQ开放平台机器人管理插件v1.0.0 ([d677065](https://github.com/CialloJS/karin-plugin-qbot/commit/d677065c5e1fedafa29ecb42cf90cc2de747d17e))


### 🐛 错误修复

* **update:** 使用远端最新版本渲染更新日志 ([d6ff9e7](https://github.com/CialloJS/karin-plugin-qbot/commit/d6ff9e79a4520cf6b34ab0d40849e62581dae222))


### 📝 文档更新

* 更新README为QBot插件项目文档 ([21147b3](https://github.com/CialloJS/karin-plugin-qbot/commit/21147b32054f64d6c3f038965997383dedb95341))


### 🧰 其他更新

* **main:** release  1.0.10 ([377c9e2](https://github.com/CialloJS/karin-plugin-qbot/commit/377c9e26c0dc44924ef41f50bb50b435fcc7ef9c))
* **main:** release  1.0.10 ([cb29f90](https://github.com/CialloJS/karin-plugin-qbot/commit/cb29f90f6f0a539fa2cd091c1aa4c692a8861ccd))
* **main:** release  1.0.11 ([0cdb2d7](https://github.com/CialloJS/karin-plugin-qbot/commit/0cdb2d75d5872cd8713e03b4cff1d06548bbbbce))
* **main:** release  1.0.11 ([27720b8](https://github.com/CialloJS/karin-plugin-qbot/commit/27720b861bc1f6f79702f85a02748df1e8a7152a))
* **main:** release 1.0.9 ([e1e5c2e](https://github.com/CialloJS/karin-plugin-qbot/commit/e1e5c2eb3cf867a404f9afd5ab8c57f37cf3402f))
* **package.json:** add pnpm onlyBuiltDependencies config ([060a6d1](https://github.com/CialloJS/karin-plugin-qbot/commit/060a6d1990254b5c77e596bbe237c75fc2d29020))
* **pnpm:** 更新pnpm配置适配v11版本 ([0dfdd7b](https://github.com/CialloJS/karin-plugin-qbot/commit/0dfdd7b102ce8d4f131a2316b34114daf5a51e2c))
* release v1.0.1 and update changelog ([e104670](https://github.com/CialloJS/karin-plugin-qbot/commit/e1046708743bc0d95dc41d526446f085918bf7f1))
* release v1.0.5 统一字体渲染并清理冗余字体文件 ([00a9723](https://github.com/CialloJS/karin-plugin-qbot/commit/00a972398561cbf0a68112ca0f61602d52ae059b))
* release v1.0.7 并重构发布流程 ([2bffc73](https://github.com/CialloJS/karin-plugin-qbot/commit/2bffc73c50864c93f4dbe158740d82a156543117))
* release version 1.0.6 and fix font rendering issue ([41320b2](https://github.com/CialloJS/karin-plugin-qbot/commit/41320b2ba9ad136779dd483ef8dd1c4521d420b9))
* **release:** 1.0.8 版本发布 ([ca97493](https://github.com/CialloJS/karin-plugin-qbot/commit/ca97493c495b88b338c61c072cc561fbb165aef6))
* **release:** release version 1.0.2 ([5e2e5d7](https://github.com/CialloJS/karin-plugin-qbot/commit/5e2e5d76af53ba6fdb41504ea2674aedd334b3cf))
* update author and repo links, adjust log level and add test command ([e061064](https://github.com/CialloJS/karin-plugin-qbot/commit/e061064a6010e04e92cb39d1dd839c2418c5c40f))
* 新增多套小米sans字体文件 ([aff6129](https://github.com/CialloJS/karin-plugin-qbot/commit/aff6129cc2800c2226fbc66b85ca220294ab7ca0))
* 替换项目字体为鸿蒙字体，移除旧的MiSans和NotoSansSC字体 ([de3339e](https://github.com/CialloJS/karin-plugin-qbot/commit/de3339e6840943a3997d729954384442e3a712a8))


### ♻️ 代码重构

* **index:** 初始化日志改为插件名+版本+耗时格式 ([1d8e71d](https://github.com/CialloJS/karin-plugin-qbot/commit/1d8e71d9ec2fc5b56a80fc9defdd32a45c33321b))
* **render:** rewrite template lazy import to static string ([b2cfb25](https://github.com/CialloJS/karin-plugin-qbot/commit/b2cfb258a81527908c85fffdba20e06d9a7d1fbb))
* **update:** 移除更新日志消息的插件名前缀文案 ([2380a4c](https://github.com/CialloJS/karin-plugin-qbot/commit/2380a4cbe134c987d5ac6f1d6d056c3a4e9cae78))
* 优化模板资源加载逻辑，适配新的包发布结构 ([72f8132](https://github.com/CialloJS/karin-plugin-qbot/commit/72f81327d94def7463dfbe264cbd9114b68627b4))
* 移除独立Web面板，改为ktr模板渲染功能页 ([3de0980](https://github.com/CialloJS/karin-plugin-qbot/commit/3de0980413479bd05e08af3b2c35d068d596a7a5))


### 🏗️ 构建系统

* **pnpm-workspace:** add esbuild to allowed built dependencies ([1712432](https://github.com/CialloJS/karin-plugin-qbot/commit/17124325d5310bee48003987443966f1325944c9))
* 将build脚本从tsup改为tsdown ([75c36b9](https://github.com/CialloJS/karin-plugin-qbot/commit/75c36b9c80b4c5750241b18f6f85210eb682bd6a))


### 🎡 持续集成

* **github actions:** pin pnpm version to 10 in release workflow ([04399ae](https://github.com/CialloJS/karin-plugin-qbot/commit/04399ae79971d5f5fd801efe2ee5e4e0db822e25))
* **github actions:** 修改pkg-pr-new输出日志收集方式 ([9f3e3f5](https://github.com/CialloJS/karin-plugin-qbot/commit/9f3e3f54cc36f53d2fd922e825f13868e88c86a9))
* **github workflows:** add auto release note extraction and github release creation ([9031d9a](https://github.com/CialloJS/karin-plugin-qbot/commit/9031d9a8a5993f4811538a1b4a484904a320e613))
* **github workflows:** npm 发布使用 NPM_TOKEN 认证 ([59a2bd0](https://github.com/CialloJS/karin-plugin-qbot/commit/59a2bd014ee2416fe54276767adb7cd821c5f944))
* **github workflows:** update pnpm install flags for release workflow ([e3146fc](https://github.com/CialloJS/karin-plugin-qbot/commit/e3146fc6a986a449944abeb5c64a7dfe98ec2edf))
* **github workflows:** 修复版本比较逻辑的返回值处理问题 ([f590681](https://github.com/CialloJS/karin-plugin-qbot/commit/f590681caf8e4e6e36d9cf05baba86a12baa8053))
* **github workflows:** 预览包版本以 package.json 为唯一基准，移除 tag/release-please 推算 ([d2430e5](https://github.com/CialloJS/karin-plugin-qbot/commit/d2430e5007c5d7d81461e1a8959247d93ea9b395))

## [1.0.11](https://github.com/CialloJS/karin-plugin-qbot/compare/v1.0.10...v1.0.11) (2026-09-12)


### ♻️ 代码重构

* 优化模板资源加载逻辑，适配新的包发布结构 ([72f8132](https://github.com/CialloJS/karin-plugin-qbot/commit/72f81327d94def7463dfbe264cbd9114b68627b4))

## [1.0.10](https://github.com/CialloJS/karin-plugin-qbot/compare/v1.0.9...v1.0.10) (2026-09-12)


### 🎡 持续集成

* **github workflows:** npm 发布使用 NPM_TOKEN 认证 ([59a2bd0](https://github.com/CialloJS/karin-plugin-qbot/commit/59a2bd014ee2416fe54276767adb7cd821c5f944))

## [1.0.9](https://github.com/CialloJS/karin-plugin-qbot/compare/v1.0.8...v1.0.9) (2026-09-12)


### 🐛 错误修复

* **update:** 使用远端最新版本渲染更新日志 ([d6ff9e7](https://github.com/CialloJS/karin-plugin-qbot/commit/d6ff9e79a4520cf6b34ab0d40849e62581dae222))


### ♻️ 代码重构

* **index:** 初始化日志改为插件名+版本+耗时格式 ([1d8e71d](https://github.com/CialloJS/karin-plugin-qbot/commit/1d8e71d9ec2fc5b56a80fc9defdd32a45c33321b))
* **render:** rewrite template lazy import to static string ([b2cfb25](https://github.com/CialloJS/karin-plugin-qbot/commit/b2cfb258a81527908c85fffdba20e06d9a7d1fbb))
* **update:** 移除更新日志消息的插件名前缀文案 ([2380a4c](https://github.com/CialloJS/karin-plugin-qbot/commit/2380a4cbe134c987d5ac6f1d6d056c3a4e9cae78))


### 🎡 持续集成

* **github actions:** 修改pkg-pr-new输出日志收集方式 ([9f3e3f5](https://github.com/CialloJS/karin-plugin-qbot/commit/9f3e3f54cc36f53d2fd922e825f13868e88c86a9))
* **github workflows:** 修复版本比较逻辑的返回值处理问题 ([f590681](https://github.com/CialloJS/karin-plugin-qbot/commit/f590681caf8e4e6e36d9cf05baba86a12baa8053))
* **github workflows:** 预览包版本以 package.json 为唯一基准，移除 tag/release-please 推算 ([d2430e5](https://github.com/CialloJS/karin-plugin-qbot/commit/d2430e5007c5d7d81461e1a8959247d93ea9b395))

## 1.0.8

- 修复 `pnpm build` 构建失败：构建脚本命令名错误（`tsup` → `tsdown`）
- 修复 CI 发布流程失败：产物清单引用不存在的 `resources` 目录，已移除并改用 `ktr/public`

## 1.0.7

- 更新日志展示优化：`#qbot更新日志` 展示完整历史更新内容；插件更新成功并自动重启后，会发送当前版本更新日志图片
- 更新反馈文案优化：更新成功/失败提示更简洁清晰，与官方风格保持一致
- 发布流程重构
  - 引入 release-please 自动版本管理与 GitHub Release / CHANGELOG 生成
  - 提交 PR 时自动发布 pkg.pr.new 预览包，并在评论中附安装命令
  - 支持手动选择「预览 / 生产」模式，发布到 NPM、GitHub Packages 及国内镜像源
- 新增 Issue 质量检查自动化：模板化 Bug / 需求表单，自动标记 `needs-info`、检测重复 Issue、逾期自动关闭

## 1.0.6

- 修复命令文字字体混排问题：等宽字体栈补齐中文字体回退链，`#qbot` 系列命令行中文不再缺失字形（豆腐块 □）或漂移到备用字体，中西文渲染风格统一

## 1.0.5

- 中文字体渲染与开发预览统一：字体声明并入模板样式入口，QQ 截图渲染与 dev 面板预览统一使用内置 HarmonyOS Sans SC 字体，所见即所得

## 1.0.4

- 中文字体渲染升级：内置 HarmonyOS Sans SC 字体（Regular + Bold 分片），渲染时字体内联进截图 HTML，服务器无需安装中文字体也能渲染统一美观的文字效果

## 1.0.3

- 中文字体渲染升级：内置小米 MiSans 字体（多字重、按需分片加载），无论服务器是否安装中文字体，截图文字效果统一美观

## 1.0.2

- 修复 Linux 服务器渲染图片缺少中文字体导致乱码的问题：内置思源黑体字体包，无需系统安装字体即可正常显示中文

## 1.0.1

- 新增「正在输入」状态提示：执行帮助/版本/更新等高耗时命令时，好友会话即时显示输入状态，避免干等（仅私聊、固定 4 秒）
- 帮助菜单、版本信息、更新日志页面全新改版，信息展示更清晰
- 版本页新增运行时信息：Karin 框架版本、Node 版本、系统平台（含图标），并自动对比 npm 最新版本
- 新增更新日志查看（`#qbot更新日志`）：随时查看插件各版本更新内容
- 修复 WebUI 配置面板偶发加载失败的问题
- 发布流程完善：npm 发布后自动创建 GitHub Release

## 1.0.0

- 首个版本发布
- 开放平台登录、应用列表、消息模板、事件订阅、站内通知、DAU 数据查询
- 消息统计（用户/群组使用规模）与 WebUI 配置面板
- 插件更新与自动重启
