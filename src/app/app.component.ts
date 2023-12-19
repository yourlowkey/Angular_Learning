import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Store } from '@ngrx/store';
import * as fromDictionaries from './store/dictionaries'
import * as fromRoot from './store'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(private store: Store<fromRoot.State>) {

  }
  title = "course-app"
  ngOnInit(): void {
    this.store.dispatch(new fromDictionaries.Read())
  }

}
