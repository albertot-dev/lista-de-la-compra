import { Item } from './../../core/models/item.dto';
import { EventsHandlerService } from './../../core/services/events-handler.service';
import { AddDialogComponent } from './../add-dialog/add-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, private readonly eventsHandler: EventsHandlerService) { }

  ngOnInit() {
  }

  openAddItemDialog(){
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        const newItem = new Item(result);
        this.eventsHandler.addedItem.emit(newItem);
      }
    });
  }

}
