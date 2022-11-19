import React, { useState } from "react";

export default function Ususario() {
  const [userName, setUserName] = useState("User Name");
  const [imageProfile, setImageProfile] = useState("./assets/catanacomics.svg");

  function changeUser() {
    const typedName = prompt("Entre com userName");
    if (typedName) {
      setUserName(typedName);
    }
  }

  function changeImageProfile() {
    const enteredImageProfile = prompt("Entre link");
    if (enteredImageProfile) {
      setImageProfile(enteredImageProfile);
    }
  }

  return (
    <div class="usuario" data-test="user">
      <img
        alt=""
        data-test="profile-image"
        src={imageProfile}
        onClick={changeImageProfile}
      />
      <div class="texto">
        <strong>catanacomics</strong>
        <span data-test="name">
          {userName}
          <ion-icon
            data-test="edit-name"
            onClick={changeUser}
            name="pencil"
          ></ion-icon>
        </span>
      </div>
    </div>
  );
}
