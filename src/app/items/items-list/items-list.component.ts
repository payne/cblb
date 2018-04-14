import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemService } from '../shared/item.service';
import { Item } from '../shared/item';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent implements OnInit {

  items: Observable<Item[]>;
  showSpinner = true;
  client_ip = '';

  constructor(private itemService: ItemService, private http: HttpClient) {
    this.items = this.itemService.getItemsList();
  }

  ngOnInit() {
    this.items.subscribe((x) => {
      this.showSpinner = false;
    });
    this.http.get<IpResponse>(`https://api.ipify.org/?format=json`)
        .subscribe((data) => {
         this.client_ip = data['ip'];
    });
  }

  deleteItems() {
    this.itemService.deleteAll();
  }
}

interface IpResponse {
  ip: string;
}
