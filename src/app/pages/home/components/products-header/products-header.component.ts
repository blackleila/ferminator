import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: 'products-header.component.html',
  styles: [
  ]
})
export class ProductsHeaderComponent {
  // Anzahl der Spalten in einer Zeile
  @Output() columnsCountChange = new EventEmitter<number>();
sort = 'Preis absteigend';
itemsShowCount = 12;

onSortUpdated(newSort: string): void{
  this.sort = newSort;
}

onItemsUpdated(count: number): void{
  this.itemsShowCount = count;
  }

onColumnsUpdated(colsNum: number): void{
this.columnsCountChange.emit(colsNum);
}
}