

function searchPost() {
    const postId = document.getElementById('postId').value;
    if (!postId || postId < 1 || postId > 100) {
        alert("Please enter a valid Post ID between 1 and 100.");
        return;
    }

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Please try again.');
            }
            return response.json();
        })
        .then(post => {
            const postContainer = document.getElementById('postContainer');
            postContainer.innerHTML = `
                <h2>Post ${post.id}</h2>
                <h3>Title: ${post.title}</h3>
                <p>${post.body}</p>
                <button onclick="fetchComments(${post.id})">Load Comments</button>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while fetching the post. Please try again.');
        });
}

function fetchComments(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Please try again.');
            }
            return response.json();
        })
        .then(comments => {
            console.log('Comments:', comments);
            alert(`Fetched ${comments.length} comments for Post ${postId}.`);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while fetching comments. Please try again.');
        });
}
