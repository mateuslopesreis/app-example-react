/*Atribuição via desestruturação */

let pessoa = {
    nome: 'Mateus Lopes',
    email: 'mateus.reis@gmail.com'
}

/* let nome = pessoa.nome
let email = pessoa.email */


let {nome,email} = pessoa
console.log(nome,email)

let nomes = ['Caio','João']

let [pessoa1,pessoa2] = nome
