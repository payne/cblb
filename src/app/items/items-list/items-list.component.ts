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
  ip = '';

  constructor(private itemService: ItemService, private http: HttpClient) {
    this.items = this.itemService.getItemsList();
  }

  ngOnInit() {
    this.items.subscribe((x) => {
      this.showSpinner = false;
    });
    const url = `https://api.ipify.org/?format=json`;
    this.http.get<IpResponse>(url)
        .subscribe((data) => {
         console.log('EYE CATCHER!!!');
         console.log(data);
         /* tslint:disable */ // Disable all rules for the rest of the file
         this.ip = data['ip'];
				 /* tslint:enable */ // Enable all rules for the rest of the file0
    });
  }

  deleteItems() {
    this.itemService.deleteAll();
  }
}

interface IpResponse {
  ip: string;
}
