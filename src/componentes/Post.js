import React, { useState } from "react";

export default function Post(props) {
  const [savedPost, setSavedPost] = useState(false);
  const [liked, setLiked] = useState(false);

  function savePost() {
    setSavedPost(true);
  }

  function likePostByPhoto() {
    setLiked(true);
  }

  function heartClick() {
    if (liked) {
      setLiked(false);
    } else {
      setLiked(true);
    }
  }

  function incrementLike(qtdeLikes) {
    if (qtdeLikes > 1000) {
      return (
        (qtdeLikes + 1).toString().slice(0, -3) +
        "." +
        (qtdeLikes + 1).toString().slice(-3)
      );
    } else {
      return (qtdeLikes + 1).toString();
    }
  }

  function currentLikes(qtdeLikes) {
    if (qtdeLikes > 1000) {
      return (
        qtdeLikes.toString().slice(0, -3) + "." + qtdeLikes.toString().slice(-3)
      );
    } else {
      return qtdeLikes.toString();
    }
  }

  return (
    <>
      <div data-test="post" class="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.imagePerfil} alt="" />
            {props.perfilName}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div data-test="post-image" class="conteudo" onClick={likePostByPhoto}>
          <img src={props.imagePosted} alt="" />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div className="icons">
              <div data-test="like-post" onClick={heartClick}>
                {liked ? (
                  <ion-icon name="heart"></ion-icon>
                ) : (
                  <ion-icon name="heart-outline"></ion-icon>
                )}
              </div>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div data-test="save-post" onClick={savePost}>
              {savedPost ? (
                <ion-icon name="bookmark"></ion-icon>
              ) : (
                <ion-icon name="bookmark-outline"></ion-icon>
              )}
            </div>
          </div>

          <div class="curtidas">
            <img src={props.imageLikes} alt="" />
            <div class="texto">
              Curtido por <span class="bold">{props.curtidoPor}</span> e{" "}
              <span data-test="likes-number" class="bold">
                outras{" "}
                {liked
                  ? incrementLike(props.qtdeLikes)
                  : currentLikes(props.qtdeLikes)}{" "}
                pessoas
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// const qtdeLikes = post.qtdeLikes.toString();
// let result;
// if (qtdeLikes.length > 3) {
//   let index = -3;
//   result = qtdeLikes.slice(0, index) + "." + qtdeLikes.slice(index);
// } else {
//   result = qtdeLikes;
// }
