import Image from 'next/image'
import userLogin from '../../../public/user-login.svg'
import ActiveLink from './ActiveLink'
import style from './styles.module.css'

const menuLogin = [
  {
    text: 'Ingresar',
    href: '/auth/login'
  },
  {
    text: 'Registrarse',
    href: '/auth/register'
  }
]

function ContentLogin() {
  return (
    <div className="flex flex-row relative">
      <div
        className={`w-[353px] h-[643px] flex flex-col rounded-l-lg ${style['content-style-login']}`}
      >
        <Image
          src={userLogin}
          alt="user-login"
          className="flex absolute -bottom-32 -left-64"
        ></Image>
      </div>
      <div className="rounded-r-lg w-auto p-4 bg-white-alternative flex flex-col items-center">
        <div className="w-[250px] h-10 bg-gray-grayLight rounded-full">
          {menuLogin.map(({ text, href }) => (
            <ActiveLink key={href} text={text} href={href} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContentLogin
