import React, { useState } from "react";

export default function Ususario() {
  const [userName, setUserName] = useState("User Name");
  const [imageProfile, setImageProfile] = useState("./assets/catanacomics.svg");

  function changeUser() {
    setUserName(prompt("Entre com userName"));
  }

  function changeImageProfile() {
    setImageProfile(prompt("Entre link"));
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
