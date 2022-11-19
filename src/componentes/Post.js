import React, { useState } from "react";

export default function Post(props) {
  const [savedPost, setSavedPost] = useState(false);
  const [liked, setLiked] = useState(false);

  function savePost() {
    if (savedPost) {
      setSavedPost(false);
    } else {
      setSavedPost(true);
    }
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
    return (qtdeLikes + 1).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  function currentLikes(qtdeLikes) {
    return qtdeLikes.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
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
              <div data-test="like-post" class="heartLike" onClick={heartClick}>
                {liked ? (
                  <ion-icon class="filled" name="heart"></ion-icon>
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
