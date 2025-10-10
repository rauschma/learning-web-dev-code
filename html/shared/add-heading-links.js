function addHeadingLinks() {
  for (const h of document.querySelectorAll('h1, h2, h3, h4, h5, h6')) {
    const id = h.id;
    if (id) {
      h.insertAdjacentHTML(
        'beforeend',
        ` <a href="#${id}" class="heading-link" aria-hidden="true">#</a>`
      );
    }
  }
}

addHeadingLinks();