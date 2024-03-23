import { Component } from '@angular/core';
import { SocialService } from "./social.service";

type Friend = {
  name: string;
  likeCount: number;
};

@Component({
  selector: 'app-codility',
  templateUrl: './codility.component.html',
  styleUrls: ['./codility.component.scss']
})
export class CodilityComponent {
  topFriends: Friend[] = [];
  isLiking: { [name: string]: boolean } = {};
  error: string | null = null;

  constructor(private socialService: SocialService) {}

  ngOnInit() {
    this.getTopFriends();
  }

  getTopFriends() {
    this.socialService.getFriends().subscribe(
      (response: any) => {
        const friends: Friend[] = response;
        this.topFriends = friends.sort((a, b) => b.likeCount - a.likeCount).slice(0, 5);
      },
      (error: any) => {
        this.error = 'Fetching friends has failed.';
        console.log(error);
      }
    );
  }

  likeFriend(friend: Friend) {
    const friendName = friend.name;
    this.isLiking[friendName] = true;
    this.socialService.likeFriend().subscribe(
      (response: any) => {
        friend.likeCount = response.likeCount;
        this.topFriends.sort((a, b) => b.likeCount - a.likeCount);
        this.isLiking[friendName] = true;
      },
      (error: any) => {
        this.error = 'Liking friend has failed.';
        this.isLiking[friendName] = false;
        console.log(error);
      }
    );
    console.log('---> 2', this.isLiking);
  }
}
