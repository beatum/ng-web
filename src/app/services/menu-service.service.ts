import { Injectable } from '@angular/core';
import { MyAxiosService } from './my-axios.service';

@Injectable({
  providedIn: 'root'
})

export class MenuServiceService {

  private axiousInstance; 
  constructor(private myAxiosService:MyAxiosService ) { 
      this.axiousInstance = myAxiosService.getAxiousInstance();
  }

  //gets menu items
  public getMenuItems() {
      return this.axiousInstance.get('assets/mock/menus.json');
  }

}
