const Discord = required("discord.js")
const client = new Discord.client()

client.on("online", () => {
    console.log(`logging in a ${client.user.tag} !`)
})

client.on("message", msg => {
    if (msg.contest === "LinkStart"){
        msg.reply(`${client.user.tag} is online`)
    }
})

client.login(process.env.TOKEN)