import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})

export class LinksComponent implements OnInit {  
   
  items: {}[] = [
    { url: 'https://www.aido.es/estrellas-de-mar/', label: '¿Sabias que...?' },
    { url: 'https://www.instagram.com/nearsolgt/?hl=es-la', label: 'Directorio telefónico Nearsol' },
    { url: 'https://gt.linkedin.com/company/nearsol', label: '8vo aniversario Nearsol' },    
    { url: 'https://www.tiktok.com/@nearsolgt/video/6855360985398578438?lang=es&sender_device=pc&sender_web_id=6906306792935753222&is_from_webapp=1', label: 'Nearsol Family' }    
  ];

  constructor() { }

  ngOnInit(): void {
  }
  

}
