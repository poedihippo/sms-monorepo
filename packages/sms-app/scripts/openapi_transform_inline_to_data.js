const fs = require("fs/promises")

;(async () => {
  const fileString = await fs.readFile("./src/api/openapi/api.ts", {
    encoding: "utf-8",
  })

  const regex = /inlineObject\d*/g

  const newString = fileString.replace(regex, (a, b) => {
    return `data`
  })

  await fs.writeFile("./src/api/openapi/api.ts", newString, {
    encoding: "utf-8",
  })
})()
