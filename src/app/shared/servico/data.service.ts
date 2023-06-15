import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private searchData = new BehaviorSubject<string>('');


  constructor() { }

  setSearchData(data: string) {
    this.searchData.next(data);
  }

  getSearchData() {
    return this.searchData.asObservable();
  }
}
