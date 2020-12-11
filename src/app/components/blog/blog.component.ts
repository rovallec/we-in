import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  items: {}[] = [    
    { title: 'NEARSOL Core Values Award Winners - Results-Driven', icon: 'Lifestyle', comentary: 'Being a person that is RESULTS-DRIVEN means that you are focused and obsessed with achieving a great outcome. You don’t want to just compete; you want to WIN!', writedby: 'Victor Pereda', date: '10/12/2020', img: 'https://mcusercontent.com/fdf0393668a7b20c2604ca9f0/images/b3283996-c5d2-4a15-aaf8-26e9a126693f.png' },
    { title: 'Friendship day', icon: 'Friendship', comentary: 'Friendship is perhaps the most perfect form of love. Unlike ties with family, friendship is one that is chosen, not inherited. And at Nearsol we promote friendship by celebrating it on its day.', writedby: 'Anonimous Writer', date: '30/07/2020', img: 'https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/116276215_1394136550775602_682707329445015573_o.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_ohc=qs77Zi8Yp2gAX9dcFc0&_nc_ht=scontent-mia3-1.xx&oh=1a386d6fe8106001534c8418a773ffd8&oe=5FF524E8' },
    { title: 'Father\'s Day', icon: 'Father', comentary: 'Thank you father, because I know that if you exist, life is a safe place. Because I know that you will be watching my steps no matter how far I go. Because I know that I will have your support, whatever I do and I will be where I am. For showing me that life is a challenge, a challenge and a gift ... thank you Dad! Nearsol family. Because being a father is also a blessing, Congratulations!', writedby: 'Anonimous Writer', date: '17/07/2020', img: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/103936281_1356675064521751_3848722287728773068_o.jpg?_nc_cat=102&ccb=2&_nc_sid=730e14&_nc_ohc=L07wnxE4sf8AX97XY5o&_nc_ht=scontent-mia3-2.xx&oh=ee477b36bf4fd63dfeb4b263fb38c1b8&oe=5FF543C5'}    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
