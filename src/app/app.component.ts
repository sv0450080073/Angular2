import { Component, ViewChild} from '@angular/core';
import { TutorialComponent } from 'Tutorial.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls:['./app.component.css']
  /*template :`
 <input type="text" #textName (keyup)="0" />
 <p>Agree number:{{agree}}. Disgree:{{disgree}} </p>
 <button (click)="changeName()">Change name </button>

  <my-tutorial *ngFor ="let person of names" [name]="person" (onVote)="parentVote($event)"></my-tutorial>`,
  styleUrls: ['./app.component.css']*/
})
export class AppComponent {



  /*title = 'Mạnh Nguyễn';
  public cities=[{Id:1,Name:"HaNoi"},{Id:2,Name:"HCM"}];

  onSubmit(value:any)
  {
     console.log(value);
  }*/
 /* public agree:number=0;
  public disgree:number =0;
  public names =['A','B','C','D','E'];


  @ViewChild(TutorialComponent)
  private tutorialComponent:TutorialComponent;
  parentVote(agree:boolean)
  {
    if (agree) this.agree++;
    else this.disgree++;

  }
  changeName()
  {
    this.tutorialComponent.setName('manhmanh');
    

  }*/

}
