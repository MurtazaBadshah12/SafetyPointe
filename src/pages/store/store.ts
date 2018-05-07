import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StoreServiceProvider } from '../../providers/store-service/store-service';


@Component({
  selector: 'page-store',
  templateUrl: 'store.html'
})
export class StorePage {
  items = [];
  constructor(public navCtrl: NavController, public store: StoreServiceProvider) {
    this.getposts(5);
  }

  getposts(limit) {
    this.store.getPosts(limit).subscribe(res => this.setPosts(res));
  }

  setPosts(res) {
    this.items = res;
  }

}
