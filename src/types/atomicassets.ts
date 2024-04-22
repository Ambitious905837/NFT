export interface INftAsset {
    contract: string;
    collection: { name: string };
    data: {
      name: string;
      img: string; // Assuming 'img' is the key where the image CID is stored
    };
    template_mint: string;
  }
  
  export interface INftAssetsResponse {
    success: boolean;
    data: INftAsset[];
  }
  