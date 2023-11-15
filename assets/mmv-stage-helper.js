const _fetch = window.fetch;
window.fetch = (url, options) => {
  if (
    url ===
    'https://int.api.oneweb.mercedes-benz.com/me/vsc/v1/user/vehicles?&locale=de-DE'
  ) {
    return _fetch('http://localhost:4000', options);
  }

  return _fetch(url, options);
};
  
