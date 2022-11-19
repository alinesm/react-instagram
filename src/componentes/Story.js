export default function Story() {
  const stories = [
    { image: "./assets/9gag.svg", perfil: "9gag" },
    { image: "./assets/meowed.svg", perfil: "meowed" },
    { image: "./assets/barked.svg", perfil: "barked" },
    {
      image: "./assets/nathanwpylestrangeplanet.svg",
      perfil: "nathanwpylestrangeplanet",
    },
    { image: "./assets/wawawicomics.svg", perfil: "wawawicomics" },
    { image: "./assets/respondeai.svg", perfil: "respondeai" },
    { image: "./assets/filomoderna.svg", perfil: "filomoderna" },
    { image: "./assets/memeriagourmet.svg", perfil: ">memeriagourmet" },
  ];

  return (
    <>
      {stories.map((story) => (
        <div class="story">
          <div class="imagem">
            <img alt="" src={story.image} />
          </div>
          <div class="usuario">{story.perfil}</div>
        </div>
      ))}
    </>
  );
}
