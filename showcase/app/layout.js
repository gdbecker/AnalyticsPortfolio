import './styles/globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

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
        <Footer />

      </body>
    </html>
  )
}