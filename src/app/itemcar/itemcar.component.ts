import { Component, OnInit,PipeTransform, Pipe  } from '@angular/core';
import { DataitemcarService } from '../dataitemcar.service';
import { Item } from '../Item';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-itemcar',
  templateUrl: './itemcar.component.html',
  styleUrls: ['./itemcar.component.css'],

})
export class ItemcarComponent implements OnInit {
  shoppingcar:Item[]=[];
  keys:String[]=[];
  total:number=0;

  constructor(private dataitemcar:DataitemcarService) {
  	this.dataitemcar.initDataCar();

  }

  ngOnInit() {
  	this.keys=Object.keys(this.dataitemcar.item);
  	this.shoppingcar=this.dataitemcar.item;

    this.keys.forEach(element => {

        this.total=this.total+parseFloat(this.shoppingcar[String(element)].subtotal);
    });
    return this.total;
  	
  }

}
