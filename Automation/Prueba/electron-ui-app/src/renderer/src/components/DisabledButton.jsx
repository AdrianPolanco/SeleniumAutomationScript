import { useContext, useEffect, useState } from 'react'
import { SignUpContext } from '../contexts/SignUpContext'
import { validateButton } from '../functions/validateSignUpFields'

const DisabledCustomButton = ({
  defaultBackgroundColor,
  defaultTextColor,
  hoverBackgroundColor,
  disabledBackgroundColor,
  hoverTextColor,
  hoverBorderColor,
  borderRadius,
  padding,
  text
}) => {
  const [hover, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const [state, dispatch] = useContext(SignUpContext)

  const Verify = () => {
    
  }

  useEffect(() => {
    console.log('Desde el button')
    console.log(state)
  })

  const defaultButtonStyle = {
    backgroundColor: defaultBackgroundColor,
    color: defaultTextColor,
    padding,
    borderRadius,
    boxShadow: '0 10px 30px -3px rgba(0,0,0, 0.5)'
  }

  const hoverButtonStyle = {
    backgroundColor: hoverBackgroundColor,
    color: hoverTextColor,
    padding,
    borderRadius,
    borderColor: hoverBorderColor,
    borderStyle: 'solid',
    borderWidth: '1px',
    boxShadow: '0 10px 30px -3px rgba(0,0,0, 0.5)'
  }

  const activeButtonStyle = {
    backgroundColor: hoverBackgroundColor,
    color: hoverTextColor,
    padding,
    borderRadius,
    borderColor: hoverBorderColor,
    borderStyle: 'solid',
    borderWidth: '1px',
    boxShadow: 'inset 5px 5px 10px 0 rgba(0, 0, 0, 0.1)'
  }

  const disabledButtonStyle = {
    backgroundColor: disabledBackgroundColor,
    color: defaultTextColor,
    padding,
    borderRadius,
    boxShadow: '0 10px 30px -3px rgba(0,0,0, 0.5)'
  }

  return (
    <button
      style={
        !state || !state.buttonValue
          ? disabledButtonStyle
          : active
          ? activeButtonStyle
          : hover
          ? hoverButtonStyle
          : defaultButtonStyle
      }
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
        setActive(false)
        /*dispatch({ value: !state.buttonValue })*/
      }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      disabled={!state || !state.buttonValue}
      onClick={() => {}}
    >
      {text}
    </button>
  )
}

export default DisabledCustomButton
