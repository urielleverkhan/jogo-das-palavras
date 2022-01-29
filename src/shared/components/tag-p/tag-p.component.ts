import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-p',
  templateUrl: './tag-p.component.html',
  styleUrls: ['./tag-p.component.scss']
})
export class TagPComponent implements OnInit {
  @Input() image: string = "../../img/familia/familia.jpg"; 
  @Input() texto: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
