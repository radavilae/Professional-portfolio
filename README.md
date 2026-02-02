# Portfolio Project

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Tech Stack

- **Frontend**: React 19 with JSX
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Email Service**: EmailJS
- **Language**: Multi-language support (Spanish/English)

## 📁 Project Structure

```
src/
├── assets/          # Static assets (images, icons)
│   ├── images/      # Image files
│   └── icons/       # Icon files
├── components/      # Reusable React components
│   ├── common/      # Common UI components (Button, Card, Modal)
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   └── Projects.jsx
├── context/         # React context providers
├── hooks/           # Custom React hooks
├── pages/           # Page components
├── services/        # API and external service integrations
├── translations/    # Internationalization files
├── utils/           # Helper functions and constants
├── App.jsx          # Main App component
├── main.jsx         # Application entry point
└── index.css        # Global styles
```

## 🛠️ Development

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file based on `.env.example`:

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Multi-language Support**: Spanish and English
- **Contact Form**: Functional contact form with EmailJS integration
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Modern UI**: Clean, professional design with glassmorphism effects
- **Component Architecture**: Well-organized, reusable components
- **Custom Hooks**: Reusable logic with custom React hooks
- **API Integration**: Axios for HTTP requests

## 📦 Dependencies

### Main Dependencies
- `react` & `react-dom` - React library
- `axios` - HTTP client
- `@emailjs/browser` - Email service integration

### Development Dependencies
- `vite` - Build tool and dev server
- `@vitejs/plugin-react-swc` - React plugin for Vite
- `tailwindcss` - CSS framework
- `postcss` & `autoprefixer` - CSS processing
- `eslint` - Code linting

## 🚀 Deployment

The project is ready to be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 📄 License

This project is licensed under the MIT License.
