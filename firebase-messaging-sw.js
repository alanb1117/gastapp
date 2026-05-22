importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyC9i_qetQEt3rUQS63ypPDPsdetP2MBDdY",
  authDomain: "gastapp-empresa.firebaseapp.com",
  projectId: "gastapp-empresa",
  storageBucket: "gastapp-empresa.firebasestorage.app",
  messagingSenderId: "982541119412",
  appId: "1:982541119412:web:a7d23bc6fcca4ce3554ce1"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload?.notification?.title || "GastApp";
  const options = {
    body: payload?.notification?.body || "Nueva notificación",
    icon: "/gastapp/icon.png",
    badge: "/gastapp/icon.png",
    data: {
      url: payload?.fcmOptions?.link || "https://alanb1117.github.io/gastapp/"
    }
  };
  self.registration.showNotification(title, options);
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = event.notification?.data?.url || "https://alanb1117.github.io/gastapp/";
  event.waitUntil(clients.openWindow(url));
});
