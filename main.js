/* Importando o objeto aluno construido a partir de uma função construtora */

let AlunosRequire = require("./moduleAlunos/aluno")

/* Importando o array de um estudante */

let Estudantes = require("./modulesEstudantes/estudantes")


/* Atribuindo valores ao objeto AlunosRequire */
let Gabriel = new AlunosRequire("Gabriel", 3,[7,7,8])
let Gustavo = new AlunosRequire("Gustavo", 2,[7,7,0])
let Pedro = new AlunosRequire("Pedro", 2,[7,7,10])


/* Passo 3, 4, 5 e 6 do Exercicio */

let curso = {
    nomeCurso: "Ctd",
    notaAprovacao: 7,
    faltasMaximas: 3,
    listaEstudantes: [],
    adicionarAluno: function(aluno){
        this.listaEstudantes.push(aluno)
    },
    avaliacao: function(aluno){
        if(aluno.calcularMedia()>=curso.notaAprovacao && aluno.quantidadedefaltas<curso.faltasMaximas){
            return true            
        }else if(aluno.quantidadedefaltas == curso.faltasMaximas && aluno.calcularMedia() > curso.notaAprovacao*1.1)
        return true
        else{
        return false
        }
         
    },
    aprovados_e_Reprovados: function(){

        let passou = []
        let naoPassou = []

        for (let i = 0; i < this.listaEstudantes.length; i++) {
            if(this.avaliacao(curso.listaEstudantes[i]) == true){
                passou.push( `${curso.listaEstudantes[i].nome} Aprovado `)
            }else{
                naoPassou.push(`${curso.listaEstudantes[i].nome} Reprovado `)
            }
        }
        console.log(passou)
        console.log(naoPassou)
        
    },
    retirarEstudantes: function(){
        estudantesAntigos = []
        
        for (let i = curso.listaEstudantes.length; i > 0 ; i--) {
            estudantesAntigos.push(this.listaEstudantes.shift([i])) 
        }
    },
    adicionarEstudantes: function(lista) {
        for (let i = 0; i < lista.length; i++) {
            let aluno = new AlunosRequire(lista[i].nome, lista[i].faltas, lista[i].notas);
            this.listaEstudantes.push(aluno);
        }
    }
}

/* Adicionando alunos na lista Estudantes */
curso.adicionarAluno(Gabriel)
curso.adicionarAluno(Gustavo)
curso.adicionarAluno(Pedro)

/* Retirando os alunos de lista estudantes e armazenando na variavel estudantesAntigos */
curso.retirarEstudantes()

/* Passo 7-Adicionando novo array a lista de estudantes diretamente do arquivo estudantes.js*/

curso.adicionarEstudantes(Estudantes)

/* Verificando alunos novos aprovados e reprovados de acordo com o array de lista estudantes */
curso.aprovados_e_Reprovados()