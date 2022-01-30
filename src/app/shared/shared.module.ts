import { HighlightPipe } from './highlight.pipe';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [HighlightPipe],
  imports: [
    CommonModule
  ],
  exports: [MatIconModule, CommonModule, MatCardModule, RouterModule, HighlightPipe]
})
export class SharedModule { }
