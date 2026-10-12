/* METADATA
{
    "name": "iconify_icons",
    "display_name": {
        "zh": "Iconify 图标搜索下载",
        "en": "Iconify Icon Search & Download"
    },
    "description": {
        "zh": "面向 AI 的图标工具包：需要图标时直接调用本包在 Iconify 搜索并下载图标，保存到本地并返回可直接使用的本地文件路径。始终产出 SVG（供实际使用）。show_png=true 时会额外产出本地 128×128 PNG 供人工查看（默认 false，不产出 PNG）。PNG 会按 fill_color/color 填充实色，修复 currentColor 导致的空白图。Iconify 公开免费、无需密钥，聚合 150+ 图标集 / 20 万+ 开源图标。",
        "en": "AI-oriented icon toolkit: search and download icons from Iconify, save locally and return ready-to-use local file paths. Always produces an SVG (for actual use). When show_png=true, additionally produces a local 128x128 PNG for human viewing (default false, no PNG). PNG is filled with a solid color from fill_color/color (fixes blank images caused by currentColor). Iconify is public, free and key-less, aggregating 150+ icon sets / 200k+ open-source icons."
    },
    "category": "Search",
    "enabledByDefault": true,
    "tools": [
        {
            "name": "search_icons",
            "description": { "zh": "在 Iconify 搜索图标，返回图标 ID 列表及所属图标集的作者/授权信息，并附带可直接预览的 Markdown 引用（使用在线 SVG）。", "en": "Search icons on Iconify. Returns icon IDs with their collection author/license info, plus ready-to-preview Markdown references (online SVG)." },
            "parameters": [
                {
                    "name": "query",
                    "description": { "zh": "搜索关键词，例如 home、arrow-left、用户、购物车", "en": "Search query, e.g. home, arrow-left, cart" },
                    "type": "string",
                    "required": true
                },
                {
                    "name": "limit",
                    "description": { "zh": "返回数量上限，默认 32，最大 999", "en": "Max results, default 32, max 999" },
                    "type": "number",
                    "required": false
                },
                {
                    "name": "prefixes",
                    "description": { "zh": "限定图标集，逗号分隔，例如 'mdi,tabler,lucide'（可选）", "en": "Limit to icon sets, comma-separated, e.g. 'mdi,tabler,lucide' (optional)" },
                    "type": "string",
                    "required": false
                }
            ]
        },
        {
            "name": "get_icon",
            "description": { "zh": "按图标 ID 下载单个图标到本地。始终产出 SVG（供助手直接使用）。show_png=true 时额外产出本地 128×128 PNG 供人工查看（默认 false）。PNG 会按 fill_color/color 填充实色，避免空白图。", "en": "Download a single icon by icon ID to local. Always produces an SVG (for the assistant to use directly). When show_png=true, additionally produces a local 128x128 PNG for human viewing (default false). PNG is filled with a solid color from fill_color/color to avoid blank images." },
            "parameters": [
                {
                    "name": "icon",
                    "description": { "zh": "图标 ID，格式 'collection:name'，例如 'mdi:home'、'tabler:arrow-left'", "en": "Icon ID in 'collection:name' form, e.g. 'mdi:home'" },
                    "type": "string",
                    "required": true
                },
                {
                    "name": "color",
                    "description": { "zh": "染色，支持 hex（#ff0000）、色名（red）。留空则不染色 SVG", "en": "Color: hex (#ff0000) or name (red). Empty leaves SVG uncolored" },
                    "type": "string",
                    "required": false
                },
                {
                    "name": "height",
                    "description": { "zh": "SVG 输出高度（像素），默认 128；PNG 固定 128×128", "en": "SVG output height in px, default 128; PNG is fixed 128x128" },
                    "type": "number",
                    "required": false
                },
                {
                    "name": "show_png",
                    "description": { "zh": "是否额外产出本地 PNG 供人工查看，默认 false（仅产出 SVG）。设为 true 时额外生成 PNG", "en": "Whether to additionally produce a local PNG for human viewing. Default false (SVG only). Set true to also generate a PNG" },
                    "type": "boolean",
                    "required": false
                },
                {
                    "name": "fill_color",
                    "description": { "zh": "PNG 填充色（实色），如 #2196f3 或 blue。不传时依次回退到 color、默认 #000000。仅在生成 PNG 时生效。用于避免 currentColor 导致的空白 PNG", "en": "PNG fill color (solid), e.g. #2196f3 or blue. Falls back to color, then default #000000. Only applies when a PNG is generated. Prevents blank PNG caused by currentColor" },
                    "type": "string",
                    "required": false
                },
                {
                    "name": "file_name",
                    "description": { "zh": "自定义文件名（可选，不含扩展名）", "en": "Custom file name (optional, without extension)" },
                    "type": "string",
                    "required": false
                }
            ]
        },
        {
            "name": "download_icons",
            "description": { "zh": "批量下载多个图标（先搜索再用本工具下载，或直接传图标 ID 列表）。始终产出 SVG（供助手直接使用）。show_png=true 时额外产出本地 PNG 供人工查看（默认 false）。PNG 会按 fill_color/color 填充实色。", "en": "Download multiple icons at once. Always produces SVGs (for the assistant to use directly). When show_png=true, additionally produces local PNGs for human viewing (default false). PNG is filled with a solid color from fill_color/color." },
            "parameters": [
                {
                    "name": "icons",
                    "description": { "zh": "图标 ID 列表，逗号分隔（如 'mdi:home,tabler:user'）或 JSON 数组字符串", "en": "Icon IDs: comma-separated (e.g. 'mdi:home,tabler:user') or a JSON array string" },
                    "type": "string",
                    "required": true
                },
                {
                    "name": "color",
                    "description": { "zh": "统一染色（可选）", "en": "Color for all icons (optional)" },
                    "type": "string",
                    "required": false
                },
                {
                    "name": "height",
                    "description": { "zh": "统一 SVG 高度，默认 128；PNG 固定 128×128", "en": "SVG height for all icons, default 128; PNG is fixed 128x128" },
                    "type": "number",
                    "required": false
                },
                {
                    "name": "show_png",
                    "description": { "zh": "是否额外产出本地 PNG 供人工查看，默认 false（仅产出 SVG）。设为 true 时额外生成 PNG", "en": "Whether to additionally produce local PNGs for human viewing. Default false (SVG only). Set true to also generate PNGs" },
                    "type": "boolean",
                    "required": false
                },
                {
                    "name": "fill_color",
                    "description": { "zh": "PNG 统一填充色（实色）。不传时依次回退到 color、默认 #000000。仅在生成 PNG 时生效", "en": "Unified PNG fill color (solid). Falls back to color, then default #000000. Only applies when PNGs are generated" },
                    "type": "string",
                    "required": false
                }
            ]
        },
        {
            "name": "icon_sets",
            "description": { "zh": "列出 / 查询 Iconify 可用图标集（含名称、作者、授权、图标数量）。可用于挑选风格统一的图标集。", "en": "List/query available Iconify icon sets (name, author, license, icon count). Useful for picking a consistent icon set." },
            "parameters": [
                {
                    "name": "query",
                    "description": { "zh": "按名称/关键词过滤图标集（可选，留空则返回全部）", "en": "Filter icon sets by keyword (optional; empty returns all)" },
                    "type": "string",
                    "required": false
                }
            ]
        }
    ]
}
*/

