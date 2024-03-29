import { ssn } from '../../../../../src/fakes/id/usa/ssn';

describe('Testing USA SSN id', () => {
  describe('Testing any', () => {
    describe('When using default option', () => {
      test('Should be able to return ssn id', () => {
        const id = ssn().any();
        expect(id).toMatch(/^(77[0-2]|7[0-6][0-9]|[0-6]\d\d)-\d{2}-\d{4}$/);
      });
    });

    describe('When using custom option', () => {
      test('Should be able to return ssn id', () => {
        const id = ssn().any({ formatted: false });
        expect(id).toMatch(/^(77[0-2]|7[0-6][0-9]|[0-6]\d\d)\d{6}$/);
      });
    });
  });

  describe('Testing last4', () => {
    test('Should be able to return last 4 digits', () => {
      expect(ssn().last4()).toMatch(/^\d{4}$/);
    });
  });
});