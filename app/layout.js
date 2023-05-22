import '../styles/makeUp/index.scss'

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang='en'>
      <body className='m-0 p-0'>{children}</body>
    </html>
  )
}
