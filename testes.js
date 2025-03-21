/*var energiaDisponivel = 1200;
var bateriaExtra = 400;
var consumoDispositivos = [300, 600, 500, 200, 400];

for (var i = 0; i < consumoDispositivos.length; i++) {
    var consumo = consumoDispositivos[i];

    if (consumo <= energiaDisponivel) {
        console.log("Dispositivo " + (i+1) + " ligado. Energia restante: " + (energiaDisponivel - consumo));
        energiaDisponivel -= consumo;
    } else if (consumo <= energiaDisponivel + bateriaExtra) {
        console.log("Dispositivo " + (i+1) + " ligado com bateria extra. Energia restante: " + ((energiaDisponivel + bateriaExtra) - consumo));
        energiaDisponivel = 0;
        bateriaExtra -= (consumo - energiaDisponivel);
    } else {
        console.log("Dispositivo " + (i+1) + " não pode ser ligado. Energia insuficiente.");
    }
}


var pedido = 10;

if (pedido < 50) { 
    console.log("Frete não disponível!");
}
else if (50 <= pedido && pedido <= 199.99) {
    console.log('Frete com custo adicional!');
}
else if (pedido >= 200) {
    console.log('Frete grátis!');
}

class Veiculo {
    constructor (modelo, ano, quilometragem, gasolina) {
        this.modelo = modelo;
        this.ano = ano;
        this.quilometragem = quilometragem;
        this.gasolina = gasolina
    }
    CalcularConsumo() {
        consumo = this.quilometragem / this.gasolina;
        console.log (consumo);
    }
}

class Moto extends Veiculo  {
    constructor (modelo, ano, quilometragem, gasolina, eficienciaMoto) {
        super (modelo, ano, quilometragem, gasolina);
        this.eficiencia = eficienciaMoto;
    }

    CalcularConsumo() {
        consumo = (this.quilometragem / this.gasolina) * this.eficiencia;
        console.log (consumo);
    }

}

class Carro extends Veiculo  {
    constructor (modelo, ano, quilometragem, gasolina, eficienciaCarro) {
        super (modelo, ano, quilometragem, gasolina);
        this.eficiencia = eficienciaCarro;
    }

    CalcularConsumo() {
        consumo = (this.quilometragem / this.gasolina) * this.eficiencia;
        console.log (consumo);
    }

}Função MultiplicarMatrizesInvestimento(matrizA, matrizB):  
    # Verifica se o número de colunas da matrizA é igual ao número de linhas da matrizB  
    Se tamanho(matrizA[0]) ≠ tamanho(matrizB) então:  
        Retornar "As matrizes não podem ser multiplicadas. Dimensões incompatíveis."  
    Senão:  
        linhasA <- tamanho(matrizA)  
        colunasA <- tamanho(matrizA[0])  
        colunasB <- tamanho(matrizB[0])  
        matrizResultado <- novaMatriz(linhasA, colunasB)  

        # Loop para multiplicar as matrizes  
        Para i de 0 até linhasA-1 faça:  
            Para j de 0 até colunasB-1 faça:  
                matrizResultado[i][j] <- 0  
                Para k de 0 até colunasA-1 faça:  
                    matrizResultado[i][j] <- matrizResultado[i][j] + (matrizA[i][k] * matrizB[k][j])  

        Retornar matrizResultado  

let velocidadeInicial = 500;  
let velocidadeSegura = 5;     
let desaceleracao = 20;       
let tempoMaximo = 30;         

function calcularTempoPouso(velocidadeInicial, velocidadeSegura, desaceleracao, tempoMaximo) {
    if (velocidadeInicial <= velocidadeSegura) {
        console.log("A sonda já está em velocidade segura para pouso.");
    }

    if (desaceleracao <= 0) {
        console.log("Erro: A desaceleração deve ser positiva.");
    }

    let tempo = (velocidadeInicial - velocidadeSegura) / desaceleracao;

    if (tempo > tempoMaximo) {
        console.log("Aviso: Tempo máximo de descida excedido! Ajuste necessário.");
    } else {
        console.log(`Tempo necessário para pouso seguro: ${tempo.toFixed(2)} segundos.`);
    }

}*/