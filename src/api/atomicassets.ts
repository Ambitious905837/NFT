
import axios from 'axios';
import { INftAssetsResponse } from '../types/atomicassets';

const BASE_URL = 'https://eos.api.atomicassets.io/atomicassets/v1/assets';

export const fetchNftsForAccount = async (accountName: string): Promise<INftAssetsResponse> => {
  try {
    const response = await axios.get<INftAssetsResponse>(`${BASE_URL}`, {
      params: { owner: accountName },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching NFTs');
  }
};
