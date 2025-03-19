# Witness Films Website

A modern, responsive website for Witness Films, showcasing their portfolio of music videos and commercial work.

## Features

- Modern, responsive design
- Portfolio showcase with filtering
- Project detail pages
- Contact form
- Interactive animations
- Mobile-friendly navigation

## Technologies Used

- React
- TypeScript
- Material-UI
- Framer Motion
- React Router

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/[your-github-username]/witness-films.git
```

2. Navigate to the project directory:
```bash
cd witness-films
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

The site will be available at [http://localhost:3000](http://localhost:3000)

## Building for Production

To create a production build:

```bash
npm run build
```

## Deploying to GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub Pages URL.

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

## Project Structure

```
witness-films/
  ├── public/
  │   ├── images/
  │   └── index.html
  ├── src/
  │   ├── components/
  │   │   └── Navbar.tsx
  │   ├── pages/
  │   │   ├── Home.tsx
  │   │   ├── About.tsx
  │   │   ├── Portfolio.tsx
  │   │   ├── Contact.tsx
  │   │   └── ProjectDetail.tsx
  │   ├── App.tsx
  │   └── index.tsx
  ├── package.json
  └── README.md
```

## Adding Content

### Adding New Projects

1. Add project images to the `public/images/` directory
2. Update the projects array in `src/pages/Portfolio.tsx`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details


add to package.json - line 3
