const isNumber = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw error('Invalid')
        // Se a afirmação for correta ele cai no throw error e informa um erro não tratado, mostrando todo o local do erro do arquivo, não é bom que isso aconteça. é necessario tratar o erro para o usuario.
    }
    
    return a + b
}

// a condição try / catch serve para capturar o erro e tratar.
// try: Caso aconteça um erro no bloco, faça o catch.
// catch: Capta o erro e coloca em uma variavel, na variavel contem toda a informação do error, não é pra lançar o erro pro usuario. voce deve tratar e exibir algo que explique o erro pro usuario.
try {
    console.log(isNumber('1', 2))
} catch (e) {
    console.log(e) // errado
    console.log('Error') // exibir algo pro usuario. indicado.
}

try {
    // é executada quando não ha erros
} catch (error){
    // é executada quando ha erros
} finally {
    // sempre é executada, acontecendo erro ou não. pode ser omitido.
}
/* Ex de uso: Se o usuario abrir um arquivo e por acaso ocorrer erro, voce não pode simplesmente tratar o erro e deixar o arquivo aberto. Nesse caso pode usar o finally para sempre fechar o arquivo, ele dando erro ou não. seria uma margem de segurança. */
