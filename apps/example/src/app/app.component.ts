import { Component, OnInit } from '@angular/core';

import { Plugins } from '@capacitor/core';

const { Device } = Plugins;

@Component({
  selector: 'cap-repro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'example';

  info: any;

  async ngOnInit() {
    this.info = await Device.getInfo();
  }
}
