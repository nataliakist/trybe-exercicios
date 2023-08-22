import Clube from './Clube'
import QuadraFutebol from './QuadraFutebol'
import QuadraTenis from './QuadraTenis';

const clube = new Clube();
const quadraFut = new QuadraFutebol();
const quadraTen = new QuadraTenis();

clube.adicionarQuadra(quadraFut);
clube.adicionarQuadra(quadraTen);

const dataReserva = new Date('2023-08-20');

console.log(quadraFut.reservar(dataReserva));
console.log(quadraTen.reservar(dataReserva));
console.log(quadraTen.regras)

console.log(clube.buscarQuadra(0));
console.log(clube.buscarQuadra(1));
