import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { HttpClientModule ,HttpHeaders} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// import { FirstComponent } from './first.component';
// import { SecondComponent } from './second.component';



 


@NgModule({
  declarations: [
    AppComponent,
    // FirstComponent,
    // SecondComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatCheckboxModule,
    MatSliderModule,
    MatInputModule,
    MatSelectModule,
    MatSelectModule,
    MatButtonModule,
    MatTooltipModule,
    FormsModule,
    HttpClientModule ,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
