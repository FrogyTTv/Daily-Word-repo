// Makes the client enter the search input when pressing Command + F

window.addEventListener('keydown', (event) => {
  const isCmdF = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'f';
  if (isCmdF) {
    event.preventDefault(); // prevent default browser find
    const input = document.getElementById('search_input');
    if (input) {
      input.focus();
      // Optionally, select the content:
      input.select();
    }
  }
});
