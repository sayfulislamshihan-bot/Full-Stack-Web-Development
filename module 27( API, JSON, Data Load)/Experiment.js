
const dataLoad = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    func(data);
}

const func = (posts) => {
    //access the post container
    let container = document.getElementById("post-container");

    posts.forEach((post) => {
        console.log(post)
        //create html element
        const liElement = document.createElement('li');
        liElement.innerText = post.title;
        console.log(liElement);

        //Append child
        container.appendChild(liElement);
    })
    
}