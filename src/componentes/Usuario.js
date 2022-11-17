export default function Ususario() {
  // const [userName, setUserName] = "";

  // function changeUser() {
  //   setUserName(prompt("Entre com userName"));
  // }
  const userName = "Catana";

  return (
    <div class="usuario">
      <img src="./assets/catanacomics.svg" />
      <div class="texto">
        <strong>catanacomics</strong>
        <span>
          {userName}
          <ion-icon name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}
