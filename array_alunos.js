// const alunos = ['Pedro', 'Marcela', 'Otavio', 'Carlos', 'Julia', 'Maria', 'Roberto', 'Ana', 'Junior', 'Augusto'];
// const notasAlunos = [8, 5, 7, 7, 5, 9, 7, 2, 9, 8];

// console.log(alunos);
// console.log(notasAlunos)

// const alunosComSuasNotas = [...alunos, ...notasAlunos];

// console.log(alunosComSuasNotas)





// const notasAlunos = {
//     Pedro: 8,
//     Marcela: 5,
//     Otavio: 7,
//     Carlos: 7,
//     Julia: 5,
//     Maria: 9,
//     Roberto: 7,
//     Ana: 2,
//     Junior: 9,
//     Augusto: 8,
// }

// console.log(notasAlunos);







// function Alunos(Pedro, Marcela, Otavio, Carlos, Julia, Maria, Roberto, Ana, Junior, Augusto) {
//     this.Pedro = Pedro;
//     this.Marcela = Marcela;
//     this.Otavio = Otavio;
//     this.Carlos = Carlos;
//     this.Julia = Julia;
//     this.Maria = Maria;
//     this.Roberto = Roberto;
//     this.Ana = Ana;
//     this.Junior = Junior;
//     this.Augusto = Augusto;
// }

// const alunosComSuasNotas = new Alunos(8, 5, 7, 7, 5, 9, 7, 2, 9, 8);














// console.log(notasMaiorOuIgual6)







// function AlunosComSuaNota(aluno, nota) {
//     this.aluno = aluno;
//     this.nota = nota;
// }


// const pedro = new AlunosComSuaNota('Pedro', 8);
// const maria = new AlunosComSuaNota('Maria', 5);
// const Juliana = new AlunosComSuaNota('Juliana', 7);
// const marcos = new AlunosComSuaNota('Marcos', 5);
// const Ana = new AlunosComSuaNota('Ana', 9);
// const marcia = new AlunosComSuaNota('Marcia', 6);


// const notasMaiorOuIgual6 = notasAlunos.find(function(item) {
//     return item >= 6;
// })



// console.log(maria)
// console.log(todosOsAlunos)





// Códigos comentados acima foram teste, a partir daqui é o código do exercicio


const alunos = ['Pedro']

const notasAlunos = alunos.map(function(itemAtual){
    return {
        nome: itemAtual,
        nota: 8,
    }
}) 

notasAlunos.push({
    nome: 'Ana',
    nota: 6,
})

notasAlunos.push({
    nome: 'Carlos',
    nota: 9,
})

notasAlunos.push({
    nome: 'Sofia',
    nota: 5,
})

notasAlunos.push({
    nome: 'Julia',
    nota: 9,
})

notasAlunos.push({
    nome: 'José',
    nota: 6,
})



const notasMaiorOuIgual6 = notasAlunos.filter(function(item) {
    return item.nota >= 6;
})


console.log(notasAlunos)
console.log(notasMaiorOuIgual6)

