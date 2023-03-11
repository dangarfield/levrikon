import { electronApi } from 'src/api/electron-api'

// import { existsSync } from 'fs'

const doesProjectExistForPath = (filePath) => {
  const stat = electronApi.existsSync(`${String(filePath)}/project.json`)
  console.log('stat', stat)
  return stat
}

export { doesProjectExistForPath }
