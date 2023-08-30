import { ICepAPI } from './FooCepAPI';

export default class MockCepAPI implements ICepAPI {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return `O endereço para o "CEP:${cep}, n°:${number}" é "mock address"`;
  }
  async getCepByAddress(address: string, number: number): Promise<string> {
    return `O CEP para: "${address}, n°: ${number}" é "mock CEP"`;
  }
}