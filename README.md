# Dashboard App

A modern, responsive dashboard application built with React, TypeScript, and Vite for displaying and managing user data. Features a comprehensive overview dashboard and a detailed data table with advanced filtering and pagination capabilities.

## 🚀 Features

### Dashboard Overview

- **Real-time Statistics**: Total users, administrators, moderators, and average age metrics
- **User Demographics**: Gender distribution with visual progress bars
- **Recent Users**: Latest registered users with avatars and role badges
- **Top Departments**: Most common user departments ranked by user count
- **Top Locations**: User distribution by state/location
- **Responsive Design**: Optimized for desktop and mobile devices

### Data Management

- **Advanced Data Table**: Sortable, filterable user data table using TanStack Table
- **Search Functionality**: Real-time search across user names and details
- **Gender Filtering**: Faceted filter for male/female users
- **Pagination**: Customizable page sizes (10, 20, 50, 100 items per page)
- **Loading States**: Skeleton loaders for better user experience
- **Error Handling**: Comprehensive error states and user feedback

### Technical Features

- **Modern UI Components**: Built with Radix UI primitives and Tailwind CSS
- **State Management**: Redux Toolkit for efficient state handling
- **API Integration**: Axios-based API calls with RTK Query
- **TypeScript**: Full type safety throughout the application
- **Responsive Sidebar**: Collapsible navigation with smooth animations
- **Code Quality**: ESLint configuration with TypeScript support
- **Git Hooks**: Husky pre-commit hooks with lint-staged

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **State Management**: Redux Toolkit & RTK Query
- **UI Components**: Radix UI
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Data Table**: TanStack Table
- **HTTP Client**: Axios
- **Routing**: React Router DOM

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/kkeshavv18/dashboard-application.git
   cd dashboard-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup** (if needed)

 Create a `.env` file:

```env
VITE_API_BASE_URL=https://dummyjson.com
```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Build for production**

   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
dashboard-app/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── data/          # Data table components
│   │   ├── global/        # Global layout components (Sidebar)
│   │   ├── home/          # Dashboard home components
│   │   ├── shared/        # Shared components (Table, Filters, etc.)
│   │   └── ui/            # Base UI components (shadcn/ui)
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility libraries
│   ├── pages/             # Page components
│   ├── services/          # API service functions
│   ├── store/             # Redux store and slices
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── .env                   # Environment variables
├── .gitignore            # Git ignore rules
├── components.json       # shadcn/ui configuration
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── README.md             # Project documentation
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks
- `npm run prepare` - Set up Husky git hooks

## 🎨 UI Components

The application uses a comprehensive set of UI components:

### Core Components

- **Sidebar**: Collapsible navigation with trigger
- **Data Table**: Advanced table with sorting, filtering, and pagination
- **Cards**: Information display cards with headers and content
- **Badges**: Status and role indicators
- **Avatars**: User profile images with fallbacks
- **Progress Bars**: Visual data representation
- **Buttons**: Interactive elements with variants
- **Inputs**: Form inputs and search fields

### Layout Components

- **Pagination**: Custom pagination with page size controls
- **Faceted Filters**: Multi-select filter dropdowns
- **Search Input**: Debounced search functionality
- **Skeleton Loaders**: Loading state placeholders

## 🔌 API Integration

The application integrates with the [DummyJSON API](https://dummyjson.com/) for user data:

- **Endpoint**: `https://dummyjson.com/users`
- **Features**: Filtering, searching, pagination support
- **Caching**: RTK Query provides intelligent caching and background updates
- **Error Handling**: Comprehensive error states and retry logic

## 🎯 Key Features Explained

### Dashboard Analytics

The home dashboard provides real-time insights into user data:

- **Statistics Cards**: Key metrics at a glance
- **Demographics**: Gender and role distribution
- **Recent Activity**: Latest user registrations
- **Geographic Insights**: User distribution by location and department

### Data Table Functionality

The data page offers powerful data management:

- **Global Search**: Search across all user fields
- **Gender Filtering**: Filter users by gender
- **Pagination**: Navigate through large datasets efficiently
- **Responsive Design**: Table adapts to different screen sizes


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Built with ❤️ using React, TypeScript, and modern web technologies.
