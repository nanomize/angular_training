import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class NavService {

  selectedMenuItem: string = 'Home';

  getMenuItemAsync(): Observable<string>{
    return new Observable((observer: Observer<string>) => {
      observer.next(this.selectedMenuItem)
    });
  }

}
