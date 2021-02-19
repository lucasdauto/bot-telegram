const env = require('../.env')
const Telegraf = require('telegraf')

const bot =  new Telegraf(env.token)

bot.start(ctx => {
    const from = ctx.update.message.from
    const usuario = env.idUser;

    if(from.id == usuario){
        ctx.reply(`Ao seu dispor, ${from.first_name} meu mestre!`)
    }
    else {
        ctx.reply('Sinto muito, mas só falo com o meu mestre')
    }
})

bot.startPolling()