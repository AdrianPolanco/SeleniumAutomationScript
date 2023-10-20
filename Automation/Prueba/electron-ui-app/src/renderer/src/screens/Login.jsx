import LoginField from '../components/LoginFields.jsx'
import IconImage from '../assets/yarilyn.jpeg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import EnabledCustomButton from '../components/DisabledButton.jsx'
import LoginIcon from '../components/LoginIcon.jsx'

const Login = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center">
      <section className="w-3/4 flex flex-col items-center gap-12">
        <img src={IconImage} className="w-2/12"></img>
        <article className="flex flex-row gap-2 items-center">
          <LoginIcon />
          <h4 className="text-2xl font-semibold text-blue-400 font-onest p-0 h-3/4">Sign in</h4>
        </article>

        <form className="w-full flex flex-col items-center gap-10">
          <div className="flex flex-row gap-14 place-content-center w-full">
            <label htmlFor="login-username-input">E-mail:</label>
            <LoginField
              typeInput={'email'}
              placeholder={'Input your email'}
              stylesPropsContainer={'w-1/2'}
              stylesPropsInput={'p-1 border-blue-500'}
            />
          </div>

          <div className="flex flex-row gap-9 place-content-center w-full">
            <label htmlFor="login-password-input">Password:</label>
            <LoginField
              typeInput={'password'}
              placeholder={'Input your password'}
              stylesPropsContainer={'w-2/4'}
              stylesPropsInput={'p-1 border-blue-500'}
              borderColor={'#3B82F6'}
            />
          </div>
          <Link to={'/sign-up'} className="text-blue-400 underline hover:text-blue-500">
            You do not have an account? Sign up
          </Link>
          <Link className="text-blue-400 underline hover:text-blue-400">
            Forgot password? Recovery it here
          </Link>
          <EnabledCustomButton
            text={'Access'}
            padding={'10px'}
            borderRadius={'5px'}
            defaultBackgroundColor={'#60A5FA'}
            defaultTextColor={'white'}
            hoverBackgroundColor={'white'}
            hoverTextColor={'#60A5FA'}
            hoverBorderColor={'#60A5FA'}
          />
        </form>
      </section>
    </section>
  )
}

export default Login
