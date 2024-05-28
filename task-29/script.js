document.getElementById('redirectButton').addEventListener('click', () => {
    const urlInput = document.getElementById('urlInput').value;
    let url = urlInput.trim();
  
    if (!url) {
      alert('Будь ласка введіть URL');
      return;
    }
  
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'http://' + url;
    }
  
    window.location.href = url;
  });
  
  document.getElementById('clearButton').addEventListener('click', () => {
    document.getElementById('urlInput').value = '';
  });
  