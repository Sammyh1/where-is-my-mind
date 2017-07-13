import {Component, OnInit} from '@angular/core';
import {ItemsService} from './items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  locations;

  constructor(private itemsService: ItemsService) {
  }

  ngOnInit() {
    this.locations = this.itemsService.getAllLocations();
  }
}
