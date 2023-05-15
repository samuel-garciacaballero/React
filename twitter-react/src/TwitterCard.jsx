import "./App.css";
import { useState } from "react";

export function TwitterCard({ children, arroba, username = "unknow" }) {
  const [following, setFollowing] = useState(false);
  const foto = `https://unavatar.io/readcv/${username}`;
  //condición TERNARIA
  const texto = following ? "Siguiendo" : "Seguir"
  const estilobutton = following
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";
  const handleclick = () => {
    setFollowing(!following);
  };
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img alt="avatar" src={foto} className="tw-followCard-avatar"></img>
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">{arroba(username)}</span>
        </div>
      </header>
      <aside>
        <button className={estilobutton} onClick={handleclick}>
          {texto}
        </button>
      </aside>
    </article>
  );
}
