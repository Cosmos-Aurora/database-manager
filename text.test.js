const { expect } = require('chai');
const DATABASE = require('./index');

describe('DATABASE', () => {
  before(async () => {
    // Initialize the database before running tests
    await DATABASE.init();
  });

  it('should set and get user data', async () => {
    const userData = {
      user: 'Ajay o s',
      number: '12345',
      email: 'ajayos@example.com',
      token: 'hgsdiufytwuw97ry^RTS67u',
      database: 'sqlite',
    };

    // Set user data
    await DATABASE.setUser(userData);

    // Get user data
    const retrievedUserData = await DATABASE.getUser();

    // Check if retrieved data matches the input data
    expect(retrievedUserData).to.deep.equal(userData);
  });

  it('should set and get package data', async () => {
    const pkgData = {
      data: 'some data',
      version: '1.0',
      url: 'https://example.com/package',
      install: 'npm install package',
      update: 'npm update package',
      usage: 'import package from "package"',
    };

    // Set package data
    await DATABASE.setPKG('mypackage', 'mypkginfo', pkgData);

    // Get package data
    const retrievedPkgData = await DATABASE.getDB('mypackage', 'mypkginfo');

    // Check if retrieved data matches the input data
    expect(retrievedPkgData).to.deep.equal(pkgData);
  });

  it('should get undefined token when token is not set', async () => {
    // Ensure that the token is not set initially
    const retrievedToken = await DATABASE.getToken();

    // Check if the retrieved token is undefined
    expect(retrievedToken).to.be.undefined;
  });
});
