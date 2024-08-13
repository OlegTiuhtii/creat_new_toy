const root = document.querySelector(".root")
const button = document.querySelector("#buttonP");
button.addEventListener('click', () =>{
    const containerForma = document.querySelector(".containerForma");
    if (containerForma.style.display === 'none' || containerForma.style.display === ''){
        containerForma.style.display = 'block';
    } else{
        containerForma.style.display = "none"
    }
})
axios.get('http://localhost:3000/toys')
    .then((response) => {
        response.data.forEach(item => creatToys(item));
    })

const creatToys = (item) => {
    const div = document.createElement('div');
    div.setAttribute("data-id", item.id);
    root.appendChild(div)

    const id = document.createElement('h1');
    id.textContent = item.id

    const name = document.createElement('h2')
    name.textContent = item.name

    const image = document.createElement("img");
    image.setAttribute("src", item.image)
    image.classList.add("link")

    const buttonLike = document.createElement("button")
    // buttonLike.textContent = `${item.likes} LIKES`;
    buttonLike.classList.add('likeButton');

    const imgLike = document.createElement('img')
    imgLike.setAttribute('src', 'img/like.png')
    imgLike.classList.add('imgLike')
    buttonLike.appendChild(imgLike);

    const likeCount = document.createElement('span');
    likeCount.textContent = `${item.likes} LIKES`;
    buttonLike.appendChild(likeCount);

    const buttonDelete = document.createElement("button");
    buttonDelete.classList.add('deleteButton');

    const imgDelete = document.createElement('img')
    imgDelete.setAttribute('src', 'img/buttonDelete.png')
    imgDelete.classList.add('imgDelete')

    buttonDelete.appendChild(imgDelete);
    buttonDelete.appendChild(document.createTextNode(" DELETE"));

    const buttonAddToCard = document.createElement("button")
    buttonAddToCard.textContent = "ADD TO CART";
    buttonAddToCard.classList.add('addtocartButton');

    const imgAddToCard = document.createElement('img')
    imgAddToCard.setAttribute('src', 'img/addtocart.png')
    imgAddToCard.classList.add('imgAddToCard')

    buttonAddToCard.appendChild(imgAddToCard);

    buttonAddToCard.addEventListener('click', (e) => {
        addToCart(item);
    });

    div.append(id, name, image, buttonLike, buttonDelete, buttonAddToCard)
    root.append(div)

}

const inputName = document.querySelector('.inputName')
const imgUrl = document.querySelector('.imgUrl')

const form = document.querySelector(".form")
form.addEventListener('submit', (ev) =>{
    ev.preventDefault();

axios.post('http://localhost:3000/toys', {
    name: inputName.value,
    image: imgUrl.value,
    likes: 0
})
    .then(response => {
        creatToys(response.data);
    })

inputName.value = '';
imgUrl.value = '';
});

root.addEventListener('click', event => {
    if (event.target.classList.contains ("likeButton")) {
        const id = event.target.parentElement.dataset.id;
        const likeCount = event.target.querySelector('span');
        const likes_counter = parseInt(likeCount.textContent)|| 0;
        likeCount.textContent = `${likes_counter + 1} LIKES`

    axios.patch(`http://localhost:3000/toys/${id}`, {
        likes: likes_counter + 1
    })
        .then(response => {
        })
}

    if (event.target.classList.contains('deleteButton')){
        const id = event.target.parentElement.dataset.id

axios.delete(`http://localhost:3000/toys/${id}`)
    .then(response => {
        if (response.status === 200) {
            event.target.parentElement.remove();
        }
    })
}
});

const addToCart = (item) => {
    let items = localStorage.getItem('SHOPPING CART') ? JSON.parse(localStorage.getItem('SHOPPING CART')) : [];
    items.push(item);
    localStorage.setItem('SHOPPING CART', JSON.stringify(items));
    displayCart();
};

window.onload = () => {
    displayCart();
}

const displayCart = () => {
    const items = JSON.parse(localStorage.getItem('SHOPPING CART')) || [];
    const cartElement = document.querySelector('#element');
    cartElement.innerHTML = '';

    if (items.length === 0) {
        cartElement.innerHTML = 'Cart is empty';
        return;
    }

    items.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cartItem');

        const itemId = document.createElement('p');
        itemId.textContent = `ID: ${item.id}`;
        itemId.classList.add('itemId');

        const itemLike = document.createElement('p');
        itemLike.textContent = `/ Likes: ${item.likes}`;
        itemLike.classList.add('itemLike');

        const itemName = document.createElement('p');
        itemName.textContent = `/ Name: ${item.name}`;
        itemName.classList.add('itemName');

        const itemImage = document.createElement('img');
        itemImage.setAttribute('src', item.image);
        itemImage.setAttribute('alt', item.name);
        itemImage.classList.add('cartItemImage');

        const deleteButtonItem = document.createElement('button');
        deleteButtonItem.classList.add('deleteButtonItem');

        const deleteIcon = document.createElement('img');
        deleteIcon.setAttribute('src', 'img/buttonDelete.png');
        deleteIcon.classList.add('deleteIcon');
        deleteButtonItem.appendChild(deleteIcon);

        deleteButtonItem.addEventListener('click', () => {
            removeItemFromCart(item.id);
        });

        cartItem.append(itemImage, itemId, itemName, itemLike, deleteButtonItem);
        cartElement.appendChild(cartItem);
    });
}
const removeItemFromCart = (id) => {
    let items = JSON.parse(localStorage.getItem('SHOPPING CART')) || [];
    items = items.filter(item => item.id !== id);
    localStorage.setItem('SHOPPING CART', JSON.stringify(items));
    displayCart();
};

const clearButton = document.querySelector('#buttonClear')
clearButton.addEventListener('click', ()=> {
    localStorage.removeItem('SHOPPING CART');
    displayCart();
})

document.addEventListener('DOMContentLoaded', () => {
    const buttonOpenClose = document.querySelector("#CartopenClosed");
    const containerCart = document.querySelector("#cart");

    const cartState = localStorage.getItem('CART_STATE') || 'closed';
    if (cartState === 'open') {
        containerCart.style.display = 'flex';
        buttonOpenClose.innerHTML = '<img src="img/cart_open_closed.png" class="iconButtonOpenClosed" alt="Cart Icon" /> CLOSE CART';
    } else {
        containerCart.style.display = 'none';
        buttonOpenClose.innerHTML = '<img src="img/cart_open_closed.png" class="iconButtonOpenClosed" alt="Cart Icon" /> OPEN CART';
    }

    buttonOpenClose.addEventListener('click', () => {
        if (containerCart.style.display === 'none' || containerCart.style.display === '') {
            containerCart.style.display = 'flex';
            buttonOpenClose.innerHTML = '<img src="img/cart_open_closed.png" class="iconButtonOpenClosed"/> CLOSE CART';
            localStorage.setItem('CART_STATE', 'open');
        } else {
            containerCart.style.display = 'none';
            buttonOpenClose.innerHTML = '<img src="img/cart_open_closed.png" class="iconButtonOpenClosed"/> OPEN CART';
            localStorage.setItem('CART_STATE', 'closed');
        }
    });
});


// conecteaza in terminal: json-server --watch db.json