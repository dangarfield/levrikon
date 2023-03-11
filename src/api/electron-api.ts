export interface ElectronFileFilter {
  name: string;
  extensions: string[];
}

export interface ElectronApi {

  openFileDialog: (
    title: string,
    folder: string,
    filters: ElectronFileFilter
  ) => Promise<string[]>

  openFolderDialog: (
    title: string,
    folder: string,
    filters: ElectronFileFilter
  ) => Promise<string[]>

  existsSync: (
    filePath: string
    // eslint-disable-next-line
  ) => Promise<any[]>

  readFileSync: (
    filePath: string
    // eslint-disable-next-line
  ) => Promise<any[]>

  readdirSync: (
    filePath: string
    // eslint-disable-next-line
  ) => Promise<any[]>

  writeFileSync: (
    filePath: string,
    // eslint-disable-next-line
    data: any,
    // eslint-disable-next-line
    options: any
    // eslint-disable-next-line
  ) => Promise<any[]>

  unlinkSync: (
    filePath: string
    // eslint-disable-next-line
  ) => Promise<any[]>

}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const electronApi: ElectronApi = (window as { electronApi: ElectronApi })
  .electronApi;
