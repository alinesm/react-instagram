export default function Sugestao() {
  const sugestoes = [
    {
      imagePerfil: "./assets/bad.vibes.memes.svg",
      perfilName: "bad.vibes.memes",
    },
    {
      imagePerfil: "./assets/chibirdart.svg",
      perfilName: "chibirdart",
    },
    {
      imagePerfil: "./assets/razoesparaacreditar.svg",
      perfilName: "razoesparaacreditar",
    },
    {
      imagePerfil: "./assets/adorable_animals.svg",
      perfilName: "adorable_animals",
    },
    {
      imagePerfil: "./assets/smallcutecats.svg",
      perfilName: "smallcutecats",
    },
  ];
  return (
    <>
      {sugestoes.map((sugestao) => (
        <div class="sugestao">
          <div class="usuario">
            <img alt="" src={sugestao.imagePerfil} />
            <div class="texto">
              <div class="nome">{sugestao.perfilName}</div>
              <div class="razao">Segue você</div>
            </div>
          </div>
          <div class="seguir">Seguir</div>
        </div>
      ))}
    </>
  );
}
