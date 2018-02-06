import { schema } from 'normalizr';

const camera = new schema.Entity('camera',{},{
  idAttribute: 'full_name'
});

export default camera;
