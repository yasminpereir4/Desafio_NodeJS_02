/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);

	console.log('Desafio 002 - Starts...');

	const nome1:string= 'Eliel Silva';
	const idade1:number= 33;
	const peso1:number= 88.50;
	const altura1:number= 1.75;
	const ehDev1:boolean= true;	

	const nome2:string= 'Yasmin Mota';
	const idade2:number= 18;
	const peso2:number= 67.50;
	const altura2:number= 1.68;
	const ehDev2:boolean= true;	

	const nome3:string= 'Kawan Manzini';
	const idade3:number= 19;
	const peso3:number= 70.50;
	const altura3:number= 1.70;
	const ehDev3:boolean= true;	

	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05
	
	console.log(nome1 , idade1 , peso1, altura1, ehDev1);
	console.log(nome2 , idade2 , peso2, altura2, ehDev2);
	console.log(nome3 , idade3 , peso3, altura3, ehDev3);

	//R01	
	function somarNumeros(idade1: number, idade2: number, idade3: number): void {
		const resultado = idade1 + idade2 + idade3;
		console.log(`A soma das idades é ${resultado}.`);
	}
	somarNumeros(idade1, idade2, idade3);

	//R02
	function agrupar(nome1: string, nome2: string, nome3: string): void {
		const agrupamento = `${nome1}, ${nome2}, ${nome3}`;
		console.log(`O nome dos Ubuntus são: ${agrupamento}.`);
	}
	agrupar(nome1, nome2, nome3);

	//R03
	function calcularIMC(peso1:number , altura1:number , peso2:number, altura2:number , peso3:number, altura3:number): void {
		const imc1 = peso1 / (altura1 * altura1);
		const imc2 = peso2 / (altura2 * altura2);
		const imc3 = peso3 / (altura3 * altura3);

		console.log(`IMC do ${nome1} é: ${imc1.toFixed(2)}`);
		console.log(`IMC do ${nome2} é: ${imc2.toFixed(2)}`);
		console.log(`IMC do ${nome3} é: ${imc3.toFixed(2)}`);
	}
	calcularIMC(peso1, altura1 , peso2, altura2 , peso3, altura3);

	//R04

	 function contar(ehDev1:boolean , ehDev2:boolean, ehDev3:boolean): void {
		let contador = 0;
		
		if(ehDev1){
			contador++;
		}
		if(ehDev2){
			contador++;
		}		
		if(ehDev3){
			contador++;
		}
		 console.log(`Existem ${contador} desenvolvedores`);
	 }
	 	contar(ehDev1, ehDev2, ehDev3);

	 //R05	

	 function silvasName(sobrenome: string, nome1: string, nome2: string, nome3: string): void {
		const nomes: string[] = [];
	
		if (nome1.endsWith(sobrenome)) {
			nomes.push(nome1);
		}
	
		if (nome2.endsWith(sobrenome)) {
			nomes.push(nome2);
		}
	
		if (nome3.endsWith(sobrenome)) {
			nomes.push(nome3);
		}
	
		console.log(`Os Ubuntus com sobrenome ${sobrenome} são: ${nomes.join(', ')}.`);
	}
	
	silvasName('Silva', nome1, nome2, nome3);
});
	

