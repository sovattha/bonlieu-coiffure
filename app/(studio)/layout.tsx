import '../globals.css'

export const metadata = {
  title: 'Espace administratif | Bonlieu coiffure',
  description: 'Espace administratif du site web du salon de coiffure',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
