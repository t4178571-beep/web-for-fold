import { contextBridge, ipcRenderer } from 'electron'

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', {
      ipcRenderer: {
        send: (channel, data) => ipcRenderer.send(channel, data),
        on: (channel, func) => ipcRenderer.on(channel, (event, ...args) => func(...args)),
        once: (channel, func) => ipcRenderer.once(channel, (event, ...args) => func(...args)),
      },
      db: {
        // We will map all DB calls here later
      }
    })
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = {
    ipcRenderer: {
      send: (channel, data) => ipcRenderer.send(channel, data),
      on: (channel, func) => ipcRenderer.on(channel, (event, ...args) => func(...args)),
      once: (channel, func) => ipcRenderer.once(channel, (event, ...args) => func(...args)),
    },
    db: {
      // We will map all DB calls here later
    }
  }
}
