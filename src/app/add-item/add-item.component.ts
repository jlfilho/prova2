import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  @Output() itemAdded = new EventEmitter<string>();
  public newItem: string = '';

  public addItem() {
    if(this.newItem){
      this.itemAdded.emit(this.newItem);
      this.newItem = '';
    }
  }

}
