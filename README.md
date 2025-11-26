# Chronicle Editor - AI-Assisted Text Editor

A modern, AI-powered text editor built with React, TypeScript, and ProseMirror. Write content and let AI continue your thoughts in various tones.

## Features

- ✨ Rich text editing with ProseMirror
- 🤖 AI-powered text continuation using OpenAI
- 🎨 Multiple tone options (Professional, Casual, Friendly, etc.)
- 📝 Text formatting (Bold, Italic)
- 📐 Text alignment (Left, Center, Right, Justify)
- 🎯 Clean, modern UI with dark theme support

## Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- OpenAI API key

## Installation

1. Clone the repository:
git clone https://github.com/Atharv140903/chroniclehq-frontend
cd chronicle-editor2. Install dependencies:
npm install## Environment Setup

1. Create a `.env` file in the root directory:
cp sample.env . Add your OpenAI API key to `.env`:
VITE_OPENAI_API_KEY=your_openai_api_key_here## Running the Project

### Development
npm run devThe app will be available at `http://localhost:5173`

### Build for Productionsh
npm run build### Preview Production Build
npm run preview## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **ProseMirror** - Rich text editor
- **XState** - State management
- **Tailwind CSS** - Styling
- **OpenAI API** - AI text generation

## Usage

1. Start typing in the editor
2. Select a tone from the dropdown (Professional, Casual, etc.)
3. Click "Continue Writing" to let AI continue your text
4. Use the toolbar to format text (Bold, Italic) and adjust alignment


