const { app, BrowserWindow, ipcMain } = require('electron'); // <-- THE FIX IS HERE
const path = require('path');

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1260,
    height: 720,
    minWidth: 1260,
    minHeight: 720,
    show: false,
    icon: path.join(__dirname, 'assets', 'icon.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  ipcMain.on('force-repaint', () => {
    if (win) {
        win.webContents.invalidate();
    }
  });
  
    ipcMain.on('refocus-window', () => {
    if (win) {
      win.blur();  // Take focus away
      win.focus(); // Immediately give it back
    }
  });

  win.loadFile(path.join(__dirname, 'index.html'));
  win.setMenu(null); 

  win.once('ready-to-show', () => {
    win.maximize();
    win.show();
  });
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});