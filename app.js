import chalk from "chalk";
import readLineSync from 'readline-sync';


const propriedades = []
let input = ''

while (input != 'SAIR'){
    propriedades.push(input);
    input = readLineSync.question(chalk.gray('Digite uma propriedade de CSS, ou SAIR'));
}
console.log(chalk.bold(`Listagem ordenada por ordem alfabética de propriedades CSS`), (chalk.blueBright(propriedades.sort().join('\n'))));
