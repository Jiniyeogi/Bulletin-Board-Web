document.getElementById('post-form').addEventListener('submit', function(e){
    e.preventDefault();

    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;

    const postList = document.getElementById('post-list');
    const postItem = document.createElement('div');
    postItem.className = 'post-item';
    postItem.innerHTML =`
        <h2>${title}</h2>
        <p>${content}</p>
    `;

    postList.appendChild(postItem);

    document.getElementById('post-form').reset();

})