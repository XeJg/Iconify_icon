# Iconify Icon

面向 AI 助手的图标工具包（Operit Sandbox Package）。需要图标时直接调用本包在 [Iconify](https://iconify.design) 搜索并下载，保存到本地并返回可直接使用的本地文件路径。

Iconify 公开免费、无需密钥，聚合 150+ 图标集 / 20 万+ 开源图标。

## 工具

| 工具 | 说明 |
| --- | --- |
| `search_icons` | 在 Iconify 搜索图标，返回图标 ID 列表及所属图标集的作者/授权信息，并附带可直接预览的 Markdown 引用 |
| `get_icon` | 按图标 ID 下载单个图标到本地 |
| `download_icons` | 批量下载多个图标 |
| `icon_sets` | 列出 / 查询 Iconify 可用图标集 |

## 输出说明

- **始终产出 SVG**（供助手直接使用）。
- `show_png=true` 时额外产出本地 128×128 PNG 供人工查看（默认 false，不产出 PNG）。
- PNG 会按 `fill_color`/`color` 填充实色，修复 `currentColor` 导致的空白图。

## 引用包（跨包依赖）

本包仅依赖 **一个** 其他包：

| 引用包 | 用途 | 触发条件 |
| --- | --- | --- |
| `file_converter`（`file_converter:convert_file`） | 用 ImageMagick 把本地 SVG 栅格化为 128×128 PNG | 仅当 `show_png=true` 时调用 |

- 源码位置：`const CONVERTER_TOOL = "file_converter:convert_file";`
- **未安装 `file_converter` 不影响基本使用**：默认只产出 SVG，不会触发该跨包调用；只有显式传 `show_png=true` 时才会用到。
- 除此之外无其他跨包依赖。网络请求使用内置 `OkHttp` 直连 `https://api.iconify.design`，本地文件读写使用内置 `Tools.Files`。

## 安装

把 `iconify_icons.js` 放入 Operit 沙盒包目录（`.../files/packages/`）即可。

## 开源协议

GPL-3.0
