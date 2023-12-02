// fetch RSS of a mastodon profile and return the latest feed

fetch(mastodonProfile + '.rss')
  // get the response content
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {

    // put in variables the title, link and picture profile
    const channelTitle = data.querySelector("channel > title").textContent;
    const channelLink = data.querySelector("channel > link").textContent;
    const channelImage = data.querySelector("channel > image > url").textContent;

    // assign the script to a div using mastodon-feed id
    const feed = document.getElementById('mastodon-feed');

    // create the div container
    const headerElement = document.createElement('div');
    headerElement.className = 'header';

    // add the profile picture
    const imageElement = document.createElement('img');
    imageElement.src = channelImage;
    headerElement.appendChild(imageElement);

    // add a lin to the profile name
    const titleElement = document.createElement('a');
    titleElement.href = channelLink;
    titleElement.textContent = channelTitle;
    headerElement.appendChild(titleElement);

    // create a follow button redirecting to the profile using hugo i18n values
    const followElement = document.createElement('a');
    followElement.className = 'follow-button';
    followElement.href = channelLink;
    followElement.textContent = i18n.followOnMastodon;
    headerElement.appendChild(followElement);

    // close the header element
    feed.appendChild(headerElement);

    // loop over the feed content
    const items = data.querySelectorAll("item");
    const itemsArray = Array.from(items).slice(0, maxItems);
    itemsArray.forEach(item => {
      // create a div container for the posts
      const statusElement = document.createElement('div');
      statusElement.className = 'status';
      statusElement.innerHTML = item.querySelector("description").textContent;

      // create a div footer for the post url and date
      const footerElement = document.createElement('div');
      footerElement.className = 'post-footer';

      const dateElement = document.createElement('p');
      const pubDate = new Date(item.querySelector("pubDate").textContent);
      dateElement.textContent = `${i18n.publishedDateOnMastodon} ${pubDate.toLocaleDateString()} - ${pubDate.toLocaleTimeString()} | `;
      footerElement.appendChild(dateElement);

      const linkElement = document.createElement('a');
      linkElement.href = item.querySelector("link").textContent;
      linkElement.textContent = i18n.viewOnMastodon;
      footerElement.appendChild(linkElement);

      statusElement.appendChild(footerElement);

      // close the post element
      feed.appendChild(statusElement);

    });
  });