import './globals.css'

export const metadata = {
  title: 'Pomofocus Clone',
  description: 'A simple pomodoro timer',
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