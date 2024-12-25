# 🪄 SyntaxSage

SyntaxSage is an AI-powered code generation tool that transforms your ideas into elegant code through a mystical and intuitive interface.

## ✨ Features

- **AI-Powered Code Generation**: Leverages Hugging Face's Qwen2.5-Coder model
- **Real-time Preview**: Instantly see your generated code in action
- **Syntax Highlighting**: Beautiful code presentation with highlight.js
- **Responsive Design**: Works seamlessly across all devices
- **Dark Mode**: Easy on the eyes with a magical dark theme

## 🚀 Tech Stack

- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Build Tool**: Vite
- **AI Integration**: Hugging Face Inference API
- **Icons**: Lucide React

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Hugging Face API token:
```env
VITE_HF_TOKEN=your_token_here
```

4. Start the development server:
```bash
npm run dev
```

## 🔮 Usage

1. Enter your code request in the input area
2. Click "Invoke the Sage" to generate code
3. View the generated code with syntax highlighting
4. See the live preview in the Preview Portal
5. Toggle fullscreen preview for a better view

## 🏗️ Project Structure

```
src/
├── components/         # React components
├── lib/               # Utility functions and API
├── hooks/             # Custom React hooks
└── styles/            # Global styles and Tailwind
```

## 📦 Building for Production

```bash
npm run build
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
