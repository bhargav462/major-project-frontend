import React from 'react';
import classes from './news.module.css';
async function searchNews(q) {
  q = encodeURIComponent(q);
  const response = await fetch("https://bing-news-search1.p.rapidapi.com/news/search?q=%3CREQUIRED%3E&freshness=Day&textFormat=Raw&safeSearch=Off", {
	"method": "GET",
	"headers": {
		"x-bingapis-sdk": "true",
		"x-rapidapi-key": "df6980cd4bmsh2bcf9c47627ec60p17e57fjsnc10aca182167",
		"x-rapidapi-host": "bing-news-search1.p.rapidapi.com"
	}
});

  const body = await response.json();
  return body.value;
}
function App() {
  const [query, setQuery] = React.useState("agro");
  const [list, setList] = React.useState(null);
  const search = (e) => {
    e.preventDefault();
    searchNews(query).then(setList);
  };
  return (
    <div className={classes["app"]}>
      <form className={classes["form"]} onSubmit={search}>
        <input
          autoFocus
          value={query}
          onChange={e => setQuery(e.target.value)}
          className={classes["input"]}
        />
        <button className={classes["button"]}>Search</button>
      </form>
      {!list
        ? null
        : list.length === 0
          ? <p><i>No results</i></p>
          : <ul>
            {list.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </ul>
      }
    </div>
  );
}
function Item({ item }) {
  const separateWords = s => s.replace(/[A-Z][a-z]+/g, '$& ').trim();
  const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
  return (
    <li className={classes["item"]}>
      {item.image &&
        <img className={classes["thumbnail"]}
          alt=""
          src={item.image?.thumbnail?.contentUrl}
        />
      }
      <div>
      <h2 className={classes["title"]}>
        <a href={item.url}>{item.name}</a>
      </h2>
      <p className={classes["description"]}>
        {item.description}
      </p>
      </div>
     
      <div className={classes["meta"]}>
        <span>{formatDate(item.datePublished)}</span>
        <span className={classes["provider"]}>
          {item.provider[0].image?.thumbnail &&
            <img className={classes["provider-thumbnail"]}
              alt=""
              src={item.provider[0].image.thumbnail.contentUrl + '&w=16&h=16'}
            />
          }
          {item.provider[0].name}
        </span>
        {item.category &&
          <span>{separateWords(item.category)}</span>
        }
      </div>
    </li>
  );
}

export default App;