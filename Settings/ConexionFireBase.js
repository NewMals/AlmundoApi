var admin = require("firebase-admin");

var serviceAccount = require("../Settings/serviceAccounKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://almundo-b7df1.firebaseio.com"
});

module.exports = admin