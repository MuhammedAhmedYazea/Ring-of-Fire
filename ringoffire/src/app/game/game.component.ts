import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';



@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatButton, MatIcon],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

  pickCardAnimation = false;
  currentCard: string = '';
  game!: Game;

  newGame() {
    this.game = new Game();
  }

  constructor() {
    this.newGame(); // Hier wird ein neues Spiel initialisiert. WICHTIG: Das war nötig, damit meine Funktion läuft, bevor... 
  } // die nächste Funktion geladen wird, die ja auf newGame() zugreifen will. Diese braucht man, um Game zu initialisiren, damit die pop()-Funktion die Daten von game.stack ablesen kann
 
  takeCard() {
    if(!this.pickCardAnimation) {
      
      let currentCardBanana = this.game.stack.pop();
      if (currentCardBanana != undefined) {
        this.currentCard = currentCardBanana;
      } else {
        currentCardBanana;
      }
      this.pickCardAnimation = true;
      
      setTimeout(() => {
        this.game.playedCard.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000);
    }
  }
}
