import { ObjectId } from 'mongodb';
import { setData, setSessions } from '../dataStore';

export function clear() {
  setSessions([]);
  setData({
    users: [],
    spots: [],
    histories: [],
    _id: new ObjectId(),
  });
  return {};
}
