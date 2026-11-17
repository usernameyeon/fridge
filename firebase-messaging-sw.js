// 앱이 꺼져 있을 때 푸시 알림을 받아 주는 서비스 워커 (수정할 필요 없음)
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');
importScripts('./config.js');

if (self.FIREBASE_CONFIG && self.FIREBASE_CONFIG.apiKey) {
  firebase.initializeApp(self.FIREBASE_CONFIG);
  // 서버가 notification 형식으로 보내므로 SDK가 알림을 자동으로 띄우고,
  // 알림을 누르면 fcm_options.link(앱 주소)로 열어 줍니다.
  firebase.messaging();
}

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
