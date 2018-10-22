import r2 from 'r2'

export const upload = files => {
  return Promise.all(Array.from(files).map(file => uploadIndividual(file)))
}

const uploadIndividual = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.addEventListener('load', async () => {
      const result = reader.result
      const base64 = result.replace(/data:image\/(png|jpeg);base64,/, '')
      try {
        const req = await r2.post('https://api.imgur.com/3/image', {
          json: {
            image: base64,
            name: file.name,
            type: 'base64'
          },
          headers: {
            'Authorization': `Client-ID ${process.env.VUE_APP_API_KEY}`,
            'content-type': 'multipart/form-data'
          }
        })
        const resp = await req.response
        const json = resp.json()
        resolve(json)
      } catch (e) {
        reject(e)
      }
    }, false)
  })
}
