import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      imagePerfil: "./assets/meowed.svg",
      perfilName: "meowed",
      imagePosted: "./assets/gato-telefone.svg",
      imageLikes: "./assets/respondeai.svg",
      curtidoPor: "respondeai",
      qtdeLikes: 101,
    },
    {
      imagePerfil: "./assets/barked.svg",
      perfilName: "barked",
      imagePosted: "./assets/dog.svg",
      imageLikes: "./assets/adorable_animals.svg",
      curtidoPor: "adorable_animals",
      qtdeLikes: 99159,
    },
  ];

  // const num = 12340
  // const str = num.toString();
  // let result;
  // if(str.length >3){
  //   const index = -3;
  //   result = str.slice(0, index) + '.' + str.slice(index);
  // } else {
  //   result = str
  // }

  // console.log(result);

  return (
    <div class="posts">
      {posts.map((post) => {
        return (
          <Post
            imagePerfil={post.imagePerfil}
            perfilName={post.perfilName}
            imagePosted={post.imagePosted}
            imageLikes={post.imageLikes}
            textoLikes={post.textoLikes}
            curtidoPor={post.curtidoPor}
            qtdeLikes={post.qtdeLikes}
          />
        );
      })}
    </div>
  );
}
