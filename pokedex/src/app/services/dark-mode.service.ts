import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  constructor() { }
  private isDark = false;

  toggleDark() {
    this.isDark = !this.isDark;
  }

  getDark() {
    return this.isDark;
  }
}
