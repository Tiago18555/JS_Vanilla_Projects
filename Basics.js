function first() {
    document.Write("Tiago Antonio");
}
function second() {
    alert("Olá mundo!");
}
function third() {
    var a = 10, b = 4.50, c = "Água", d = true, e;
    document.write("a é " + typeof a + "<br>");
    document.write("b é " + typeof b + "<br>");
    document.write("c é " + typeof c + "<br>");
    document.write("d é " + typeof d + "<br>");
    document.write("e é " + typeof e + "<br>");
}
//exibição de mensagens
write();//Exibição de mensagem em janela
confirm();
alert();
document.write();//Exibição de mensagem no documento
var a, b, c, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z;
//Conversões e declaração de constante
a = parseInt(a);
b = parseFloat(b);
c = String(c);
d = Number(d);
e = e.toString();
const g = 50;
typeof h;
i.toFixed(2);// MathRound();
j.toPrecision(5);//Qtd de casas exibidas (total)
var k = new k(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //array instanciada (funciona mas é desnecessário)
var l = [];//array vazia
var m = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];//array populada
Array.isArray(n);//Checar se é uma array
for (i = 0; i < 4; i++) {
    document.write(Cidades[i] + "<br>");
}
var n = m.length; //ver qtd de indices no array
m.push("11"); // adicionar um elemento no array
m.pop(); // remover o ultimo elemento no array
m.join(", ") // juntar todos os elemetos de uma array em uma só string, nos argumentos colocamos o caractere separador
m.shift(); //remove o primeiro indice de uma array e puxa o restante dos elementos
delete m[2]; // remove uma posição especifica de uma array, o elemento fica undefined depois
m.splice(); // substitui ou adiciona um elemento na posição especificada, argumentos: (posição, numero de elementos removidos, elementos novos)
newArray = array1.concat(array2, array3, arrayN); //Concatenar arrays
n.sort(); //Ordenar arrays (alfabética)
o.reverse(); //Inverte a ordem da array
function nomeFuncao(parametros) {
}
isNaN(p); //Verifica se é um numero (return bool)

//Métodos do objeto Math
Math.PI // ...
Math.SQRT //raiz
Math.abs(x); // valor absoluto de X
Math.sen(x); //seno
Math.cos(x); //cosseno
Math.tan(x); //tangente
Math.ceil(x); //arredonda pra cima
Math.floor(x); //arredonda pra baixo
Math.round(x); //arredonda para o numero mais prox
Math.pow(x,y); //potência
Math.min(x1,x2,x3); //compara os numeros e retorna o menor
Math.max(x1,x2,x3); //compara os numeros e retorna o maior
Math.random(); //gera um número aleatório

//Métodos do objeto date
var hoje= new Date(); //Só invocando construtor= data e hora atuais
var data= new Date(milissegundos); //Valor da data em milissegundos contando a partir de 01/01/1970 00:00:00
var data= new Date(ano, mês, dia);
var data= new Date("stringData");
alert(hoje);

Date.setDate();
Date.setFullYear();
Date.setHours();
Date.setMilliseconds();
Date.setMinutes();
Date.setMonth();
Date.setSeconds();
Date.setTime();
// or get =D
var string = "teste";
var testeElem = document.getElementById("ID do elemento HTML");