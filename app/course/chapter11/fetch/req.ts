import 'server-only'
 
export async function getData() {
  const res = await fetch('https://external-service.com/data', {
    // @ts-ignore
    headers: {
      authorization: process.env.API_KEY,
    },
  })
 
  return res.json()
}
