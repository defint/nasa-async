import { schema } from 'normalizr';
import camera from './camera';
import rover from './rover';

const photo = new schema.Entity('photo', {
  camera,
  rover,
});

export default photo;
