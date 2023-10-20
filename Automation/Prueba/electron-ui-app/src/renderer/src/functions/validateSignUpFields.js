const validateName = ({ nameValue }) => {
  const nameRegex = /^[A-Za-z]+ [A-Za-z]{2,}$/

  return nameRegex.test(nameValue)
}

const validateEmail = ({ emailValue }) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

  return emailRegex.test(emailValue)
}
const validatePassword = ({ passwordValue }) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*\d)(?=.*[!@#$%^&*()]).{8,}$/

  return passwordRegex.test(passwordValue)
}

const validateConfirmPassword = ({ passwordValue, confirmPasswordValue }) => {
  return passwordValue === confirmPasswordValue
}

const validateButton = (values) => {
  if (
    validateName(values) &&
    validateEmail(values) &&
    validatePassword(values) &&
    validateConfirmPassword(values)
  ) {
    return true
  } else {
    return false
  }
}

export { validateEmail, validateName, validatePassword, validateConfirmPassword, validateButton }
