import { rut } from './chile/rut';
import { ssn } from './usa/ssn';

export default {
  chile: { rut: rut() },
  usa: { ssn: ssn() }
};