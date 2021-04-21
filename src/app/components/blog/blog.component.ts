import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  items: {}[] = [    
    { title: 'NEARSOL Core Values Award Winners - Results-Driven', icon: 'Lifestyle', comentary: 'Being a person that is RESULTS-DRIVEN means that you are focused and obsessed with achieving a great outcome. You don’t want to just compete; you want to WIN!', writedby: 'Victor Pereda', date: '10/12/2020', img: 'https://mcusercontent.com/fdf0393668a7b20c2604ca9f0/images/b3283996-c5d2-4a15-aaf8-26e9a126693f.png' },
    { title: 'Friendship day', icon: 'Friendship', comentary: 'Friendship is perhaps the most perfect form of love. Unlike ties with family, friendship is one that is chosen, not inherited. And at Nearsol we promote friendship by celebrating it on its day.', writedby: 'Anonimous Writer', date: '30/07/2020', img: 'https://scontent.fgua3-2.fna.fbcdn.net/v/t1.6435-9/131432553_1517796005076322_6320577936085176741_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=JAKr7UP6TfgAX_VBvaa&_nc_ht=scontent.fgua3-2.fna&oh=203363f09c562efb09634d52ffb3dace&oe=60A2FB92' },
    { title: 'Father\'s Day', icon: 'Father', comentary: 'Thank you father, because I know that if you exist, life is a safe place. Because I know that you will be watching my steps no matter how far I go. Because I know that I will have your support, whatever I do and I will be where I am. For showing me that life is a challenge, a challenge and a gift ... thank you Dad! Nearsol family. Because being a father is also a blessing, Congratulations!', writedby: 'Anonimous Writer', date: '17/07/2020', img: 'https://scontent.fgua3-2.fna.fbcdn.net/v/t1.6435-9/103961029_1356676264521631_7954217515106165473_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=DhdCYDgxmkYAX83ZZyI&_nc_ht=scontent.fgua3-2.fna&oh=df7f0326e3ab6b8cc92baff69d227faf&oe=60A5D1EB'}
  ]
  icon1: boolean = false;
  icon2: boolean = false;
  icon3: boolean = false;
  icon4: boolean = false;
  icon5: boolean = false;
  miniicon1: boolean = false;
  miniicon2: boolean = false;
  miniicon3: boolean = false;
  miniicon4: boolean = false;
  miniicon5: boolean = false;



  constructor() { }

  ngOnInit(): void {
  }  

  setIcon1(){
    this.icon1 = !this.icon1;
  }
  
  setIcon2(){
    this.icon2 = !this.icon2;
  }

  setIcon3(){
    this.icon3 = !this.icon3;
  }

  setIcon4(){
    this.icon4 = !this.icon4;
  }

  setIcon5(){
    this.icon5 = !this.icon5;
  }

  setMiniIcon1(){
    this.miniicon1 = !this.miniicon1;
  }
  
  setMiniIcon2(){
    this.miniicon2 = !this.miniicon2;
  }

  setMiniIcon3(){
    this.miniicon3 = !this.miniicon3;
  }

  setMiniIcon4(){
    this.miniicon4 = !this.miniicon4;
  }

  setMiniIcon5(){
    this.miniicon5 = !this.miniicon5;
  }
}
