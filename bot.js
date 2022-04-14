const Discord = require('discord.js');
const client = new Discord.Client();

client.commands = new Discord.Collection();
client.once('ready', () => {
    console.log('Bot is ready to go!')

})
verify_v5r8etk2b3njbppltl2zr = {name: 'verify', async execute(message, args) {
    
    const emoji = await client.emojis.cache.find(emoji => emoji.name === `thumbs_up:`)
    message.react(emoji)
    
}}
client.commands.set(verify_v5r8etk2b3njbppltl2zr.name, verify_v5r8etk2b3njbppltl2zr)

client.on('message', message => {
    if (message.author.bot) return;

    const prefix = '!'

    if (message.content.startsWith(`!`)) {
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift();
        switch(command) { 
            case `verify`:
                client.commands.get(`verify`).execute(message, args);
                break;
            default:
                message.channel.send('Invalid command')
                break;
        }
    } else {
        const checkContains = (message, term) => message.content.includes(term)
        if (checkContains(message, client.commands.first().name)) {
            client.commands.get(client.commands.first().name)
        }

    }
})
const login = async (token) => {
    await client.login(token)
    return
}
login('OTY0MDgyNjMyODM5MjY2MzE0.Ylfd6w.hpVbmPgUXRyVCfDbFm2B95gSVEQ')