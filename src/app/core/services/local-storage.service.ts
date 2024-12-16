import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class LocalStorage {
  
  public set(key: string, value: string): void {
    if (key && value) localStorage.setItem(key, value);
  }

  public get<T>(key: string): T | null {
    if (key) {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) as T : null;
    }
    return null;
  }

  public remove<T>(key: string): void {
    localStorage.removeItem(key);
  }

}