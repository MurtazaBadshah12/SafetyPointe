import { Component } from '@angular/core';

import { DocumentsPage } from '../documents/documents';
import { StorePage } from '../store/store';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DocumentsPage;
  tab3Root = StorePage;
  tab4Root = StorePage;

  constructor() {

  }
}
