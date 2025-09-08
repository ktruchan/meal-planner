import {Component} from '@angular/core';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.html',
  imports: [
    MatButton,
  ],
  styleUrl: './planner.scss'
})
export class Planner {

  readonly days = ['Poniedzialek', 'Wtorek', 'Sroda', 'Czwartek', 'Piatek', 'Sobota', 'Niedziela'];
  readonly slots = ['Sniadanie', 'Obiad', 'Kolacja'];

  public hasRecipe(day: string, slot: string): boolean{
    return false;
  }
}
