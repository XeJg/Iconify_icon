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

## 依赖

- 跨包调用 `file_converter:convert_file`（ImageMagick）把 SVG 栅格化为本地 PNG，仅在 `show_png=true` 时需要。

## 安装

把 `iconify_icons.js` 放入 Operit 沙盒包目录（`.../files/packages/`）即可。

## 开源协议

GPL-3.0
