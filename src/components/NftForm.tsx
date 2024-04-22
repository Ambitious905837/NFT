// src/components/NftForm.tsx

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

interface NftFormProps {
  onSearch: (account: string) => void;
}

export const NftForm: React.FC<NftFormProps> = ({ onSearch }) => {
  const [account, setAccount] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(account);
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        label="EOS Account Name"
        variant="outlined"
        value={account}
        onChange={(e) => setAccount(e.target.value)}
        required
      />
      <Button variant="contained" type="submit">Search</Button>
    </Box>
  );
};
