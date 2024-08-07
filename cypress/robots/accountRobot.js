import baseTestRobot from "./baseTestRobot";

class accountRobot extends baseTestRobot {
  load() {
    this._load('?controller=my-account');
  }

  isLoaded() {
    this._matchText('.info-account', 'Welcome to your account.');
  }
}

export default accountRobot;