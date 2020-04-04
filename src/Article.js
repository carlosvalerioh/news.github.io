import { html } from './htm+preact.js'


export const Article = ({
    domain,
    points,
    title,
    time_ago: timeAgo,
    url,
    ...restOfProps
  }) => {
    const handleFav = () => {
      console.log("fav");
      // localStorage.setItem('article', )
    };
  
    return html`
      <article>
        <button onClick=${handleFav}>🔥</button>
        <a alt="${title}" href="${url}" target="_blank">
          <h3>${title}</h3>
          <section>
            <div>
              <date>⏰ ${timeAgo}</date>
              <strong>⭐ ${points}</strong>
            </div>
            <span>${domain}</span>
          </section>
        </a>
      </article>
    `;
  };
  