import { EventsHandlerService } from './../../core/services/events-handler.service';
import { Item } from './../../core/models/item.dto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  itemList: Item[];

  constructor(private readonly eventsHandler: EventsHandlerService) {
    this.itemList = new Array<Item>();

    this.eventsHandler.addedItem.subscribe((item: Item) => {
      this.itemList.push(item);
    })

  }

  ngOnInit() {
  }

}
