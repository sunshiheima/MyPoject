const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  let mainWin = new BrowserWindow({
    height: 600,
    width: 700,
    webPreferences: {
      nodeIntegration: true,
      devTools: true,
      // 官网似乎说是默认false，但是这里必须设置contextIsolation
      contextIsolation: false
    }
  })

  mainWin.loadFile('index.html');
  mainWin.webContents.openDevTools()

  mainWin.on('closed', () => {
    mainWin = null;
  })
})