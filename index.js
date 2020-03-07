const request = require('request-promise')
const cheerio = require('cheerio')

const URL = 'https://loja.charpey.com.br/bata-flame-mc-branco-21392/p'

async function acesso(){
    const response = await request(URL)
    let $ = cheerio.load(response)
    console.log($('.price').toArray()[2]['children'][0].data.replace(',','.').replace('R$',''))
}
acesso()