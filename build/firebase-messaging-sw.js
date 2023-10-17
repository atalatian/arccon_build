// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/9.15.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging-compat.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyA331vYeQ-dYnwgevGy6EJzY2HE46hBa0s",
    authDomain: "arccon-30445.firebaseapp.com",
    projectId: "arccon-30445",
    storageBucket: "arccon-30445.appspot.com",
    messagingSenderId: "437844122608",
    appId: "1:437844122608:web:d4b2b0e2da832b8a48db35",
    measurementId: "G-53RCK37ZN7",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function(payload) {
//     const notificationTitle = payload.notification.title;
//     const notificationOptions = {
//         body: payload.notification.body,
//     };
//
//     self.registration.showNotification(notificationTitle, notificationOptions);
// });
