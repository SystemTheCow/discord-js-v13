const prefix = "!"
module.exports = {
    name: 'messageCreate',
    execute(message, client, MessageEmbed, Util){
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        const args = message.content.slice(prefix.length).split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName)
        if(!command) return
        try{
            command.execute(message, args, MessageEmbed, Util, client)
        }catch(error){
            console.log(error)
            message.channel.send("Ocurrió un error al ejecutar ese comando")
        }
    },
};