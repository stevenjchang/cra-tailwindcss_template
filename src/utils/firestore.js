import app from "firebase.js";

export const add = (val) => {
  const db = app.firestore();
  db.collection("testWeeks").add({
    first: "firstName",
    last: "lastName",
  });
};
