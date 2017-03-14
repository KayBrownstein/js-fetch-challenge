let ready = () => {
  return new Promise((resolve, reject) =>
  document.onreadystatechange = function() {
  if (document.readyState !== 'loading') {
    resolve();
    }
  else {
    reject();
  }});
};
