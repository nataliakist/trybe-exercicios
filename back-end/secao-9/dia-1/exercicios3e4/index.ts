import Cliente from "./Cliente";
import Item from "./Item";
import Pedido from "./Pedido";

const cliente1 = new Cliente('Natália');

const batata = new Item('Batata Frita', 15.00)
const suco = new Item('Suco de Laranja', 5.00)
const sobremesa = new Item('Brownie com Sorvete', 12.00)

const pedido1 = new Pedido(cliente1, [batata, suco, sobremesa], 'cartão', 0.20);

console.log(pedido1);
