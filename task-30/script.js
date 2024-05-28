const emojis = ['😜', '🤯', '😂', '👹', '😍'];
const counts = new Array(emojis.length).fill(0);

const emojiContainer = document.getElementById('emojiContainer');
const emojiCountContainer = document.getElementById('emojiCountContainer');

function renderEmojis() {
  emojiContainer.innerHTML = '';
  emojiCountContainer.innerHTML = '';
  
  emojis.forEach((emoji, index) => {
    const emojiSpan = document.createElement('span');
    emojiSpan.textContent = emoji;
    emojiSpan.addEventListener('click', () => {
      counts[index]++;
      renderCounts();
    });
    emojiContainer.appendChild(emojiSpan);
  });

  renderCounts();
}

function renderCounts() {
  emojiCountContainer.innerHTML = '';
  
  counts.forEach(count => {
    const countSpan = document.createElement('span');
    countSpan.textContent = count;
    emojiCountContainer.appendChild(countSpan);
  });
}

renderEmojis();
