import accountRobot from "../robots/accountRobot";
import loginRobot from "../robots/loginRobot";

describe('Login', () => {
  const login = new loginRobot();
  const account = new accountRobot();

  beforeEach(() => {
    login.load();
  });

  it('Missing email and password', () => {
    login
      .submitLogin()
      .matchErrorMsg('An email address required.');
  });

  it('Missing password', () => {
    login
      .setEmail('banana@fruit.com')
      .submitLogin()
      .matchErrorMsg('Password is required.');
  });

  it('Wrong password', () => {
    login
      .setEmail('banana@fruit.com')
      .setPassword('banana')
      .submitLogin()
      .matchErrorMsg('Authentication failed.');
  });

  it('Successful login attempt', () => {
    login
      .setEmail('banana@fruit.com')
      .setPassword(Cypress.env('ACCOUNT_PASSWORD'))
      .submitLogin();
    account
      .isLoaded();
  });
})