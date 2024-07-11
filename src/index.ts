import 'colors'
import { client } from './client.js'
import { jlog } from './utils.js'

async function main() {
  console.log('Hello World!')
  await client.get_organizations().then((response) => {
    jlog(response.data)
  })
}

await main()
