import BaseTestRobot from './baseTestRobot'

class AccountRobot extends BaseTestRobot {
  load () {
    this._load('?controller=my-account')
  }

  isLoaded () {
    this._matchText('.info-account', 'Welcome to your account.')
  }
}

export default AccountRobot
