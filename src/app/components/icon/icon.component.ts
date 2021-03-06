import { Component, OnInit, Input } from '@angular/core';

import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
})
export class IconComponent implements OnInit {
  @Input() iconName: string;

  faCircle = faCircle;
  faPen = faPen;
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}
}
