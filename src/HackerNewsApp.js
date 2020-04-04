import { html, useEffect, useState  } from './htm+preact.js'
import { Article } from './Article.js'



    export default function HackerNewsApp() {
        const [loading, setLoading] = useState(false);
        const [data, setData] = useState([]);
      
        useEffect(function() {
          setLoading(true);
          fetch("https://api.hnpwa.com/v0/news/1.json")
            .then(res => res.json())
            .then(response => {
              setLoading(false);
              setData(response);
            });
        }, []);
      
        return html`
          <small><a href="https://twitter.com/carlosvalerioh">por @carlosvaleriohs</a></small>
          <main>
            <h4>News </h4>
            ${loading &&
              html`
                <center><i>🌀</i></center>
              `}
            ${loading === false &&
              data.map(
                article =>
                  html`
                    <${Article} ...${article} />
                  `
              )}
          </main>
        `;
      }
