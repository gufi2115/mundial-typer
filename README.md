<!-- -->
# ⚽ Mundial Bet 2026 - World Cup Betting Dashboard

A modern, responsive React dashboard for a World Cup betting web application featuring real-time match predictions, global leaderboards, and user statistics.

## 🎯 Features

### **Dashboard Layout**
- **Responsive 3-Column Grid** (25%-50%-25%)
  - Desktop: Full 3-column layout
  - Tablet: 2-column layout
  - Mobile: Single column stack

### **Components**

#### 1. **Header** 🎨
- Sticky navigation bar with app branding
- Profile icon for user account access
- Responsive mobile hamburger menu
- Emerald green accent borders

#### 2. **Podium** 🏆
- Top 3 users with medal styling
- 🥇 Gold (1st place) - Gradient gold background
- 🥈 Silver (2nd place) - Silver background
- 🥉 Bronze (3rd place) - Orange background
- User names and points display
- Smooth hover animations

#### 3. **Upcoming Matches** ⚽
- 4 mock matches with real teams
- Team flags and country names
- Date and time with icons
- Score prediction input fields (Home vs Away)
- Interactive "Place Bet" button with validation
- Hover effects with emerald glow shadows
- Real tournament data included

#### 4. **Global Leaderboard** 🏅
- Top 10 ranked users
- Rank badges with medal icons
- Trending indicators (up/down arrows)
- Point totals with color coding
- Custom green scrollbar
- "View Full Leaderboard" navigation link

#### 5. **Predictions History** 📊
- Statistics cards (Total, Correct, Incorrect, Accuracy %)
- Points summary display
- Filter buttons (All, Correct, Incorrect)
- Detailed prediction cards with:
  - Team comparison
  - Predicted vs actual scores
  - Points awarded
  - Match date
  - Status indicators

## 🛠️ Tech Stack

- **React 18.2** - Modern UI library with hooks
- **Vite 5.0** - Lightning-fast build tool
- **Tailwind CSS 3.3** - Utility-first CSS framework
- **Lucide React** - Beautiful SVG icons
- **PostCSS & Autoprefixer** - CSS processing

## 🎨 Design Highlights

- **Color Scheme**:
  - Dark mode: `#111827` (Primary)
  - Emerald green: `#10b981` (Accent)
  - Gold: `#FBBF24` (Highlights)
  - Gray tones for hierarchy

- **Typography**: Modern sans-serif with gradient text effects
- **Animations**: Smooth transitions, scale effects, slide-in animations
- **Responsive**: Mobile-first approach with breakpoints
- **Custom Scrollbar**: Green-themed matching brand colors

## 📦 Installation

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Setup

```bash
# Clone the repository
git clone https://github.com/gufi2115/mundial-typer.git

# Navigate to project directory
cd mundial-typer

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open automatically at `http://localhost:3000`

## 🚀 Building for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx              # Sticky navigation bar
│   ├── Podium.jsx              # Top 3 users display
│   ├── UpcomingMatches.jsx      # Match cards & betting
│   ├── Leaderboard.jsx         # Global rankings
│   ├── PredictionsHistory.jsx   # Prediction tracking
│   └── Dashboard.jsx           # Main layout container
├── App.jsx                     # Root component with routing
├── App.css                     # Global & custom styles
├── main.jsx                    # React entry point
├── index.css                   # Tailwind imports
└── index.html                  # HTML template

Config files:
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind theme config
├── postcss.config.js           # PostCSS plugins
└── .gitignore                  # Git ignore rules
```

## 💡 Mock Data

The application includes fully populated mock data:

### **Upcoming Matches** (4 matches)
- Argentina vs Brazil
- France vs Germany
- Spain vs England
- Netherlands vs Belgium

### **Podium** (Top 3)
- Carlos Mendez - 5,230 points
- Silva Santos - 4,850 points
- Juan Flores - 4,620 points

### **Leaderboard** (Top 10)
- 10 users with varied point totals
- Trending indicators (up/down)
- Status badges

### **Predictions History** (5 entries)
- Mixed correct/incorrect outcomes
- Points awarded accordingly
- Filter functionality

## 🎯 Key Features Implemented

✅ **Fully Responsive Design**
- Mobile: Single column, stacked layout
- Tablet: 2-column layout
- Desktop: Full 3-column grid

✅ **Interactive Elements**
- Bet placement with validation
- Score prediction inputs
- Filter buttons (All/Correct/Incorrect)
- Trending indicators
- Hover effects and animations

✅ **Dark Mode Theme**
- Sporty and modern aesthetic
- Emerald green accents
- Gold highlights for premium elements
- High contrast for readability

✅ **Performance Optimized**
- Smooth animations
- Lightweight components
- Fast load times (Vite)
- Optimized CSS with Tailwind

✅ **Accessibility Ready**
- Semantic HTML structure
- Keyboard navigation support
- Color contrast compliance
- Aria labels where needed

## 🔌 API Integration

The application is ready for backend integration. Replace mock data with API calls:

```javascript
// Example: Fetch upcoming matches
const fetchMatches = async () => {
  const response = await fetch('/api/matches');
  const data = await response.json();
  // Update state with real data
};

// Example: Submit bet
const placeBet = async (matchId, prediction) => {
  const response = await fetch('/api/bets', {
    method: 'POST',
    body: JSON.stringify({ matchId, prediction }),
  });
  // Handle response
};
```

## 🎨 Customization

### Change Brand Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'emerald': '#10b981',  // Change this
      'gold': '#FBBF24',     // Or this
    },
  },
}
```

### Adjust Layout
Edit `src/components/Dashboard.jsx`:
```javascript
{/* Modify grid columns for different proportions */}
<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
  <div className="lg:col-span-1">  {/* Adjust span */}
```

### Update Mock Data
Edit individual component files under `src/components/`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (1 column, full width)
- **Tablet**: 640px - 1024px (2 columns)
- **Desktop**: > 1024px (3 columns, full layout)

## 🐛 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Create production build
npm run preview   # Preview production build
npm run lint      # Run ESLint checks
```

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 🙋 Support

For issues or questions:
1. Check existing issues on GitHub
2. Create a new issue with detailed description
3. Include screenshots/error logs

## 🎉 Future Enhancements

- [ ] User authentication system
- [ ] Real-time notifications
- [ ] Payment integration
- [ ] Advanced analytics dashboard
- [ ] Mobile app (React Native)
- [ ] Dark/Light mode toggle
- [ ] Multi-language support
- [ ] Push notifications
- [ ] Live match updates
- [ ] Social features (friends, chat)

---

**Made with ⚽ by Your Development Team**

Happy betting! 🎯
