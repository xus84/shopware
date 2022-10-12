import express from "express"
import "./mongoose.js"
import { PORT} from './config.js'


const app = express()

app.listen(PORT)

console.log('Server on port', PORT)