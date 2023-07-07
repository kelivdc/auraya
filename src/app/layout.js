import './globals.css'

export const metadata = {
  title: 'Auraya Suites Apartemen - Tangerang',
  description: 'Tersedia beberapa tipe unit apartemen dimulai harga 500jtan, Alam Sutera Boulevard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Mulish&display=swap" rel="stylesheet" />
      </head>
      <script src="/tawk.js" async />
      <body>{children}</body>
    </html>
  )
}
