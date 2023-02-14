import { Link } from 'react-router-dom'
import { useState } from 'react'

import Tcode4 from '../../assets/Thom.Code-_1_.svg'
import { LayoutComponents } from '../../components/layoutComponents'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const requirementsToEmail = email !== "" ? true : false
  const requirementsToPassword = password.length >= "8" ? true : false
  
  const passwordMessage = password.length < "8" ? "A senha deve conter 8 dígitos" : ""

  const requirementsToBtn =
  requirementsToEmail && requirementsToPassword !== false
    ? 'login-form-btn text-lg border-none rounded-xl text-white leading-[1.2] uppercase justify-center items-center w-full h-12 bg-gradient-to-l from-[#21d4fd] to-[#b721ff] transition-all hover:opacity-80 hover:cursor-pointer'
    : 'opacity-30 login-form-btn text-base border-none rounded-xl text-white leading-[1.2] justify-center items-center w-full h-12 bg-gradient-to-l from-[#21d4fd] to-[#b721ff] transition-all'

  return (
    <LayoutComponents>
      <form className="login-form w-full flex flex-col justify-center items-center text-center">
        <span className="login-form-title block text-3xl text-[azure] leading-[1.2]">
          Bem vindo!
        </span>
        <span className="login-form-title">
          <img className="w-28" src={Tcode4} alt="Thom_Code" />
        </span>

        <div className="wrap-input w-full relative border-b-2 border-[#adadad] mt-[-20px] mb-9">
          <input
            className={
              email !== ''
                ? 'has-val input text-base text-white leading-[1.2] border-none block w-full h-11 bg-transparent px-1.5 focus:outline-0'
                : 'input text-base text-white leading-[1.2] border-none block w-full h-11 bg-transparent px-1.5 focus:outline-0'
            }
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span
            className="
                focus-input absolute block w-full h-full top-0 left-0 pointer-events-none text-[#adadad] text-start
                before:block before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-0.5 before:transition-all before:bg-gradient-to-l from-[#21d4fd] to-[#b721ff]
                after:text-base after:text-[#999999] after:leading-[1.2] after:content-[attr(data-paceholder)] after:block after:w-full after:absolute after:top-4 after:left-0 after:pl-[5px] after:transition-all 
                "
            data-paceholder="Email"
          ></span>
        </div>

        <div className="wrap-input w-full relative border-b-2 border-[#adadad] mb-9">
          <input
            className={
              password !== ''
                ? 'has-val input text-base text-white leading-[1.2] border-none block w-full h-11 bg-transparent px-1.5 focus:outline-0'
                : 'input text-base text-white leading-[1.2] border-none block w-full h-11 bg-transparent px-1.5 focus:outline-0'
            }
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="
                focus-input absolute block w-full h-full top-0 left-0 pointer-events-none text-[#adadad] text-start
                before:block before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-0.5 before:transition-all before:bg-gradient-to-l from-[#21d4fd] to-[#b721ff]
                after:text-base after:text-[#999999] after:leading-[1.2] after:content-[attr(data-paceholder)] after:block after:w-full after:absolute after:top-4 after:left-0 after:pl-[5px] after:transition-all
                "
            data-paceholder="Password"
          ></span>
        </div>
        <div className="password-span relative w-full">
          <span className='text-xs text-[#999999] absolute bottom-4 right-[95px]'>{passwordMessage}</span>
        </div>

        <div className="container-login-form-btn pb-3 w-full ">
          <button
            className={requirementsToBtn}
          >
            Login
          </button>
        </div>

        <div className="text-create-login flex justify-center items-center mt-12">
          <span className="text1 text-sm text-[#adadad] leading-[1.5] pr-1">
            Não possui conta?
          </span>

          <Link to="/register" className="text2 text-sm text-[#6a7dfe] leading-[1.5]">
            Criar conta.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  )
}
