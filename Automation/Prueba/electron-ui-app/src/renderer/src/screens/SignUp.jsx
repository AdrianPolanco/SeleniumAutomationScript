import { Link } from 'react-router-dom'
import SignUpField from '../components/SignUpFields'
import IconImage from '../assets/yarilyn.jpeg'
import DisabledCustomButton from '../components/DisabledButton'
import SignUpIcon from '../components/SignUpIcon'
import SignUpState from '../contexts/SignUpContext'
import { validateEmail } from '../functions/validateSignUpFields'

const SignUp = () => {
  return (
    <form className="w-full flex flex-col items-center gap-8" onSubmit={(e) => e.preventDefault()}>
      <img src={IconImage} className="w-2/12"></img>
      <div className="flex flex-row items-center gap-4">
        <SignUpIcon />
        <h4 className="text-2xl font-semibold font-onest p-0 h-3/4 text-blue-950">Sign up</h4>
      </div>

      <SignUpState>
        <div className="flex flex-row gap-9 place-content-center w-full">
          <label htmlFor="register-name-input">Full name: </label>
          <SignUpField
            typeInput={'text'}
            placeholder={'Input your full name'}
            stylesPropsContainer={'w-2/4'}
            stylesPropsInput={'p-1 border-blue-950'}
            stateName={'nameValue'}
            name={'name'}
          />
        </div>
        <div className="flex flex-row gap-16 place-content-center w-full">
          <label htmlFor="register-email-input">Email: </label>
          <SignUpField
            typeInput={'email'}
            placeholder={'Input your email'}
            stylesPropsContainer={'w-2/4'}
            stylesPropsInput={'p-1 border-blue-950'}
            stateName={'emailValue'}
            name={'email'}
          />
        </div>
        <div className="flex flex-row gap-9 place-content-center w-full">
          <label htmlFor="register-password-input">Password: </label>
          <SignUpField
            typeInput={'password'}
            placeholder={'Input your password'}
            stylesPropsContainer={'w-2/4'}
            stylesPropsInput={'p-1 border-blue-950'}
            stateName={'passwordValue'}
            borderColor={'#172554'}
            name={'password'}
          />
        </div>

        <div className="flex flex-row gap-2 place-content-center w-full">
          <label htmlFor="register-password-input" className=" -ml-8">
            Confirm password:{' '}
          </label>
          <SignUpField
            typeInput={'password'}
            placeholder={'Input your password'}
            stylesPropsContainer={'w-2/4'}
            stylesPropsInput={'p-1 border-blue-950'}
            stateName={'confirmPasswordValue'}
            borderColor={'#172554'}
            name={'confirmPassword'}
          />
        </div>
        <DisabledCustomButton
          text={'Register'}
          padding={'10px'}
          borderRadius={'5px'}
          defaultBackgroundColor={'#172554'}
          defaultTextColor={'white'}
          hoverBackgroundColor={'white'}
          hoverTextColor={'#172554'}
          hoverBorderColor={'#172554'}
          disabledBackgroundColor={'#9CA3AF'}
        />
      </SignUpState>

      <Link to={'/'}>Return to login</Link>
    </form>
  )
}

export default SignUp
