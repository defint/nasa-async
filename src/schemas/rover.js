import { schema } from 'normalizr';
import camera from './camera';

const rover = new schema.Entity('rover', {
  cameras: [camera],
});

export default rover;
