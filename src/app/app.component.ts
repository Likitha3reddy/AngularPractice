import { Component } from '@angular/core';

// import { NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { DirectiveArrayComponent } from './directive-array/directive-array.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DirectiveArrayComponent,FormsModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'varTypeLifeCycles';
  
}
