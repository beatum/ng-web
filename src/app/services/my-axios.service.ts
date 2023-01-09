import { Injectable } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import { NotificationService } from './notification-service';


@Injectable({
  providedIn: 'root'
})
export class MyAxiosService {
  instance = axios.create();
  constructor(private notificationService: NotificationService, private router: Router) {

    this.instance.defaults.timeout = 2000;
    this.instance.defaults.headers.post['Content-Type'] = 'application/json';

    // Add a request interceptor
    this.instance.interceptors.request.use(function (config) {
      let { url } = config;
      //token validation
      if (!url?.match(/^(api\/users\/login)|(assets\/mock\/user.json)$/i) != null) {
        let headers: any = config.headers;
        let token = localStorage.getItem('token');
        if (null == token) {
          router.navigate(['/login']);
        } else {
          headers.Authorization = token;
        }
      }
      return config;
    }, function (error) {
      notificationService.error("Axios", error.message);
      return Promise.reject(error);
    });

    // Add a response interceptor
    this.instance.interceptors.response.use(function (response) {
      let { data } = response;

      return response;
    }, function (error) {
      notificationService.error("System", error.message);
      return Promise.reject(error);
    });
  }

  //get axious instance
  public getAxiousInstance() {
    return this.instance;
  }

}
