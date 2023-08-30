export interface IDrive {
  drive(): void;
}

export interface IFly {
  fly(): void;
}

export interface IFuturisticCar extends IDrive, IFly {}