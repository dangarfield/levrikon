import { electronApi } from 'src/api/electron-api'

// import { existsSync } from 'fs'

const doesProjectExistForPath = (filePath) => {
  const stat = electronApi.existsSync(`${String(filePath)}/project.json`)
  console.log('stat', stat)
  return stat
}

const createProject = async (filePath, projectName) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data = { projectName }
  await electronApi.writeFileSync(`${String(filePath)}/project.json`, JSON.stringify(data), {})
}

export { doesProjectExistForPath, createProject }
