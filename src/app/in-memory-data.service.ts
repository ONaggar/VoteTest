import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { username: 'user1', password: '1234' },
      { username: 'user2', password: '1234' },
      { username: 'user3', password: '1234' },
      { username: 'user4', password: '1234' },
    ];
    return {users};
  }
}