import Quadra from './Quadra';
import IAgenda from './interfaces/IAgenda';
import ITenis from './interfaces/ITenis';
import normas from './normas/normasDeUso';

class QuadraTenis extends Quadra {
  public regras:ITenis = normas.tenis;

  public reservar<ITenis>(dataReserva: Date): IAgenda<ITenis>  {
    const protocolo = (Math.random() + 1).toString(16).substring(3);
    
    return { protocolo,
      date: dataReserva,
      regras: this.regras as ITenis,
    }
  }
}

export default QuadraTenis;