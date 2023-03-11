/**
 * This file is used specifically for security reasons.
 * Here you can access Nodejs stuff and inject functionality into
 * the renderer thread (accessible there through the "window" object)
 *
 * WARNING!
 * If you import anything from node_modules, then make sure that the package is specified
 * in package.json > dependencies and NOT in devDependencies
 *
 * Example (injects window.myAPI.doAThing() into renderer thread):
 *
 *   import { contextBridge } from 'electron'
 *
 *   contextBridge.exposeInMainWorld('myAPI', {
 *     doAThing: () => {}
 *   })
 */
import { contextBridge } from 'electron'
// highlight-next-line
import { dialog } from '@electron/remote'

// import path from 'path'
import fs from 'fs'

contextBridge.exposeInMainWorld('electronApi', {
  openFileDialog: async (title, folder, filters) => {
    const response = await dialog.showOpenDialog({ title, filters, properties: ['openFile', 'multiSelections'] })
    return response.filePaths
  },
  openFolderDialog: async (title, folder, filters) => {
    const response = await dialog.showOpenDialog({ title, filters, properties: ['openDirectory'] })
    return response.filePaths
  },
  existsSync: (filePath) => {
    const a = fs.existsSync(filePath)
    console.log('existsSync', filePath, a)
    return a
  },
  readFileSync: (filePath) => {
    return fs.readFileSync(filePath)
  },
  readdirSync: (filePath) => {
    return fs.readdirSync(filePath)
  },
  writeFileSync: (filePath, data, options) => {
    return fs.writeFileSync(filePath, data, options)
  },
  unlinkSync: (filePath) => {
    return fs.unlinkSync(filePath)
  }
})
