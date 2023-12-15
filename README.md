# Chat App

## Introduction

Welcome to the Chat App project! This application enables users to participate in a free, open chat channel. Users can join the application and engage in real-time conversations with other participants in a public chat channel.

## Technologies Used

### Frontend:

- HTML
- CSS (You may use a library like Bootstrap or Tailwind for styling)
- Vanilla JavaScript (No jQuery or any libraries/front-end frameworks)

### Backend:

- Node.js
- Socket.io library

## Getting Started

Follow the steps below to run the chat app locally on your machine.

### Prerequisites

Before running the chat app, make sure you have the following software installed:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- Git: [Download and install Git](https://git-scm.com/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/chat-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd chat-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Configuration

1. Open the `chat.js` file in the `server` directory.

2. Set the appropriate values for the `PORT` variable.

   ```bash
   # chat.js
   
   PORT: The port on which the server will run (e.g., 3000).

## Running the Application
Start the server (with noemone):

bash
nodemone chat.js
The server will be running on the specified port.

Open your web browser and go to http://localhost:3000/chat.html (replace 3000 with the port you specified).

## Features
Chat Interface:
Type and send messages.
View the entire chat history.
Participant List:
  See a list of currently active participants.
  
### Notes
The chat history will be visible as long as the browser is open.
Enjoy chatting!
