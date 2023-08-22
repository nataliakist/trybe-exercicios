import Quadra from './Quadra';
import IAgenda from './interfaces/IAgenda';
import IFutebol from './interfaces/IFutebol';
import normas from './normas/normasDeUso';

class QuadraFutebol extends Quadra {
  public regras:IFutebol = normas.futebol;

  public reservar<IFutebol>(dataReserva: Date): IAgenda<IFutebol>  {
    const protocolo = (Math.random() + 1).toString(16).substring(3);
    
    return { protocolo,
      date: dataReserva,
      regras: this.regras as IFutebol,
    }
  }
}

export default QuadraFutebol;