// const root = document.querySelector(".root")
//
//
// const button = document.querySelector("#buttonP");
// button.addEventListener('click', () =>{
//     const containerForma = document.querySelector(".containerForma");
//     if (containerForma.style.display === 'none' || containerForma.style.display === ''){
//         containerForma.style.display = 'block';
//     } else{
//         containerForma.style.display = "none"
//     }
// })
//
//
//
// fetch('http://localhost:3000/toys')
//     .then((response) => {
//         return response.json()
//     })
//     .then(data => data.forEach(item => creatToys(item)))
//
// const creatToys = (item) => {
//         const div = document.createElement('div');
//         div.setAttribute("data-id", item.id);
//         root.append(div)
//
//         const id = document.createElement('h1');
//         id.textContent = item.id
//
//         const name = document.createElement('h2')
//         name.textContent = item.name
//
//         const image = document.createElement("img");
//         image.setAttribute("src", item.image)
//     image.classList.add("link")
//
//
//         const buttonLike = document.createElement("button")
//         buttonLike.textContent = `${item.likes} LIKES`;
//         buttonLike.classList.add('likeButton');
//
//         const buttonDelete = document.createElement("button");
//         buttonDelete.textContent = "DELETE";
//         buttonDelete.classList.add('deleteButton');
//         div.append(id, name, image, buttonLike, buttonDelete)
//         root.append(div)
//
// }
//
// const inputName = document.querySelector('.inputName')
// const imgUrl = document.querySelector('.imgUrl')
//
// const form = document.querySelector(".form")
// form.addEventListener('submit', (ev) =>{
//     ev.preventDefault();
//
//     fetch('http://localhost:3000/toys', {
//     method:"POST",
//     headers: {
//     "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         name: inputName.value,
//         image: imgUrl.value,
//         likes: 10
//     })
// }).then(response => response.json())
//         .then(data => creatToys(data));
//     inputName.value = '';
//     imgUrl.value = '';
// })
//
//
// root.addEventListener('click', event => {
//     if (event.target.classList.contains ("likeButton")) {
//         const id = event.target.parentElement.dataset.id;
//         const likes_counter = parseInt(event.target.textContent);
//        event.target.textContent = `${likes_counter + 1} LIKES`
//         // console.log(likes_counter);
//         fetch(`http://localhost:3000/toys/${id}`, {
//             method: "PATCH",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 likes: likes_counter + 1
//             })
//         })
//             .then(response => response.json())
//     }
//
//
// if (event.target.classList.contains('deleteButton')){
//     const id = event.target.parentElement.dataset.id
//
//     fetch(`http://localhost:3000/toys/${id}`,{
//         method: "DELETE"
//     })
//         .then(response => {
//             if (response.ok){
//                 event.target.parentElement.remove()
//             }
//         })
// }
// })


// https://www.pngmart.com/files/6/Toy-Background-PNG.png BANDA
// https://www.pngmart.com/files/22/Pixars-Toy-Story-4-PNG-Photos.png buzz
// https://www.pngmart.com/files/3/Toy-Story-Jessie-PNG-File.png jessy
// https://www.pngmart.com/files/13/Toy-Story-Slinky-Dog-PNG-HD.png ciine

// https://www.pngmart.com/files/12/Toy-Story-Character-PNG-Clipart.png toti
// https://www.pngmart.com/files/3/Toy-Story-Jessie-PNG-Image.png JESSY
// https://www.pngmart.com/files/12/Sheriff-Woody-Toy-Story-PNG-Photos.png WOODY
// https://www.pngmart.com/files/12/Toy-Story-PNG-Background-Image.png CAL
// https://www.pngmart.com/files/17/Disney-Bullseye-Toy-Story-PNG-Transparent-Image.png JESSY



// conecteaza in terminal: json-server --watch db.json


