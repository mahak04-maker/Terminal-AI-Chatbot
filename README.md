# AI Chat System

A terminal-based AI chatbot built using Node.js that supports multiple AI providers with automatic fallback functionality.

## Features

- Multiple AI Models Support
  - Groq
  - Gemini

- Runtime Model Switching
  - `/groq` → Switch to Groq
  - `/gemini` → Switch to Gemini
  - `/exit` → Exit application

- Automatic Fallback System
  - If the selected model fails, the system automatically switches to the backup model.
  - Ensures uninterrupted response generation.

- Interactive Terminal Chat
  - Real-time conversation through terminal.

## Tech Stack

- Node.js
- JavaScript (ES Modules)
- Groq API
- Google Gemini API

## Project Structure

text
AI-Chat-System/
│
├── services/
│ ├── groq.js
│ └── gemini.js
│
├── index.js
├── .env
├── package.json
└── README.md

## Installation

Clone the repository:

bash
git clone <repository-url>

Navigate to the project directory:

bash
cd AI-Chat-System

Install dependencies:

bash
npm install

## Environment Variables

Create a .env file and add:

env
GROQ_API_KEY=your_groq_api_key
GEMINI_API_KEY=your_gemini_api_key

## Run the Application

bash
node index.js

## Commands

| Command | Description            |
| ------- | ---------------------- |
| /groq   | Switch to Groq Model   |
| /gemini | Switch to Gemini Model |
| /exit   | Exit Application       |

## Fallback Workflow

1. User sends a prompt.
2. Selected model processes the request.
3. If the model fails:
   - Error is detected.
   - System automatically switches to the backup model.

4. Response is generated successfully.

Example:

text
Primary Model Failed.
Switching to Gemini...
Response Generated Successfully.

## Learning Outcomes

- API Integration
- AI Model Handling
- Error Management
- Fallback Architecture
- Node.js Backend Development
- Terminal Application Development

## Author

Mahak Yadav
