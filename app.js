const express = require("express")
const app = express();
const port = 3030;
const path = require("path");
const mainRouter = require("./routes/main")





app.use(express.static("public"))
app.use("/", mainRouter)






app.listen(port, () => console.log('Servidor funcionando'))