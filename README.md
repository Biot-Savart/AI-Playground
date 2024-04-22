# AI Playground

Welcome to AI Playground!

## Getting Started

This application consists of a frontend built with React and a backend server using Express.js.

### Prerequisites

Before you begin, ensure you have npm installed on your machine. You can check your npm version with `npm -v`.

### Setup

Clone the repository to your local machine and install the dependencies:

```bash
git clone https://github.com/Biot-Savart/ai-playground.git
cd ai-playground
```

### Starting the Frontend

```bash
cd client
npm install
```

Run the following command in the project directory to start the frontend:

```bash
npm start:frontend
```

This will launch the app in development mode. Open [http://localhost:8001](http://localhost:8001) to view it in your browser. The page will reload if you make edits. You will also see any lint errors in the console.

### Starting the Backend

```bash
cd server
npm install
```

To start the backend server, run:

```bash
npm run start:backend
```

This command starts the server using `nodemon`, which will automatically restart the server upon any changes to the server files. The server will run on `http://localhost:8000` by default.

### API Usage

The backend server is configured to handle POST requests at the `/api/*` endpoint. It utilizes the OpenAI API to generate responses based on the input provided.

## Learn More

You can learn more about Create React App and React from the following resources:

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or improvements.