const iconifyIcons = (function () {
    const API_BASE = "https://api.iconify.design";
    const TIMEOUT_MS = 60000;
    // 本地 PNG 边长（固定），仅在 show_png=true 时产出
    const PNG_SIZE = 128;
    // PNG 栅格化默认填充色：修复 currentColor 导致的空白 PNG
    const DEFAULT_FILL_COLOR = "#000000";
    // 跨包调用：file_converter 内置包，用 ImageMagick 把 SVG 栅格化为本地 PNG
    const CONVERTER_TOOL = "file_converter:convert_file";
    const client = OkHttp.newBuilder()
        .connectTimeout(TIMEOUT_MS)
        .readTimeout(TIMEOUT_MS)
        .writeTimeout(TIMEOUT_MS)
        .build();

    function getErrorMessage(error) {
        if (error && error.message)
            return String(error.message);
        return String(error);
    }
    function isRecord(value) {
        return !!value && typeof value === "object" && !Array.isArray(value);
    }
    function encodePathSegment(value) {
        return encodeURIComponent(String(value || "").trim());
    }
    function ensureDir() {
        const dir = getPluginConfigDir();
        return dir.endsWith("/") ? dir : dir + "/";
    }
    function sanitizeFileName(name, fallbackPrefix) {
        const safe = String(name || "").replace(/[\\/:*?"<>|\s]/g, "_").trim();
        if (!safe)
            return fallbackPrefix + "_" + Date.now();
        return safe.substring(0, 80);
    }
    function normalizeIconId(value) {
        const raw = String(value || "").trim();
        if (!raw)
            return "";
        // 支持 "mdi:home" / "mdi/home"
        const normalized = raw.replace(/\//g, ":");
        return normalized;
    }
    function parseIconList(value) {
        if (value === undefined || value === null || value === "")
            return [];
        if (Array.isArray(value)) {
            return value.map(item => normalizeIconId(item)).filter(item => item.length > 0);
        }
        const raw = String(value).trim();
        if (!raw)
            return [];
        if (raw.startsWith("[")) {
            try {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed)) {
                    return parsed.map(item => normalizeIconId(item)).filter(item => item.length > 0);
                }
            }
            catch (e) {
                // fallthrough: treat as comma-separated
            }
        }
        return raw.split(",").map(item => normalizeIconId(item)).filter(item => item.length > 0);
    }
    function parseLimit(value, defaultValue, maxValue) {
        if (value === undefined || value === null || value === "")
            return defaultValue;
        const n = typeof value === "number" ? value : Number(String(value));
        if (!Number.isFinite(n) || n <= 0 || !Number.isInteger(n))
            throw new Error("limit 必须是正整数。");
        return Math.min(n, maxValue);
    }
    function normalizeHeight(value) {
        if (value === undefined || value === null || value === "")
            return 128;
        const n = typeof value === "number" ? value : Number(String(value));
        if (!Number.isFinite(n) || n <= 0)
            throw new Error("height 必须是正数。");
        return Math.round(n);
    }
    // 布尔解析：接受 true/false、'true'/'false'、1/0、'yes'/'no'
    function normalizeBool(value, defaultValue) {
        if (value === undefined || value === null || value === "")
            return defaultValue;
        if (typeof value === "boolean")
            return value;
        const s = String(value).trim().toLowerCase();
        if (s === "true" || s === "1" || s === "yes" || s === "y")
            return true;
        if (s === "false" || s === "0" || s === "no" || s === "n")
            return false;
        return defaultValue;
    }
    // 始终从 Iconify 下载 SVG 源（PNG 由本地转换得到）
    function buildIconUrl(iconId, options) {
        const idx = iconId.indexOf(":");
        if (idx <= 0 || idx === iconId.length - 1)
            throw new Error("图标 ID 格式错误，应为 'collection:name'，例如 'mdi:home'。当前值: " + iconId);
        const prefix = iconId.substring(0, idx);
        const name = iconId.substring(idx + 1);
        const query = [];
        if (options && options.color)
            query.push("color=" + encodePathSegment(options.color));
        if (options && options.height)
            query.push("height=" + options.height);
        const qs = query.length > 0 ? "?" + query.join("&") : "";
        return API_BASE + "/" + encodePathSegment(prefix) + "/" + encodePathSegment(name) + ".svg" + qs;
    }
    function previewUrl(iconId, options) {
        const idx = iconId.indexOf(":");
        const prefix = idx > 0 ? iconId.substring(0, idx) : "mdi";
        const name = idx > 0 ? iconId.substring(idx + 1) : iconId;
        const query = [];
        if (options && options.color)
            query.push("color=" + encodePathSegment(options.color));
        const qs = query.length > 0 ? "?" + query.join("&") : "";
        return API_BASE + "/" + encodePathSegment(prefix) + "/" + encodePathSegment(name) + ".svg" + qs;
    }
    async function doGet(url) {
        const request = client.newRequest().url(url).method("GET").headers({ "accept": "application/json" });
        const response = await request.build().execute();
        return response;
    }
    // 读取本地文本文件内容。
    // 注意：Tools.Files.read 返回的是 FileContentData 对象 {content, size, path, env}，
    // 真实文本在 .content 字段；旧实现误当字符串处理导致补丁静默失效。
    async function readTextFile(path) {
        const data = await Tools.Files.read(path);
        if (!data)
            return null;
        if (typeof data === "string")
            return data;
        if (typeof data.content === "string")
            return data.content;
        return null;
    }
    // 当 SVG 使用 currentColor 且未显式染色时，栅格化会得到空白图；
    // 这里在转换前把 currentColor 替换为实色 fillColor，并写回文件，返回是否实际发生替换。
    async function patchSvgFill(svgPath, fillColor) {
        try {
            if (!fillColor)
                return false;
            const raw = await readTextFile(svgPath);
            if (typeof raw !== "string" || raw.indexOf("currentColor") < 0)
                return false;
            const patched = raw.replace(/currentColor/g, fillColor);
            await Tools.Files.write(svgPath, patched);
            return true;
        }
        catch (e) {
            // 读取/写入失败不阻断主流程，仅尽力修补
            return false;
        }
    }
    // 用 file_converter 包把本地 SVG 栅格化为本地 PNG（ImageMagick），并校验产物存在。
    // 注意：会先把 currentColor 实体化为实色；转换用的拷贝不会污染原始 SVG。
    async function svgToLocalPng(svgPath, pngPath, size, fillColor) {
        if (fillColor)
            await patchSvgFill(svgPath, fillColor);
        const result = await toolCall(CONVERTER_TOOL, {
            input_path: svgPath,
            output_path: pngPath,
            options: "-background none -resize " + size + "x" + size
        });
        if (result && result.success === false) {
            throw new Error("SVG 转 PNG 失败: " + (result.message || "unknown"));
        }
        const exists = await Tools.Files.exists(pngPath);
        if (!exists) {
            throw new Error("SVG 转 PNG 失败：未生成文件 " + pngPath);
        }
        return pngPath;
    }
    async function searchIcons(params) {
        const query = String(params && params.query ? params.query : "").trim();
        if (!query)
            throw new Error("参数 query 不能为空。");
        const limit = parseLimit(params.limit, 32, 999);
        const prefixes = String(params.prefixes || "").trim();
        const queryParts = ["query=" + encodePathSegment(query), "limit=" + limit];
        if (prefixes)
            queryParts.push("prefixes=" + encodePathSegment(prefixes));
        const url = API_BASE + "/search?" + queryParts.join("&");
        const response = await doGet(url);
        if (!response.isSuccessful())
            throw new Error("Iconify 搜索失败: HTTP " + response.statusCode + " - " + response.content);
        let parsed;
        try {
            parsed = JSON.parse(response.content);
        }
        catch (e) {
            throw new Error("解析 Iconify 搜索结果失败: " + getErrorMessage(e));
        }
        const icons = Array.isArray(parsed.icons) ? parsed.icons.map(String) : [];
        const collections = isRecord(parsed.collections) ? parsed.collections : {};
        const results = icons.map(function (iconId) {
            const idx = iconId.indexOf(":");
            const prefix = idx > 0 ? iconId.substring(0, idx) : "";
            const meta = isRecord(collections[prefix]) ? collections[prefix] : null;
            return {
                icon: iconId,
                prefix: prefix,
                collection_name: meta && meta.name ? String(meta.name) : prefix,
                license: meta && meta.license && meta.license.spdx ? String(meta.license.spdx) : (meta && meta.license ? String(meta.license) : null),
                author: meta && meta.author ? meta.author : null,
                height: meta && meta.height !== undefined ? meta.height : null,
                svg_url: previewUrl(iconId),
                markdown: "![" + iconId + "](" + previewUrl(iconId) + ")"
            };
        });
        return {
            query: query,
            total: parsed.total !== undefined ? parsed.total : icons.length,
            count: results.length,
            results: results,
            hint: buildSearchHint(query, results)
        };
    }
    function buildSearchHint(query, results) {
        const lines = [];
        lines.push("在 Iconify 搜索 \"" + query + "\" 命中 " + results.length + " 个图标（在线预览，未下载）。");
        if (results.length > 0) {
            lines.push("");
            lines.push("图标 ID 列表（可传给 get_icon 或 download_icons 下载）：");
            lines.push(results.map(function (r) { return r.icon; }).join(", "));
        }
        if (results.length > 0 && results[0].license) {
            lines.push("");
            lines.push("首个结果所属图标集授权: " + results[0].license + "（" + results[0].collection_name + "）。商用请自行核对该图标集许可。");
        }
        return lines.join("\n");
    }
    // 下载单个图标：始终产出 SVG；show_png=true 时额外产出本地 PNG
    async function downloadOne(iconId, options) {
        const id = normalizeIconId(iconId);
        const url = buildIconUrl(id, options);
        const dir = ensureDir();
        const baseName = sanitizeFileName(options.file_name || id.replace(/[:\/]/g, "_"), "icon");
        const svgPath = dir + baseName + ".svg";
        const pngPath = dir + baseName + ".png";

        // 始终下载 SVG
        const downloadResult = await Tools.Files.download(url, svgPath);
        if (!downloadResult || !downloadResult.successful) {
            const detail = downloadResult && downloadResult.details ? downloadResult.details : "unknown";
            throw new Error("下载图标失败: " + id + " -> " + detail);
        }

        // 仅在需要人工查看时额外产出 PNG
        let pngOut = null;
        if (options.show_png) {
            pngOut = await svgToLocalPng(svgPath, pngPath, PNG_SIZE, options.fill_color);
        }

        const svgUri = "file://" + svgPath;
        const pngUri = pngOut ? "file://" + pngOut : null;
        return {
            icon: id,
            show_png: options.show_png,
            fill_color: options.fill_color || null,
            svg_path: svgPath,
            svg_uri: svgUri,
            png_path: pngOut,
            png_uri: pngUri,
            source_url: url
        };
    }
    function buildOptions(params, overrides) {
        const rawColor = (overrides && overrides.color !== undefined ? overrides.color : params.color);
        const color = String(rawColor || "").trim() || null;
        const rawFill = (overrides && overrides.fill_color !== undefined ? overrides.fill_color : params.fill_color);
        // fill_color 优先级：显式 fill_color > color > 默认实色（仅生成 PNG 时使用）
        const fillColor = (String(rawFill || "").trim()) || color || DEFAULT_FILL_COLOR;
        return {
            height: normalizeHeight(overrides && overrides.height !== undefined ? overrides.height : (params.height)),
            color: color,
            fill_color: fillColor,
            show_png: normalizeBool(overrides && overrides.show_png !== undefined ? overrides.show_png : params.show_png, false),
            file_name: overrides && overrides.file_name ? overrides.file_name : null
        };
    }
    async function getIcon(params) {
        const options = buildOptions(params || {}, null);
        const result = await downloadOne(params && params.icon, options);
        const lines = [];
        lines.push("图标已下载到本地（" + result.icon + "）：");
        lines.push("  SVG: " + result.svg_path);
        if (result.png_path) {
            lines.push("  PNG(本地, " + PNG_SIZE + "×" + PNG_SIZE + ", 填充色 " + (result.fill_color || "-") + "): " + result.png_path);
        }
        else {
            lines.push("  未生成 PNG（show_png=false）。如需人工查看可传 show_png=true。");
        }
        return {
            icon: result.icon,
            show_png: result.show_png,
            fill_color: result.fill_color,
            svg_path: result.svg_path,
            svg_uri: result.svg_uri,
            png_path: result.png_path,
            png_uri: result.png_uri,
            source_url: result.source_url,
            hint: lines.join("\n")
        };
    }
    async function downloadIcons(params) {
        const ids = parseIconList(params && params.icons);
        if (ids.length === 0)
            throw new Error("参数 icons 不能为空。");
        const options = buildOptions(params || {}, null);
        const files = [];
        const failures = [];
        for (let i = 0; i < ids.length; i += 1) {
            try {
                const item = await downloadOne(ids[i], {
                    height: options.height,
                    color: options.color,
                    fill_color: options.fill_color,
                    show_png: options.show_png,
                    file_name: null
                });
                files.push(item);
            }
            catch (e) {
                failures.push({ icon: ids[i], error: getErrorMessage(e) });
            }
        }
        const hintLines = [];
        hintLines.push("共请求 " + ids.length + " 个图标，成功 " + files.length + " 个，失败 " + failures.length + " 个。");
        hintLines.push("文件已保存到 " + ensureDir());
        hintLines.push(options.show_png
            ? ("已额外生成 PNG 供人工查看，PNG 填充色 " + (options.fill_color || "-") + "。")
            : "仅生成 SVG（show_png=false）。如需人工查看可传 show_png=true。");
        if (failures.length > 0) {
            hintLines.push("");
            hintLines.push("失败项：");
            hintLines.push(failures.map(function (f) { return f.icon + " (" + f.error + ")"; }).join("; "));
        }
        return {
            requested: ids.length,
            success_count: files.length,
            failed_count: failures.length,
            show_png: options.show_png,
            fill_color: options.fill_color,
            files: files,
            failures: failures,
            hint: hintLines.join("\n")
        };
    }
    async function iconSets(params) {
        const query = String(params && params.query ? params.query : "").trim();
        const url = API_BASE + "/collections" + (query ? "?pattern=" + encodePathSegment(query) : "");
        const response = await doGet(url);
        if (!response.isSuccessful())
            throw new Error("获取 Iconify 图标集失败: HTTP " + response.statusCode + " - " + response.content);
        let parsed;
        try {
            parsed = JSON.parse(response.content);
        }
        catch (e) {
            throw new Error("解析图标集列表失败: " + getErrorMessage(e));
        }
        const sets = [];
        Object.keys(parsed).forEach(function (prefix) {
            const meta = isRecord(parsed[prefix]) ? parsed[prefix] : {};
            sets.push({
                prefix: prefix,
                name: meta.name ? String(meta.name) : prefix,
                total: meta.total !== undefined ? meta.total : null,
                author: meta.author ? meta.author : null,
                license: meta.license && meta.license.spdx ? String(meta.license.spdx) : (meta.license ? String(meta.license) : null),
                category: meta.category ? String(meta.category) : null,
                palette: meta.palette !== undefined ? meta.palette : null
            });
        });
        sets.sort(function (a, b) { return a.prefix.localeCompare(b.prefix); });
        const hintLines = [];
        hintLines.push("Iconify 可用图标集 " + sets.length + " 个" + (query ? "（过滤: " + query + "）" : "") + "。");
        if (sets.length > 0) {
            hintLines.push("常用 : " + sets.slice(0, 20).map(function (s) { return s.prefix; }).join(", "));
        }
        return {
            query: query || null,
            count: sets.length,
            sets: sets,
            hint: hintLines.join("\n")
        };
    }
    function wrap(fn, successMessage) {
        return async function (params) {
            try {
                const data = await fn(params || {});
                complete({ success: true, message: successMessage, data: data });
            }
            catch (error) {
                console.error("iconify_icons 执行失败:", error);
                complete({
                    success: false,
                    message: getErrorMessage(error),
                    error_stack: error && error.stack ? error.stack : undefined
                });
            }
        };
    }
    return {
        search_icons: wrap(searchIcons, "Iconify 搜索完成。"),
        get_icon: wrap(getIcon, "图标下载完成。"),
        download_icons: wrap(downloadIcons, "批量图标下载完成。"),
        icon_sets: wrap(iconSets, "Iconify 图标集查询完成。")
    };
})();

exports.search_icons = iconifyIcons.search_icons;
exports.get_icon = iconifyIcons.get_icon;
exports.download_icons = iconifyIcons.download_icons;
exports.icon_sets = iconifyIcons.icon_sets;
