import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 'user1', password: '1234' },
      { id: 'user2', password: '1234' },
      { id: 'user3', password: '1234' },
      { id: 'user4', password: '1234' }
    ];
    return {users};
  }
}