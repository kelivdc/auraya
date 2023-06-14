import './globals.css'
// import { Roboto } from 'next/font/google'

// const font = Roboto({ subsets: ['latin'] })

export const metadata = {
  title: 'Auraya Suites Apartemen - Tangerang',
  description: 'Tersedia beberapa tipe unit apartemen dimulai harga 500jtan, Alam Sutera Boulevard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
