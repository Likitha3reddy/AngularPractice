import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,CommonModule,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public variableStyle:any={"color":"yellow","background":"hotpink","border":"5px solid black","padding":"5rem "}
  /*public variableColor:any="red"
    blue(){
      this.variableColor="blue";
    }
    green(){
      this.variableColor="green";
    }
    red(){
      this.variableColor="red";
    }
  
  Another method 
  */
 public value:number=0;
  public variableColor:any={red:true,green:false,blue:false};
  public variableSwitch:any="node";
  blue(){
    this.variableColor={red:false,green:false,blue:true};
  }
  green(){
    this.variableColor={red:false,green:true,blue:false};
  }
  red(){
    this.variableColor={red:true,green:false,blue:false};
  }

  /**
   * inc and dec and reset buttons
   */
  inc(){
    this.value=this.value+1;
  }
  dec(){
    this.value=this.value-1;
  }
  reset(){
    this.value=0;
  }

}
