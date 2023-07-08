import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  public items: string[] = ['Maçã', 'Banana', 'Morango'];

  public onItemAdded(item: string) {
    this.items.push(item);
  }

}
