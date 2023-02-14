import { useState } from 'react'
import './styles/inputFocus.css'
import Tcode4 from '../public/Thom.Code-_1_.svg'


function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className='h-screen w-screen bg-[#111]'>

      <div className="container max-w-7xl mx-auto">
        <div className="container-login w-full min-h-screen flex flex-wrap items-center justify-center p-4">
          <div className="warp-login w-[390px] bg-gray-600 rounded-xl overflow-hidden pt-20 pb-8 px-14 shadow">
            <form className="login-form w-full flex flex-col justify-center items-center text-center">
              <span className="login-form-title block text-3xl text-[azure] leading-[1.2]">Bem vindo!</span>
              <span className="login-form-title">
                <img className='w-28' src={Tcode4} alt="Thom_Code" />
              </span>

              <div className="wrap-input w-full relative border-b-2 border-[#adadad] mb-9">
                <input 
                className={email !== "" ? 'has-val input text-base text-white leading-[1.2] border-none block w-full h-11 bg-transparent px-1.5 focus:outline-0' : 'input text-base text-white leading-[1.2] border-none block w-full h-11 bg-transparent px-1.5 focus:outline-0'} 
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
                <span 
                className="
                focus-input absolute block w-full h-full top-0 left-0 pointer-events-none text-[#adadad] text-start
                before:block before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-0.5 before:transition-all before:bg-gradient-to-l from-[#21d4fd] to-[#b721ff]
                after:text-base after:text-[#999999] after:leading-[1.2] after:content-[attr(data-paceholder)] after:block after:w-full after:absolute after:top-4 after:left-0 after:pl-[5px] after:transition-all 
                " data-paceholder="Email"></span>
              </div>

              <div className="wrap-input w-full relative border-b-2 border-[#adadad] mb-9">
                <input 
                className={password !== "" ? 'has-val input text-base text-white leading-[1.2] border-none block w-full h-11 bg-transparent px-1.5 focus:outline-0' : 'input text-base text-white leading-[1.2] border-none block w-full h-11 bg-transparent px-1.5 focus:outline-0'} 
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                 />
                <span 
                className="
                focus-input absolute block w-full h-full top-0 left-0 pointer-events-none text-[#adadad] text-start
                before:block before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-0.5 before:transition-all before:bg-gradient-to-l from-[#21d4fd] to-[#b721ff]
                after:text-base after:text-[#999999] after:leading-[1.2] after:content-[attr(data-paceholder)] after:block after:w-full after:absolute after:top-4 after:left-0 after:pl-[5px] after:transition-all
                " data-paceholder="Password"></span>
              </div>

              <div className="container-login-form-btn pb-3 w-full ">
                <button className="login-form-btn text-lg border-none rounded-xl text-white leading-[1.2] uppercase justify-center items-center w-full h-12 bg-gradient-to-l from-[#21d4fd] to-[#b721ff] transition-all
                hover:opacity-80 hover:cursor-pointer
                ">Login</button>
              </div>

              <div className="text-create-login flex justify-center items-center mt-12">
                <span className="text1 text-sm text-[#adadad] leading-[1.5] pr-1">Não possui conta?</span>

                <a href="#" className="text2 text-sm text-[#6a7dfe] leading-[1.5]">Criar conta.</a>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
