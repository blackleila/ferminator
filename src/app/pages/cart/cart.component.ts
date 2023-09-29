import { Component, OnInit } from "@angular/core";
import { Cart, CartItem } from "src/app/models/cart.model";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        product: "https://via.placeholder.com/150",
        name: "30g Wasserkefir",
        price: "3.99",
        quantity: 1,
        id: 1,
      },
    ],
  };

  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    "product",
    // "name",
    // "price",
    // "quantity",
    // "total",
    // "action",
  ];

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }
}
