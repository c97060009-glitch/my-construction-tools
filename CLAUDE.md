# my-construction-tools — 工程／估驗工具總專案

## 對話開始時請先讀

進度與最近更動都在 Obsidian：
`2nd Brain/my-construction-tools/工作筆記.md`

新對話開始時，請先讀工作筆記了解上次做到哪。

---

## 工作模式

- **加新工具**：對 Claude 說「我想做一個 XXX 工具」→ Claude 會建 `tools/<工具名>/` 子資料夾、引導跟著影片做
- **結束工作**：對 Claude 說「**收工**」→ 自動 commit + push + 更新 Obsidian 工作筆記
- **接續工作**：對 Claude 說「**開工**」或「讀工作筆記、告訴我上次做到哪」

---

## 工作桌 + 三個家

- 📋 **GDrive 工作桌**：`G:\我的雲端硬碟\my-construction-tools\`（自動跨電腦同步）
- 🐙 **GitHub repo**：`c97060009-glitch/my-construction-tools`（公開，網頁的家）
- 📘 **Obsidian 駕駛艙**：`2nd Brain/my-construction-tools/工作筆記.md`（想法的家）
- 🔥 **Firebase 專案**：`my-construction-tools`（資料的家）

---

## 工具清單

（之後加新工具時會自動更新）
- （尚無）

---

## 工作注意事項

- 學生／業主資料一律去識別化（只用代號／編號）
- commit 訊息要寫清楚做了什麼 + 為什麼
- 收工前說「收工」讓 Claude 同步三方
- **絕不**把 API key、token、密碼放進可被 commit 的檔案
- Firebase 規則檔放 repo 根目錄（`firestore.rules`、`firebase.json`、`.firebaserc`）

---

## 安全與隱私

- 🔥 `.claude/` 永遠不要 commit（已加進 `.gitignore`）—— 會洩漏 token
- API Key 不要寫死在 HTML（Firebase Config 例外，那設計可公開）
- 每次新增 Firestore 集合都要寫 Security Rules（白名單）
- **不要在終端機直接打 API key 當作指令**（會留在 PowerShell history）

---

## 相關懶人包

- `02-連接-GitHub.md`
- `03-建立第二大腦-Obsidian.md`
- `04.5-連接-Firebase-資料庫.md`
- `07-初始化班級工具工作模式.md`（這份對應的懶人包）
- `08-安裝gpt-image-2生圖.md`
