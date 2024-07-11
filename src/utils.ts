import { promises as fs } from 'fs'

export async function jwrite(path: string, data: any) {
    const json = JSON.stringify(data, null, 2)
    return await fs.writeFile(path, json)
}

export async function jlog(data: any) {
    const json = JSON.stringify(data, null, 2)
    console.log(json)
}
