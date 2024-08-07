import BaseTestRobot from './baseTestRobot'

class LoginRobot extends BaseTestRobot {
  load () {
    this._load('?controller=authentication&back=my-account')
  }

  setEmail (email) {
    this._fillText('#email', email)
    return this
  }

  setPassword (password) {
    this._fillText('#passwd', password)
    return this
  }

  submitLogin () {
    this._clickButton('#SubmitLogin')
    return this
  }

  matchErrorMsg (err) {
    this._matchText('.alert', err)
  }
}

export default LoginRobot
