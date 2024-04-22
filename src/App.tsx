// src/App.tsx

import React, { useState } from 'react';
import { NftForm } from './components/NftForm';
import { NftCard } from './components/NftCard';
import { fetchNftsForAccount } from './api/atomicassets';
import { INftAsset } from './types/atomicassets';
import Container from '@mui/material/Container';
import './App.css';

const App: React.FC = () => {
  const [nfts, setNfts] = useState<INftAsset[]>([]);

  const handleSearch = async (account: string) => {
    try {
      const nftsResponse = await fetchNftsForAccount(account);
      setNfts(nftsResponse.data);
    } catch (error) {
      console.error(error);
      // Handle error properly, perhaps set an error state and display it
    }
  };

  // Group NFTs by collection
  const nftsByCollection = nfts.reduce<Record<string, INftAsset[]>>((acc, nft) => {
    acc[nft.collection.name] = acc[nft.collection.name] || [];
    acc[nft.collection.name].push(nft);
    return acc;
  }, {});

  return (
    <div className="App">
      <Container maxWidth="lg">
        <NftForm onSearch={handleSearch} />
        <div className="results">
          {Object.keys(nftsByCollection).map((collectionName) => (
            <div key={collectionName}>
              <h2>{collectionName}</h2>
              <div className="nft-collection">
                {nftsByCollection[collectionName].map((nft) => (
                  <NftCard key={nft.contract + nft.template_mint} nft={nft} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default App;
