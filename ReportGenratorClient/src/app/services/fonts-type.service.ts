import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FontsTypeService {

  fontsTypeList = [
    { Id: 1, Name: 'Arial' },
    { Id: 2, Name: 'Calbiri' },
    { Id: 3, Name: 'Candara' }
  ];

  constructor() { }
}
