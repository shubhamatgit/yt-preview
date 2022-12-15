import React, { useState } from "react";
import { useContext } from "react";
import { AuthVal } from "../context/AuthContext";

export default function Auth() {
  const { islogged, authcall } = useContext(AuthVal);
  const [channel, setChannel] = useState("");
  const apiKey = "AIzaSyD2ybDrgpApDRqpJh91jTIawOdD0VaTdEg";
  const clientId =
    "764063125124-kupdcefblmtdeptun22mffjee5skqn0t.apps.googleusercontent.com";
  return (
    <div className="auth">
      <label>Enter Channel name</label>
      <input />
      <button onClick={authcall}>Search channel</button>
    </div>
  );
}
