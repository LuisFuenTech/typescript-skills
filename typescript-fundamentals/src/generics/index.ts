import { User } from '../../types';
import { users } from '../../utils/dataSource';

const purge = <T>(_users: T[]): T[] => {
  return [..._users].splice(2, _users.length);
};

const purgedUsers: User[] = purge<User>(users);
console.log(purgedUsers);
