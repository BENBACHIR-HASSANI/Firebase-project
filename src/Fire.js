import React from "react";

import { auth } from "./firebase-config";

function Fire() {
  const ref = auth.firestore().collection("developers");
  console.log(ref);

  return (
    <div>
      <h1>#firebase firestore database</h1>
    </div>
  );
}

export default Fire;
