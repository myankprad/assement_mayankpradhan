fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        const blogList = document.getElementById('blog-list');

        data.map(blog => {
            const li = document.createElement('li');
            li.innerHTML = `
        <h2>${blog.title}</h2>
        <p>${blog.body}</p>
        <button class="delete-btn" data-id="${blog.id}">Delete</button>
      `;
            blogList.appendChild(li);
        });

        const deleteButtons = document.getElementsByClassName('delete-btn');
        Array.from(deleteButtons).forEach(button => {
            button.addEventListener('click', handleDelete);
        });
    })
    .catch(err => console.log(err));

const addBlogForm = document.getElementById('add-blog-form');
addBlogForm.addEventListener('submit', handleAddBlog);

function handleAddBlog(e) {
    e.preventDefault();

    const titleInput = document.getElementById('blog-title');
    const bodyInput = document.getElementById('blog-body');

    const newBlog = {
        title: titleInput.value,
        body: bodyInput.value
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBlog)
    })
        .then(response => response.json())
        .then(data => {
            const blogList = document.getElementById('blog-list');
            const li = document.createElement('li');
            li.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.body}</p>
        <button class="delete-btn" data-id="${data.id}">Delete</button>
      `;
            blogList.appendChild(li);

            const deleteButton = li.querySelector('.delete-btn');
            deleteButton.addEventListener('click', handleDelete);

            titleInput.value = '';
            bodyInput.value = '';
        })
        .catch(error => console.log(error));
}

function handleDelete() {
    const blogId = this.getAttribute('data-id');

    fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`, {
        method: 'DELETE'
    })
        .then(() => {
            const blogItem = this.parentElement;
            blogItem.remove();
        })
        .catch(err => console.log(err));
}
