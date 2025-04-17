import path, { join } from "node:path";
import { fileURLToPath } from "node:url";
import { app, BrowserWindow, screen } from "electron";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "false";
function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const windowWidth = Math.floor(width * 0.9);
  const windowHeight = Math.floor(height * 0.9);
  const win = new BrowserWindow({
    titleBarStyle: "hiddenInset",
    titleBarOverlay: {
      color: "rgba(0, 0, 0, 0)",
      height: 42,
      symbolColor: "white"
    },
    // 窗口图标
    icon: join(__dirname, "resource/dataVe.ico"),
    width: windowWidth,
    height: windowHeight,
    webPreferences: {
      // contextIsolation: false,
      // nodeIntegration: true,
      // preload: path.join(__dirname, 'preload.js')
    }
  });
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
    win.webContents.openDevTools();
  } else {
    win.loadFile(join(__dirname, "dist/index.html"));
  }
}
app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0)
      createWindow();
  });
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin")
    app.quit();
});
