import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(private afs: AngularFirestore) {

  }
  title = "course-app"
  ngOnInit(): void {
    this.afs.collection('test').snapshotChanges().subscribe(data => {
      console.log(data.map(x => { x.payload.doc.data() }));
    })
    this.afs.collection("test").get()
  }

}
