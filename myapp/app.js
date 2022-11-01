const express = require('express')
const app = express()
const axios = require('axios')
const port = 3030
fs = require('fs');

app.get('/', async (req,res) => {
    try {
      let tmp = await axios.get('https://en.wikipedia.org/wiki/Node.js');
      const data = JSON.stringify(tmp.data);
      res.send(typeof data);
      fs.writeFile('test.txt',data,function (err) {
        if (err) return console.log(err)
        })
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})