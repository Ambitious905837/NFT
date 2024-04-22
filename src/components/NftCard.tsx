// src/components/NftCard.tsx

import React from 'react';
import { INftAsset } from '../types/atomicassets';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface NftCardProps {
  nft: INftAsset;
}

export const NftCard: React.FC<NftCardProps> = ({ nft }) => {
  const imageUrl = `https://ipfs.io/ipfs/${nft.data.img}`;
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={nft.data.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nft.data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Mint Number: #{nft.template_mint}
        </Typography>
      </CardContent>
    </Card>
  );
};
