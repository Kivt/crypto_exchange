# Crypto exchange

Crypto Exchange is a web application for viewing cryptocurrency prices, exchanging currencies, and tracking exchange history. Built with Vue.js and Vite, it provides a user-friendly interface for real-time price updates and seamless currency conversion.

## Features
- View live cryptocurrency prices
- Exchange between supported currencies
- Track your exchange history
- Responsive and modern UI

## Installation

To install and run Crypto Exchange locally:

1. Clone the repository:
	```sh
	git clone https://github.com/Kivt/Crypto-Exchange.git
	cd crypto_exchange
	```
2. Install dependencies:
	```sh
	yarn
	```
3. Start the development server:
	```sh
	yarn dev
	```

The app will be available at `http://localhost:5173` by default.

## Project Structure

```
Crypto_exchange/
├── public/                # Static assets
├── src/                   # Source code
│   ├── api/               # API calls (e.g., prices)
│   ├── assets/            # CSS and images
│   ├── components/        # Reusable Vue components
│   ├── router/            # Vue Router setup
│   ├── stores/            # Pinia stores (state management)
│   ├── types/             # TypeScript types
│   ├── utils/             # Utility functions
│   ├── views/             # Main views/pages
│   ├── App.vue            # Root Vue component
│   └── main.ts            # App entry point
├── index.html             # Main HTML file
├── package.json           # Project metadata and scripts
├── vite.config.ts         # Vite configuration
└── README.md              # Project documentation
```

## Tech Stack

- **Vue.js 3** – Frontend framework
- **Vite** – Build tool and development server
- **TypeScript** – Type safety
- **Pinia** – State management
- **Vue Router** – Routing
- **ESLint** – Linting
- **Yarn** – Package manager