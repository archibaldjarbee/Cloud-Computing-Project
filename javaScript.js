// Assuming you have an array of post objects with properties like title, description, and URL
const posts = [
    { title: "Post 1", description: "Description of post 1", url: "https://example.com/post1" },
    { title: "Post 2", description: "Description of post 2", url: "https://example.com/post2" },
    // Add more post objects as needed
];

// Function to create post preview elements
function createPostPreview(post) {
    const postPreview = document.createElement('div');
    postPreview.classList.add('postPreview');

    const title = document.createElement('h2');
    title.textContent = post.title;

    const description = document.createElement('p');
    description.textContent = post.description;

    const readMoreLink = document.createElement('a');
    readMoreLink.textContent = 'Read More';
    readMoreLink.href = post.url;
    readMoreLink.target = '_blank'; // Open link in a new tab

    postPreview.appendChild(title);
    postPreview.appendChild(description);
    postPreview.appendChild(readMoreLink);

    return postPreview;
}

// Function to display post previews
function displayPostPreviews() {
    const postPreviewsSection = document.getElementById('postPreviews');

    // Clear any existing post previews
    postPreviewsSection.innerHTML = '';

    // Create and append post previews to the section
    posts.forEach(post => {
        const postPreview = createPostPreview(post);
        postPreviewsSection.appendChild(postPreview);
    });
}

// Call the function to display post previews
displayPostPreviews();
