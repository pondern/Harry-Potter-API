import db from "../db/connection.js"
import House from "../models/House.js"
import Chracter from "../models/Chracter.js"
import houses from "./houses.json" assert { type: "json"}
import characters from "./characters.json" assert {type: "json"}
import chalk from "chalk"

const insertData = async () => {
// reset database
await db.dropDatabase()

//Insert Data
await Chracter.create(characters)
await House.create(houses)

console.log(chalk.magenta("Characters and House created, my dude"))

//close DB Connection
await db.close();
}

insertData()