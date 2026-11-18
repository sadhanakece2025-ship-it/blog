// LOGIN FORM
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        document.getElementById("loginMessage").innerText =
            "Login form submitted successfully!";
    });
}

// REGISTER FORM
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        document.getElementById("registerMessage").innerText =
            "Registration form submitted successfully!";
    });
}

// CREATE BLOG FORM
const blogForm = document.getElementById("blogForm");

if (blogForm) {
    blogForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const title = document.getElementById("blogTitle").value;
        const content = document.getElementById("blogContent").value;

        const posts = JSON.parse(
            localStorage.getItem("blogPosts") || "[]"
        );

        posts.push({ title: title, content: content });

        localStorage.setItem("blogPosts", JSON.stringify(posts));

        document.getElementById("blogMessage").innerText =
            "Your blog has been published successfully!";

        blogForm.reset();
    });
}
// DISPLAY BLOG POSTS ON DASHBOARD

const postsContainer = document.getElementById("postsContainer");

if (postsContainer) {
    const posts = JSON.parse(
        localStorage.getItem("blogPosts") || "[]"
    );

    if (posts.length === 0) {
        postsContainer.innerHTML = "<p>No blog posts yet.</p>";
    } else {
        posts.forEach(function(post) {
            const article = document.createElement("article");

            const heading = document.createElement("h3");
            heading.textContent = post.title;

            const paragraph = document.createElement("p");
            paragraph.textContent = post.content;

            article.appendChild(heading);
            article.appendChild(paragraph);

            postsContainer.appendChild(article);
        });
    }
}