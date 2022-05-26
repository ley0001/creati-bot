const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTc5NDc2OTQ1NjIyNDE3NTAw.G_btyL.Q_JmAMIho3LQgAR2F0vcg-xTvHLkU5MiHZNT9M"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hello"){
        message.reply("Hello good person!")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "Hello!"){
        message.reply("Hellooo!")
    }
})

client.login(process.env.TOKEN)