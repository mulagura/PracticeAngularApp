import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  friendsData = [
    { name: 'John', likeCount: 5 },
    { name: 'Mary', likeCount: 9 },
    { name: 'Elon', likeCount: 12 },
    { name: 'Jeff', likeCount: 2 },
    { name: 'Sophie', likeCount: 15 },
    { name: 'Mia', likeCount: 3 },
    { name: 'Chloe', likeCount: 25 },
    { name: 'Tom', likeCount: 11 },
    { name: 'Kate', likeCount: 24 },
    { name: 'Amy', likeCount: 1 },
    { name: 'Mike', likeCount: 35 },
    { name: 'Andrew', likeCount: 23 },
  ];
  likeCountData = { likeCount: 36 };

  constructor() { }

  getFriends(): Observable<any> {
    return of(this.friendsData); 
  }

  likeFriend(): Observable<any> {
    return of(this.likeCountData);
  }
}
