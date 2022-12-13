import { Component, EventEmitter, Output } from '@angular/core';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {

  constructor(private playService:PlayersService)
  {}
  @Output() gotop1 =new EventEmitter();
  @Output() gotop2 =new EventEmitter();

  public diceNumber1?:number=0;
  public diceNumber2?:number=0;
  public disable1:boolean=false;
  public disable2:boolean=false;

  public pos1 :  number=0;
  public pos2 :  number=0;

  public winner : boolean = false;
  generateNumber1()
  {
    this.diceNumber1=this.playService.rollDice();
    
    this.pos1+=this.diceNumber1;
    if(this.pos1 >= 100)
    {
      // console.log(111111111111111);
      alert("Player 1 has won🎉");
      this.pos1=0;
      this.pos2=0;
    }
    //console.log(this.pos1);
    this.pos1 = this.playService.checkPos(this.pos1-1);
    
    this.disable1=true;
    this.disable2=false;
    // if(this.diceNumber1==6)
    // {
    //   this.diceNumber1=this.playService.rollDice();
    //   this.pos1+=this.diceNumber1;
    // //console.log(this.pos1);
    //   this.pos1 = this.playService.checkPos(this.pos1-1);
    //   this.disable1=true;
    // this.disable2=false;
    // }
    
    
    console.log( "Updated Position for Player 1 " + this.pos1);
    this.gotop1.emit(this.pos1);
    
  }
  generateNumber2()
  {
    this.diceNumber2=this.playService.rollDice();
    this.disable1=false;
    this.disable2=true;
    this.pos2+=this.diceNumber2;
    if(this.pos2 >= 100)
    {
      alert("Player 2 has won🎉");
      this.pos1=0;
      this.pos2=0;
    }
   // console.log(this.pos2);
    this.pos2 = this.playService.checkPos(this.pos2-1);
    

    console.log( "Updated Position is for player 2 " + this.pos2);
    this.gotop2.emit(this.pos2);

  }

// showWinner(name : string)
// {
// this.winner = true;
//  alert("Winner is "+name );
// }

}
