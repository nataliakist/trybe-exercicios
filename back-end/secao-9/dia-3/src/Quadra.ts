import IAgenda from './interfaces/IAgenda'

abstract class Quadra {
  protected abstract reservar<T>(dataReserva:Date): IAgenda<T>;
}

export default Quadra;