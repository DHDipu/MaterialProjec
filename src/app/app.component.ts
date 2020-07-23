import { INCREMENT } from './actions';
import { IAppState } from './store';
import { NgRedux, select } from 'ng2-redux';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'materialAppTest';
  isChecked = false;

  colors = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' },
  ]
  color = 2;

  categories = [
    {name: 'beginner'},
    {name: 'Intermediate'},
    {name: 'Advance'}
  ];

  // progress spinner
  progress = 0;
  timer;
  // thic counter is comes form store.ts file
  count = 0;

  // tslint:disable-next-line: typedef
  categorySelecte(category){
    this.categories
      .filter(c => c !== category)
      // tslint:disable-next-line: no-string-literal
      .forEach(c => c['selected'] = false);

    category.selected = !category.selected;
  }

  // constructor(private dialog: MatDialog){
  //   this.timer = setInterval(() => {
  //     this.progress++;
  //     if (this.progress === 100) {
  //       clearInterval(this.timer);
  //     }
  //   }, 30);
  // }
  // this constructor  for redux implements
  constructor(private ngRedux: NgRedux<IAppState>){
    ngRedux.subscribe(() => {
      const store = ngRedux.getState();
      this.count = store.counter;
    });
  }

  // this is emplement ng-redux increment
  increment(){
    this.ngRedux.dispatch({type: INCREMENT});
  }
  // tslint:disable-next-line: typedef
  // openDialog(){
  //   this.dialog.open(EditDialogComponent, {
  //     data: {courseId: 1}
  //   })
  //     .afterClosed().subscribe(res => console.log(res));
  // }
  // tslint:disable-next-line: typedef
  onChange($event: any){
    console.log($event);
  }


}
