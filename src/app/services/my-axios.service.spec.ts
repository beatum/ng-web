import { TestBed } from '@angular/core/testing';

import { MyAxiosService } from './my-axios.service';

describe('MyAxiosService', () => {
  let service: MyAxiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAxiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
