function fetchPosts() {
    const postLimit = document.getElementById('post-limit').value;
    const apiUrl = `https://jsonplaceholder.typicode.com/posts?_limit=${postLimit}`
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);}
            return response.json();})
        .then(posts => {
            displayPosts(posts);})
        .catch(error => {
            console.error('Error fetching posts:', error.message);});
}
function displayPosts(posts) {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = '';
    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.classList.add('col-md-4', 'mb-4');
        postCard.innerHTML = ` 
          <div class="card"> 
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">${post.body}</p>
            </div>
          </div>
        `;
        postsContainer.appendChild(postCard);});
}

document.addEventListener('DOMContentLoaded', fetchPosts);