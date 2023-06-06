import './styles/globals.css'
import Navigation from './components/Navigation'

export const metadata = {
  title: 'Analytics Project Showcase',
  description: 'Showcase for Professional Analytics Projects!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      
        <Navigation />
        {children}

        <footer className="text-center font-interRegular text-sm">
          Coded by <a href="https://github.com/gdbecker/AnalyticsPortfolio/tree/main" target="_blank" className="font-interRegular hover:text-mediumYellow">Garrett Becker</a>.
        </footer>
      </body>
    </html>
  )
}