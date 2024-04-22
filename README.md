# Wombat Dungeon Master NFT Viewer

The Wombat Dungeon Master NFT Viewer is a React-based web application that allows users to enter their EOS account name and view their NFTs grouped by collection. Each NFT is displayed as a card with its name, image, and mint number.

## Features

* Users can search for NFTs by EOS account name.
* NFTs are displayed in a card layout with essential details.
* Cards are grouped by NFT collections.

### Getting Started
#### Prerequisites

Ensure you have the following installed:

Node.js
npm or Yarn
Git (for cloning the repository)

#### Installation

1. Clone the repository:
git clone https://github.com/Ambitious905837/NFT.git
cd NFT

2. Install the dependencies:

npm install
or if you are using Yarn:
yarn install

#### Running the Application

To run the application in the development mode, use:
npm start
or if you are using Yarn:
yarn start
Open http://localhost:3000 to view it in the browser.

### Usage

Upon launching the application, you will see an input field where you can type an EOS account name.
Enter the account name and submit the form to fetch the NFTs.
The NFTs will be displayed below the search bar, grouped by their respective collections.

### Built With

React.js - The web framework used.
TypeScript - Used for adding static type definitions to JavaScript.
Material-UI - Used for the UI components.
Axios - Used to make API requests.

## API Reference

The application queries the AtomicAssets API to fetch the NFT data:

`GET /atomicassets/v1/assets` - Retrieves the NFTs owned by the specified account.