importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
      apiKey: "AIzaSyA_B4DLDQApDa0us4gi-58sk_aLMGgFWdI",
      authDomain: "nolan-2bb99.firebaseapp.com",
      databaseURL: "https://nolan-2bb99.firebaseio.com",
      projectId: "nolan-2bb99",
      storageBucket: "nolan-2bb99.appspot.com",
      messagingSenderId: "471437598597",
      appId: "1:471437598597:web:694bd6b998c03caa40aeec",
      measurementId: "G-WK8ZGC3DSR"
    });


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();