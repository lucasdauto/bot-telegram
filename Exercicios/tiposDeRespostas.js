const env = require('../.env')
const Telegraf = require('telegraf')

const bot = new Telegraf(env.token)

bot.start(async ctx =>{
    await ctx.reply(`Seja bem vindo(a), ${ctx.update.message.from.first_name}! 😝`)
    
    // await ctx.replyWithHTML(`Destacando mensagem <b>HTML</b>
    // <i>da várias</i> <code>formas</code> <pre>possíveis</pre>
    // <a href ="http://www.google.com.br">Google</a>`)

    // await ctx.replyWithMarkdown('Destacando mensagem *Markdown*'
    // +'_de várias_ `formas` ```possíveis```'
    // +'[Google](http://www.google.com.br)')

    // await ctx.replyWithPhoto({source: `${__dirname}/cat.jpg`})

    // await ctx.replyWithPhoto('https://baconmockup.com/300/200',{ caption: 'Olha o bacon 🥰🥩' })

    // await ctx.replyWithPhoto({ url: 'https://baconmockup.com/300/200'}, {caption: 'Olha outro Bacon 🥰🥩' })

    // await ctx.replyWithLocation(-23.5763209,-46.644361)

    await ctx.replyWithVideo('http://files.cod3r.com.br/curso-bot/cod3r-end.m4v')
})

bot.startPolling()