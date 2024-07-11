// @ts-ignore
import { Client, schemas, types } from '@boundlessdigital/meraki-sdk'

export const API_KEY = process.env.MERAKI_DASHBOARD_API as string

export const client: Client = new Client({
    api_key: API_KEY,
    maximum_retries: 30

    // response_mode: 'data'
    // debug: {
    //   request: {
    //     body: true
    //   }
    //   response: {
    //     headers: true,
    //     data: true
    // }
    // }
})

export { schemas, types, Client }
