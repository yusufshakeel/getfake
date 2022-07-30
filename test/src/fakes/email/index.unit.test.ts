import email from '../../../../src/fakes/email';

describe('Testing email', () => {
  describe('Testing any', () => {
    describe('Using default values', () => {
      test('Should be able to return email', () => {
        const result = email.any();
        expect(result).toMatch(/@example.com$/);
      });
    });

    describe('Using custom values', () => {
      test('Should be able to return email', () => {
        const result = email.any({
          firstName: 'jane',
          middleName: 'super',
          lastName: 'doe',
          randomNumber: 99,
          domain: 'localhost'
        });
        expect(result).toBe('janesuperdoe99@localhost');
      });
    });
  });
});