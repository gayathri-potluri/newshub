# University Website

A modern university website built with Next.js 14 (App Router) and TailwindCSS.

## Features

- **Modern Design**: Built with TailwindCSS for a responsive, mobile-first design
- **App Router**: Uses Next.js 14 App Router for efficient page routing
- **User Authentication**: Authentication system using NextAuth.js with MongoDB adapter
- **News Management**: CRUD operations for university news articles
- **Event Calendar**: Calendar to display university events using React Big Calendar
- **Admin Panel**: Protected admin area for content management
- **Dark Mode Toggle**: User preference for light/dark mode

## Tech Stack

- **Frontend**: Next.js 14, React, TailwindCSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB Atlas
- **Authentication**: NextAuth.js
- **Slider Component**: Swiper.js
- **Calendar Component**: React Big Calendar

## Pages

- **Home**: Featured news, campus overview, and quick links
- **News**: List of all university news with filtering options
- **Calendar**: University events in a calendar view
- **Profile**: User profile management
- **Admin**: Protected admin area for content management
- **Auth**: Login and signup pages

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn
- MongoDB Atlas account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/university-website.git
   cd university-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

```
/app
  /(auth)
    /login
    /signup
  /profile
  /admin
  /calendar
  /news
  /api
    /auth
    /news
    /events
    /users
/components
  Header.jsx
  Footer.jsx
  SidePanel.jsx
  HeroSlider.jsx
  NewsCard.jsx
  CalendarView.jsx
/lib
  dbConnect.js
  authOptions.js
/models
  User.js
  News.js
  Event.js
/public
  /images
```

## Future Enhancements

- Real-time notifications for new news articles
- Student portal with grades and course materials
- Application system for prospective students
- Faculty directory and profiles
- Campus tour virtual experience

## License

This project is licensed under the MIT License - see the LICENSE file for details.
