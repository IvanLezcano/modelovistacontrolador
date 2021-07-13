const express = require("express")
const app = express();
const port = 3030;
const path = require("path");
const mainRouter = require("./routes/main")
const aboutRouter = require("./routes/about")






app.use(express.static("public"))
app.use("/", mainRouter)
app.use("/about", aboutRouter)







app.listen(port, () => console.log('Servidor funcionando'))