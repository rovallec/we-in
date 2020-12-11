import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  options = [
    { value: '1', label: 'Tag 1' },
    { value: '2', label: 'Tag 2' },
    { value: '3', label: 'Tag 3' },
    { value: '4', label: 'Tag 4' },
    { value: '5', label: 'Tag 5' },
    { value: '6', label: 'Tag 6' }
  ];

  icons = [
    { name: 'laugh-beam'},
    { name: 'grin-alt'},
    { name: 'grimace'},
    { name: 'meh'},
    { name: 'meh-blank'}    
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
