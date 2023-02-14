const container = document.querySelector('.container');

function fillPostsAndCreateElements(posts) {
   
    for (const post of posts) {
        const divCardPost = document.createElement('div');
        divCardPost.classList.add('card-post');

        container.appendChild(divCardPost);

        const id = document.createElement('h1');
        const title = document.createElement('strong');
        const description = document.createElement('p');

        id.textContent = post.id;
        title.textContent = post.title;
        description.textContent = post.body;

        divCardPost.appendChild(id);
        divCardPost.appendChild(title);
        divCardPost.appendChild(description);
   }
}

async function loadPosts() {
    try {
        const response = await api.get('/posts');
        
        fillPostsAndCreateElements(response.data);
    } catch (error) {
        console.log(error.response);
    }
}

loadPosts();