import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatComponentsModule } from './mat-components.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    EditDialogComponent
  ],
  entryComponents: [
    EditDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
