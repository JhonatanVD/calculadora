var Funcionario = /** @class */ (function () {
    function Funcionario() {
        this.Dedutivel = 0;
        this.funcionario = {};
    }
    Funcionario.prototype.calcularHorasExtras = function (salarioBruto, horaExtra) {
        this.funcionario.NumeroHorasExtra = 200;
        this.funcionario.valorHora = salarioBruto / this.funcionario.NumeroHorasExtra;
        this.funcionario.valorHoraExtra = this.funcionario.valorHora * (!horaExtra ? this.funcionario.horasExtra = 0 : this.funcionario.horasExtra = horaExtra);
        this.funcionario.salarioExtra = salarioBruto + this.funcionario.valorHoraExtra;
        return this.funcionario.salarioExtra;
    };
    Funcionario.prototype.calculoINSS = function (salarioBruto) {
        if (salarioBruto <= 1212.00) {
            this.funcionario.faixaDesconto = 0.075;
            this.funcionario.Desconto = salarioBruto * this.funcionario.faixaDesconto;
        }
        if (salarioBruto >= 1212.00 && salarioBruto <= 2427.35) {
            this.funcionario.faixaDesconto = 0.09;
            this.funcionario.Desconto = 1212.00 * 0.075;
            this.funcionario.Desconto = this.funcionario.Desconto + ((salarioBruto - 1212.00) * this.funcionario.faixaDesconto);
        }
        if (salarioBruto >= 2427.36 && salarioBruto <= 3641.03) {
            this.funcionario.faixaDesconto = 0.12;
            this.funcionario.Desconto = 1212.00 * 0.075;
            this.funcionario.Desconto = this.funcionario.Desconto + (2427.36 - 1212.00) * 0.09;
            this.funcionario.Desconto = this.funcionario.Desconto + (salarioBruto - 2427.36) * this.funcionario.faixaDesconto;
        }
        if (salarioBruto >= 3641.03 && salarioBruto <= 7087.22) {
            this.funcionario.faixaDesconto = 0.14;
            this.funcionario.Desconto = 1212.00 * 0.075;
            this.funcionario.Desconto = this.funcionario.Desconto + (2427.36 - 1212.00) * 0.09;
            this.funcionario.Desconto = this.funcionario.Desconto + (3641.03 - 2427.36) * 0.12;
            this.funcionario.Desconto = this.funcionario.Desconto + (salarioBruto - 3641.03) * this.funcionario.faixaDesconto;
        }
        if (salarioBruto >= 7087.22) {
            this.funcionario.faixaDesconto = 0.014;
            this.funcionario.Desconto = 992.23;
        }
        return this.funcionario.Desconto;
    };
    Funcionario.prototype.calculoIr = function (salarioBruto) {
        if (salarioBruto <= 1903.98) {
            this.funcionario.Ir = 0;
            this.funcionario.descontoIr = 0;
        }
        if (salarioBruto >= 1903.98 && salarioBruto <= 2826.65) {
            this.funcionario.Ir = 0.075;
            this.Dedutivel = 142, 80;
            this.funcionario.descontoIr = (salarioBruto * this.funcionario.Ir) - this.Dedutivel;
        }
        if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
            this.funcionario.Ir = 0.015;
            this.Dedutivel = 354, 80;
            this.funcionario.descontoIr = (salarioBruto * this.funcionario.Ir) - this.Dedutivel;
        }
        if (salarioBruto >= 3751.05 && salarioBruto <= 4664.68) {
            this.funcionario.Ir = 0.225;
            this.Dedutivel = 636.13;
            this.funcionario.descontoIr = (salarioBruto * this.funcionario.Ir) - this.Dedutivel;
        }
        if (salarioBruto >= 4664.68) {
            this.funcionario.Ir = 0.275;
            this.Dedutivel = 869.36;
            this.funcionario.descontoIr = (salarioBruto * this.funcionario.Ir) - this.Dedutivel;
        }
        return this.funcionario.descontoIr;
    };
    Funcionario.prototype.SalarioLiquido = function (salarioHoraExtra, Desconto, descontoIr) {
        this.funcionario.salarioLiquido = salarioHoraExtra - descontoIr - Desconto;
    };
    Funcionario.prototype.setNome = function (novoNome) {
        this.funcionario.nome = novoNome;
    };
    return Funcionario;
}());
var func = new Funcionario();
{
}
function principal(nome, salario, horasExtras) {
    func.calcularHorasExtras(salario, horasExtras);
    func.calculoINSS(salario);
    func.calculoIr(func.funcionario.salarioExtra - func.funcionario.Desconto);
    func.SalarioLiquido(func.funcionario.salarioExtra, func.funcionario.Desconto, func.funcionario.descontoIr);
    //
    console.log("Nome: " + nome);
    console.log("Salário Bruto: " + salario);
    console.log("Horas Extras: " + horasExtras);
    console.log("Salario + Hora Extra: " + func.funcionario.salarioExtra);
    console.log("Faixa INSS: " + (func.funcionario.faixaDesconto * 100).toFixed(2));
    console.log("Desconto INSS: " + func.funcionario.Desconto);
    console.log("Salario Base IR: " + (func.funcionario.salarioExtra - func.funcionario.Desconto));
    console.log("Faixa IR: " + (func.funcionario.Ir * 100).toFixed(2));
    console.log("Desconto IR:" + func.funcionario.descontoIr);
    console.log("Salário Líquido: " + func.funcionario.salarioLiquido);
}
principal(process.argv[2], Number(process.argv[3]), Number(process.argv[4]));
