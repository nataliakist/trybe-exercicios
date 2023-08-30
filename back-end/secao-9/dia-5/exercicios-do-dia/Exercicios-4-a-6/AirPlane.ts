import { IFly } from './interfaces';

export default class AirPlane implements IFly {
  drive(): void {}

  fly(): void { console.log('Flying an airplane'); }
}
