interface IProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: IProps) {
  return (
    <>
      <head />
      <body>
        <section className="flex justify-center items-center h-screen">
          {children}
        </section>
      </body>
    </>
  )
}
