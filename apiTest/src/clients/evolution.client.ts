import { AxiosError, AxiosResponse } from 'axios';
import { EvolutionChain, EvolutionTrigger, NamedAPIResourceList } from '../models';
import { Endpoints } from '../constants';
import { BaseClient, ClientArgs } from '../structures/base';

/**
 * ### Evolution Client
 *
 * Client used to access the Berry Endpoints:
 *  - [Evolution Chains](https://pokeapi.co/docs/v2#evolution-chains)
 *  - [Evolution Triggers](https://pokeapi.co/docs/v2#evolution-triggers)
 * ---
 * See [PokéAPI Documentation](https://pokeapi.co/docs/v2#evolution-section)
 */
export class EvolutionClient extends BaseClient {
  /**
   * @argument clientOptions Options for the client.
   */
  constructor(clientOptions?: ClientArgs) {
    super(clientOptions);
  }

  /**
   * Get an Evolution Chain by it's ID
   * @param id The Evolution Chain ID
   * @returns An Evolution Chain
   */
  public async getEvolutionChainById(id: number): Promise<EvolutionChain> {
    return new Promise<EvolutionChain>((resolve, reject) => {
      this.api
        .get<EvolutionChain>(`${Endpoints.EvolutionChain}/${id}`)
        .then((response: AxiosResponse<EvolutionChain>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get an Evolution Trigger by it's ID
   * @param id The Evolution Trigger ID
   * @returns An Evolution Trigger
   */
  public async getEvolutionTriggerById(id: number): Promise<EvolutionTrigger> {
    return new Promise<EvolutionTrigger>((resolve, reject) => {
      this.api
        .get<EvolutionTrigger>(`${Endpoints.EvolutionTrigger}/${id}`)
        .then((response: AxiosResponse<EvolutionTrigger>) => resolve(response.data))
        .catch((error: AxiosError<string>) => {
          reject(error);
        });
    });
  }

  /**
   * Get an Evolution Trigger by it's name
   * @param name The Evolution Trigger name
   * @returns An Evolution Trigger
   */
  public async getEvolutionTriggerByName(name: string): Promise<EvolutionTrigger> {
    return new Promise<EvolutionTrigger>((resolve, reject) => {
      this.api
        .get<EvolutionTrigger>(`${Endpoints.EvolutionTrigger}/${name}`)
        .then((response: AxiosResponse<EvolutionTrigger>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * List Evolution Chains
   * @param offset The first item that you will get
   * @param limit How many Evolution Chains per page
   * @returns A list of Evolution Chains
   */
  public async listEvolutionChains(offset?: number, limit?: number): Promise<NamedAPIResourceList> {
    return new Promise<NamedAPIResourceList>((resolve, reject) => {
      this.api
        .get<NamedAPIResourceList>(
          `${Endpoints.EvolutionChain}?offset=${offset || 0}&limit=${limit || 20}`
        )
        .then((response: AxiosResponse<NamedAPIResourceList>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * List Evolution Triggers
   * @param offset The first item that you will get
   * @param limit How many Evolution Triggers per page
   * @returns A list of Evolution Triggers
   */
  public async listEvolutionTriggers(
    offset?: number,
    limit?: number
  ): Promise<NamedAPIResourceList> {
    return new Promise<NamedAPIResourceList>((resolve, reject) => {
      this.api
        .get<NamedAPIResourceList>(
          `${Endpoints.EvolutionTrigger}?offset=${offset || 0}&limit=${limit || 20}`
        )
        .then((response: AxiosResponse<NamedAPIResourceList>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }
}
