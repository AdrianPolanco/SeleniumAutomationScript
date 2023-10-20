import { createContext, useReducer, useEffect } from 'react'

const initialFormState = {
  name: {
    nameValue: '',
    clicked: false
  },
  email: {
    emailValue: '',
    clicked: false
  },
  password: {
    passwordValue: '',
    clicked: false
  },
  confirmPassword: {
    confirmPasswordValue: '',
    clicked: false
  },
  buttonValue: false
}

export const SignUpContext = createContext([])

const signUpReducer = (state, action) => {
  if (!action.field) {
    return {
      ...state,
      buttonValue: action.value
    }
  } else {
    return {
      ...state,
      [action.name]: {
        [action.field]: action.value,
        clicked: true
      }
    }
  }
}

const SignUpState = ({ children }) => {
  const [state, dispatch] = useReducer(signUpReducer, initialFormState)

  return <SignUpContext.Provider value={[state, dispatch]}>{children}</SignUpContext.Provider>
}

export default SignUpState
