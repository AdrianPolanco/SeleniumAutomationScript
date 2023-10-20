import { useContext, useEffect, useState } from 'react'
import SeeIcon from './SeeIcon.jsx'
import { SignUpContext } from '../contexts/SignUpContext.jsx'

const SignUpField = ({
  typeInput,
  placeholder,
  stylesPropsContainer,
  stylesPropsInput,
  borderColor,
  stateName,
  name
}) => {
  const [seePassword, setSeePassword] = useState(true)

  const [state, dispatch] = useContext(SignUpContext)

  const handleChange = (e) => {
    dispatch({ name, field: stateName, value: e.target.value })
  }

  useEffect(() => {
    console.log(state)
  }, [state])

  return typeInput !== 'password' ? (
    <div className={`flex flex-row ${stylesPropsContainer}`}>
      <input
        type={typeInput}
        placeholder={placeholder}
        className={`border-solid border rounded-md w-full ${stylesPropsInput}`}
        onChange={(e) => {
          handleChange(e)
        }}
      />
    </div>
  ) : seePassword ? (
    <div className={`flex flex-row ${stylesPropsContainer}`}>
      <input
        type={'password'}
        placeholder={placeholder}
        className={`border-solid border border-r-0 rounded-l-md w-full ${stylesPropsInput}`}
        onChange={(e) => {
          handleChange(e)
        }}
      />
      <SeeIcon
        seePassword={seePassword}
        setSeePassword={setSeePassword}
        borderColor={borderColor}
      ></SeeIcon>
    </div>
  ) : (
    <div className={`flex flex-row ${stylesPropsContainer}`}>
      <input
        type={'text'}
        placeholder={placeholder}
        className={`border-solid border border-r-0 rounded-l-md w-full ${stylesPropsInput}`}
        onChange={(e) => {
          handleChange(e)
        }}
      />
      <SeeIcon
        seePassword={seePassword}
        setSeePassword={setSeePassword}
        borderColor={borderColor}
      ></SeeIcon>
    </div>
  )
}

export default SignUpField
