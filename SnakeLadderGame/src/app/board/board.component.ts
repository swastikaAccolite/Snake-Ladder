import { Component } from '@angular/core';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  
  constructor(private playersService:PlayersService)
  {
    
  }
  
  public board : number[][] =  this.playersService.getBoard();
  
  
  
}
