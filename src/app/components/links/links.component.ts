import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})

export class LinksComponent implements OnInit {  
   
  items: {}[] = [
    { url: 'https://www.facebook.com/nearsolgt/', label: 'Facebook' },
    { url: 'https://www.instagram.com/nearsolgt/?hl=es-la', label: 'Instagram' },
    { url: 'https://gt.linkedin.com/company/nearsol', label: 'Linkedin' },
    { url: 'https://twitter.com/nearsol?lang=es', label: 'Twitter' },
    { url: 'https://www.youtube.com/channel/UC_QcWRKM7db2yVbjd3gOvOg', label: 'Youtube' },
    { url: 'https://www.tiktok.com/@nearsolgt?lang=es', label: 'TikTok' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  

}
