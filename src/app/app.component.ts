import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(){ 
    var config = {
      apiKey: "AIzaSyBmLdxCbBkDY-ZHWqoT07UJpTF197FbvuA",
      authDomain: "bookshelves-cf828.firebaseapp.com",
      databaseURL: "https://bookshelves-cf828.firebaseio.com",
      projectId: "bookshelves-cf828",
      storageBucket: "bookshelves-cf828.appspot.com",
      messagingSenderId: "238737349493"
    };
    firebase.initializeApp(config);
  }
  
}
