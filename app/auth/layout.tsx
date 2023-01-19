interface IProps {
    children: React.ReactNode
}

export default function AuthLayout({children}:IProps) {
    return (
      <html>
        <head />
        <body className="flex justify-center items-center h-screen">{children}</body>
      </html>
    )
  }