import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }


  getUsers() {
    let users: any[] = []
    return new Promise((resolve, reject) => {
      firebase.firestore().collection('users')
      .get().then(x => {
        x.forEach(y => {
          users.push(y.data())
        })
        console.log("firebase working ", users)
      })
      resolve(users)

    })
  }

  createUser(user) {
    return new Promise((resolve, reject) => {
      firebase.firestore()
        .collection('users')
        .doc(user.id)
        .set(user)
        .then(resp => {
          resp
          resolve(user)
        })
        .catch(err => {
          reject(user)
          err
        })

    })
  }
}
