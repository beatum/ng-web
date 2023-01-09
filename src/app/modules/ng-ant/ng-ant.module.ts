import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [],
  exports:[
    NzTabsModule,
    NzIconModule
  ],
  imports: [
    CommonModule
  ]
})
export class NgAntModule { }
