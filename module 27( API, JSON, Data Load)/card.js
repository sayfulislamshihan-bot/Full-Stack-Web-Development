const cardFunc = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const cards = await res.json();
    //access the container
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""

    cards.forEach((card) => {
        //create HTML element
        const newCard = document.createElement("div")
        newCard.innerHTML = ` 
        <div class="card">
            <h4>${card.userId}</h4>
            <h4>${card.id}</h4>
            <h2>${card.title}</h2>
            <p>${card.body}</p>
        </div>`
        //append child
        cardContainer.appendChild(newCard);
    })

}

