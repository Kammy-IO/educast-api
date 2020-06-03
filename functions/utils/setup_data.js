const debug = require('debug')('firestore-snippets-node');
const fs = require('fs');

// [START firestore_deps]
const admin = require('firebase-admin');

// initialize test database
// process.env.GCLOUD_PROJECT = projectId;
process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080';
admin.initializeApp();

const db = admin.firestore();

function getAllDocumentInACollection(collection){
    console.log('Collection Name:' + collection);
    db.collection(collection).get()
    .then(documentSet => {
      if (documentSet.empty){
        console.log('No matching documents.');
        return;
      }
  
      documentSet.forEach( doc => {
        console.log(doc.id, 'Document Data:', doc.data());
      });
    })
    .catch(err => {
      console.log('Error', error)
    });
  }
  


// function setDocument(){
//     fs.readFile('../DataModel/bkp-collections/firestore-export-course.json', (err, data) => {
//         if (err) throw err;
//         let courses = JSON.parse(data);
        
//         courses.course.forEach( data => {
//             db.collection('course').add(data)
//             .then(docuRef => {
//                 console.log('Document added!', docRef.id)
//             });
//         });
//     });
// }

// setDocument()
getAllDocumentInACollection('course');