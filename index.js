require('dotenv').config(); // <-- dependência
const discord = require('discord.js'); // <-- carrega o discord.js
const client = new discord.Client(); // <-- cria uma variável que direciona os comandos para o client (bot)
client.login('COLOQUE O TOKEN AQUI'); // <-- entra no token do bot

var avisos = [ // <-- lista todos os possíveis avisos. você pode inserir novos seguindo
              //      a mesma estrutura, utilizando aspas e vírgulas

    ":rotating_light: Não esqueça de bater o ponto na sua sala e no Discord do Brasília RP.",
    ":warning: Sempre justifique sua ausência em seu canal.",
    ":rotating_light: Não esqueça da meta diária de kits: 50 para motor e 50 para funilaria!",
    ":warning: Não saia pela cidade com ponto batido. Sujeito a advertência interna.",
    ":warning: Não faça kits para mais dias. Faça somente a quantidade diária.",
    ":rotating_light: Não trabalhe sem farda. Sujeito a advertência interna.",
    ":rotating_light: Use o guincho somente em casos de pneu furado."

]

client.once('ready', () => {
    console.log('_ _ _  _  _  _              ___  ____ ___  ___   ')
    console.log('| | | |<_>| || | ___  _|_|_ |_  |<__ /| _ | __> ')
    console.log('| | | || || || |/ ._> _|_|_  / /  <_ \| . \ | . \ ') // <-- informa ao usuário de maneira gráfica
    console.log('|__/_/ |_||_||_|\___.   | |  /_/ <___ /___//___/ ') //      que o bot foi iniciado sem erros =)
    console.log('-------------------------------------------------')
    console.log('')
    console.log('BOT iniciado. =D')
    
    // looping. envia mensagens a cada X segundos.
	setInterval(() => {
	client.channels.fetch('COLOQUE O ID DO CANAL AQUI') // <-- espeficia onde os avisos serão enviados. coloque o id do canal aqui!
    .then(channel => {
        var randomMessages = avisos[~~(Math.random() * avisos.length)]; // <-- aleatoriza os avisos
        channel.send(randomMessages); // <-- envia o aviso depois de escolhido de maneira aleatória
});}, 3600000)}) // <-- tempo em milisegundos. sinta-se livre para modificar
//    ^ está configurado para enviar o aviso a cada 1 hora
//      use somente números naturais. números em notação científica ou com vírgula *não* são aceitos!