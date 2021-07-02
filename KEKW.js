//Conversões de tipos primitivos
Number();
Number.parseInt();
Number.parseFloat();
String();

//Template string
`Textos variados com alguma ${variável} no meio`

//String functions

variável.lengh
variável.toUpperCase()
variável.toLowerCase()

//R$
variável.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
//US$
variável.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})

//Árvore DOM window>document>html>body>div>p (example)

document.getElementsByTagName('h1'); //Seleciona todos os elementos do mesmo tipo
document.getElementsByTagName('h1')[5]; //Seleciona o quinto elemento do tipo especificado
document.write(document.getElementsByTagName('p').innerText); //Texto na integra
document.write(document.getElementsByTagName('p').innerHTML); //Texto formatado (com as tags HTML)
document.getElementById('');
document.getElementsByName('');
document.getElementsByClassName('');
document.querySelector('div.classe-da-div'); //Por seletor (semelhante ao CSS)
document.querySelector('div#id-da-div');
document.getElementsByTagName('button')[0].addEventListener('', functionName); //Ativa o event listener
document.getElementsByTagName('button')[0].removeEventListener('', functionName); //Desativa o event listener

//Array & Objects

arrayExample = [];
arrayExample.indexOf(5); //Verifica se existe algum VALOR 5 na array



/* WHATS NEXT?
functions > arrow functions, recursivas, callbacks, funções anônimas, IIFE
objetos
modularização
regex
JSON
AJAX
NodeJS
*/

//MAIS ALGUNS COMANDOS DO CFB CONCURSOS

//Bloco TRYCATCH

try{
	if (num < 0){
		throw new Error('Número não deve ser negativo') //Definindo uma nova condição para erro
	}
}
catch(err){
	err.message //Exibindo erro (padrão)
}

var call;
setTimeout(função, 1000) //ativa uma função após um intervalo definido
call = setInterval(função, 1000) //ativa uma função em loop com um intervalo definido
clearInterval(call) //Interrompe o loop de setInterval() (break;)

//setTimeout FOR GAMES (brownser FPS sync)

requestAnimationFrame(função);
cancelAnimationFrame(função);

document.getElementsByTagName('button')[0].setAttribute("class", "btn") // (atributo, valor)
document.getElementsByTagName('button')[0].removeAttribute("class") // (atributo)
document.getElementsByTagName('button')[0].hasAttribute("class") // (retorna boolean)

// REGEX RULES //

let text = document.getElementsByTagName('body').innerHTML;
let results = text.match('keyword');

//	// -> utiliza dentro cos caracteres na regra, para poder adicionar parâmetros depois ex:
text.match(/[a]/i) // -> primeira ocorrência de 'a' ignorando case sensitive
text.match(/[a]/g) // -> todas as ocorrências de 'a' numa array
text.match(/[a]/ig) // -> todas as ocorrências de 'a' numa array ignorando case sensitive
text.match(/[a]/ig).lengh // -> número de ocorrências de 'a'
text.match(/[abcd]/ig) // -> retorna todas as ocorrências de 'a', 'b', 'c' e 'd' (primeira opção)
text.match(/[a|b|c|d]/ig) // -> retorna todas as ocorrências de 'a', 'b', 'c' e 'd' (segunda opção)
text.match(/[^ab]/ig) // -> retorna todas as ocorrências de qualquer caractere que não seja 'a' ou 'b'
text.match(/[a-f]/) // -> retorna todas as ocorrências de qualquer caractere entre 'a' e 'f'
text.match(/[^a-f]/) // -> retorna todas as ocorrências de qualquer caractere que não esteja entre 'a' e 'f'

const timingSrt = /\d{4}\n\r\d{2}:\d{2}:\d{2},\d{3} --> \d{2}:\d{2}:\d{2},\d{3}\n\r/
//const cs = /^[\w_\-.]+@[\w_\-.]+\.[\w_\-.]+$/

text.split(timingSrt);
// METACARACTERES 
/*

\w somente letras e numerais
\W somente não-letras e numerais
\d somente numerais
\D somente não-numerais
\s somente espaços
\S tudo menos espaços
\b inicia ou termina com letra ou número (se iniciar E terminar conta como 2)
\B tudo que não inicia com letra ou número
\O caracteres nulos
\n quebra de linha
\r return (enter) <-
\t tab
\v tabulação vertical
s+ palavras com uma ou mais letras 's'

*/

//exemplo:

text.match(/\D/ig)

////////////////////////////////////////////////////

text.search(/[a]/i) // -> retorna a posição do array (cadeia de caracteres completa) da primeira ocorrência
text.replace(/[a]/ig, 'b') // -> substitui todas as ocorrências de a (sem case sensitive) por 'b'
text.charAt(10) // -> retorna o caractere na décima posição do array
text.charCodeAt(10) // -> retorna o char code do caractere na décima posição do array
text.concat("adiciona essa desgraça");
text.concat(text)
text.localeCompare(text); // -> indica se 2 strings são iguais (retorna 0 se são iguais)
text.slice(5,15) // -> retorna uma porção de uma cadeia de caracteres entre os indices indicados (do 5 ao 15)
text.substr(5,4) // -> semelhante ao slice mas o segundo parâmetro é o tamanho do corte e não a posição do array
text.split('.') // -> transforma uma variável string em uma array dividindo a cada caractere indicado no primeiro parâmetro

toString(); // -> parâmetro indica a base ex
toString(16); //Hexadecimal

/////////////////////////////////////////////////////

//OBJECT WINDOW

window.open() // -> abrir nova janela param1: url ou arquivo, param2: target (_blank, _self ou frame), param3: especificações (tamanho, posição)
janelaName.close() // -> fecha janela
