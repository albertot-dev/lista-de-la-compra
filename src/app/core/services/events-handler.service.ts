import { Item } from './../models/item.dto';
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsHandlerService {

 readonly addedItem: EventEmitter<Item> = new EventEmitter();

}
