/* Passo 1 modulo com função construtora chamado aluno */

let Alunos = function aluno(nome, quantidadedefaltas, notas){
    this.nome = nome;
    this.quantidadedefaltas = quantidadedefaltas;
    this.notas = notas;
    this.calcularMedia = function(){

        let mediaNotas = 0

                let somaNotas = this.notas.reduce(function(acumulador, notas){
                return acumulador + notas},0)
                mediaNotas = somaNotas / this.notas.length
                return mediaNotas
    }
    this.faltas = function(){
        faltas = 0
        faltas++
    }
} 

module.exports = Alunos