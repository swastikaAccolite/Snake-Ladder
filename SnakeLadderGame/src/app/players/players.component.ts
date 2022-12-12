import { Component } from '@angular/core';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {

  constructor(private playService:PlayersService)
  {}

  public diceNumber1?:number=0;
  public diceNumber2?:number=0;
  public disable1:boolean=false;
  public disable2:boolean=false;

  public pos1 :  number=0;
  public pos2 :  number=0;
  generateNumber1()
  {
    this.diceNumber1=this.playService.rollDice();
    this.disable1=true;
    this.disable2=false;
    this.pos1+=this.diceNumber1;
    console.log(this.pos1);
    this.pos1 = this.playService.checkPos(this.pos1-1);
    
    console.log( "Updated Position for Player 1 " + this.pos1);
    
  }
  generateNumber2()
  {
    this.diceNumber2=this.playService.rollDice();
    this.disable1=false;
    this.disable2=true;
    this.pos2+=this.diceNumber2;
    console.log(this.pos2);
    this.pos2 = this.playService.checkPos(this.pos2-1);

    console.log( "Updated Position is for player 2 " + this.pos2);


    game :
  }

}
