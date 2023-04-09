import { users, posts, suggestUsers } from '../../scripts/database.js';

function createProfilePost(profileList, i) {
    // Creating the elements
    const divTag_1 = document.createElement('div');
    const divTag_2 = document.createElement('div');
    const figureTag = document.createElement('figure');
    const imgTag = document.createElement('img');
    const h2Tag = document.createElement('h2');
    const spanTag = document.createElement('span');

    // Configuring the elements
    imgTag.src = profileList[i].img;
    imgTag.alt = `profile ${profileList[i].user}`;
    h2Tag.innerText = profileList[i].user;
    spanTag.innerText = profileList[i].stack;

    // Configuring element classes
    divTag_1.classList = 'user-profile__container';

    figureTag.appendChild(imgTag);
    divTag_2.append(h2Tag, spanTag);
    divTag_1.append(figureTag, divTag_2);

    return divTag_1;
}

function createPostArea() {
    // Creating the elements
    const formTag = document.createElement('form');
    const inputTag = document.createElement('input');
    const textareaTag = document.createElement('textarea');
    const buttonTag = document.createElement('button');

    // Configuring the elements
    formTag.action = '#';
    inputTag.type = 'text';
    inputTag.placeholder = 'Digitar título do post';
    textareaTag.placeholder = 'Digitar descrição do post';
    textareaTag.rows = '4';
    textareaTag.cols = '50';
    buttonTag.innerText = 'Postar';

    // Configuring element classes
    inputTag.id = 'input__tittle';
    textareaTag.id = 'input__description';
    formTag.classList = 'form__container';
    buttonTag.classList = 'button__primary';

    formTag.append(inputTag, textareaTag, buttonTag);
    return formTag;
}

function renderNewPostArea(userlist) {
    const divTag = document.querySelector('.post-send__container');
    divTag.innerText = '';
    let div = '';
    let form = '';
    for (let i = 0; i < userlist.length; i++) {
        div = createProfilePost(userlist, 0);
        form = createPostArea();
    }
    divTag.append(div, form);
}


function createFollowsList(followList, i) {
    // Creating the elements
    const liTag = document.createElement('li');
    const divTag_1 = document.createElement('div');
    const divTag_2 = document.createElement('div');
    const divTag_3 = document.createElement('div');
    const figureTag = document.createElement('figure');
    const imgTag = document.createElement('img');
    const h2Tag = document.createElement('h2');
    const spanTag = document.createElement('span');
    const buttonTag = document.createElement('button');

    // Configuring the elements
    imgTag.src = followList[i].img;
    imgTag.alt = `profile ${followList[i].user}`;
    h2Tag.innerText = followList[i].user;
    spanTag.innerText = followList[i].stack;
    buttonTag.innerText = 'Seguir';
    
    // Configuring element classes
    liTag.classList = 'follow__list';
    buttonTag.classList = 'button__outline';

    figureTag.appendChild(imgTag);
    divTag_2.append(h2Tag, spanTag);
    divTag_1.append(figureTag, divTag_2);
    divTag_3.appendChild(buttonTag);
    liTag.append(divTag_1, divTag_3);

    return liTag;
}

function renderFollows(followList) {
    const ulTag = document.querySelector('#suggest__user');
    ulTag.innerText = '';

    for (let i = 0; i < followList.length; i++) {
        let liTag = createFollowsList(followList, i);
        ulTag.appendChild(liTag);
    }
}

function createPostsList(postList, i) {
    // Creating the elements
    const liTag = document.createElement('li');
    const divTag_1 = document.createElement('div');
    const divTag_2 = document.createElement('div');
    const divTag_3 = document.createElement('div');
    const divTag_4 = document.createElement('div');
    const figureTag = document.createElement('figure');
    const imgTag_1 = document.createElement('img');
    const imgTag_2 = document.createElement('img');
    const imgTag_3 = document.createElement('img');
    const h1Tag = document.createElement('h1');
    const h2Tag = document.createElement('h2');
    const pTag = document.createElement('p');
    const spanTag_1 = document.createElement('span');
    const spanTag_2 = document.createElement('span');
    const buttonTag = document.createElement('button');

    // Configuring the elements
    imgTag_1.src = postList[i].img;
    imgTag_1.alt = `profile ${postList[i].user}`;
    h2Tag.innerText = postList[i].user;
    spanTag_1.innerText = postList[i].stack;
    h1Tag.innerText = postList[i].title;
    pTag.innerText = postList[i].text;
 
    buttonTag.innerText = 'Abrir Post';
    imgTag_2.src = './src/assets/img/like-disabled.svg';
    imgTag_2.alt = 'like post';
    imgTag_2.classList = 'like__post--disabled';
    spanTag_2.innerText = postList[i].likes;
    buttonTag.dataset.btnId = postList[i].id;
    
    // Configuring element classes
    liTag.classList = 'post-list__container';
    divTag_1.classList = 'user-profile__post';
    divTag_3.classList = 'post-text__area';
    divTag_4.classList = 'button-like__area';
    pTag.classList = 'text__user';
    buttonTag.classList = `button__dark btn__modal--open`;

    figureTag.appendChild(imgTag_1);
    divTag_2.append(h2Tag, spanTag_1);
    divTag_1.append(figureTag, divTag_2);
    divTag_3.append(h1Tag, pTag);
    divTag_4.append(buttonTag, imgTag_2, spanTag_2);
    liTag.append(divTag_1, divTag_3, divTag_4);

    return liTag;
}

function renderPost(listDataPosts) {
    const ulTag = document.querySelector('#posts__list');
    ulTag.innerText = '';
    
    for(let i = 0; i < listDataPosts.length; i++) {
        let liTag = createPostsList(listDataPosts, i);
        ulTag.appendChild(liTag);
    }
}

function createModalPost(postModalList, i) {
    const divMain = document.querySelector('.modal__container');
    divMain.innerText = '';

    // Creating the elements
    const buttonTag = document.createElement('button');
    const liTag = document.createElement('li');
    const divTag_1 = document.createElement('div');
    const figureTag = document.createElement('figure');
    const imgTag = document.createElement('img');
    const divTag_2 = document.createElement('div');
    const h2Tag = document.createElement('h2');
    const spanTag = document.createElement('span');
    const divTag_3 = document.createElement('div');
    const h1Tag = document.createElement('h1');
    const pTag = document.createElement('p');

    // Configuring the elements
    buttonTag.innerText = 'X';
    imgTag.src = postModalList[i].img; 
    imgTag.alt = `profile ${postModalList[i].user}`;
    h2Tag.innerText = postModalList[i].user;
    spanTag.innerText = postModalList[i].stack;
    h1Tag.innerText = postModalList[i].title;
    pTag.innerText = postModalList[i].text;

    // Configuring element classes
    buttonTag.classList = 'btn__modal--close';
    liTag.classList = 'post-list__container';
    divTag_1.classList = 'user-profile__post';
    divTag_3.classList = 'post-text__area';

    figureTag.appendChild(imgTag);
    divTag_2.append(h2Tag, spanTag);
    divTag_1.append(figureTag, divTag_2);
    divTag_3.append(h1Tag, pTag);
    liTag.append(divTag_1, divTag_3);
    divMain.append(buttonTag, liTag);
}

function findPost(list, id) {
    let post = {};
    for (let i = 0; i < list.length; i++) {
        if(list[i].id == id) {
            post = list[i];
            return post;
        }
    }
}

function handleModal(arrayList) {
    const modal = document.querySelector('#modal__controller'); 
    const buttonPrimary = document.querySelectorAll('.btn__modal--open');
    
    for (let i = 0; i < buttonPrimary.length; i++) {
        let button = buttonPrimary[i];
        button.addEventListener('click', (e) => {
            let idValidation = e.target.dataset.btnId;
            findPost(arrayList, idValidation);

            createModalPost(arrayList, i);
            modal.showModal();
            closeModal();
        })
    }
}

function closeModal() {
    const button = document.querySelector('.btn__modal--close');
    const modal = document.querySelector('#modal__controller');

    button.addEventListener('click', () => {
        modal.close();
    });
}

function followActive() {
    const btnActive = document.querySelectorAll('.button__outline');

    for (let i = 0; i < btnActive.length; i++) {
        let btnArray = btnActive[i];
        
        btnArray.addEventListener('click', (e) => {
            e.preventDefault;
           let follow = e.target.innerText;

           if (follow == 'Seguir') {
                btnArray.innerText = 'Seguindo';
                btnArray.classList= 'button__outline--focus';
           } else if (follow == 'Seguindo') {
                btnArray.innerText = 'Seguir';
                btnArray.classList= 'button__outline';
           }
        });
    }
}

function likeController() {
    const imgLike = document.querySelectorAll('.button-like__area > img');
    const spanLike = document.querySelectorAll('.button-like__area > span');

    for(let i = 0; i < imgLike.length; i++) {
        imgLike[i].addEventListener('click', () => {
            let imgStatus = imgLike[i];

            if (imgStatus.className == 'like__post--disabled') {
                spanLike[i].innerText = Number(spanLike[i].innerText) + 1;
                imgStatus.setAttribute('src', "./src/assets/img/like-enabled.svg"); 
                imgStatus.className = 'like__post--enabled';
            } else {
                spanLike[i].innerText = Number(spanLike[i].innerText) - 1;
                imgStatus.setAttribute('src', "./src/assets/img/like-disabled.svg");
                imgStatus.className = 'like__post--disabled';
            }
        });
    }
}

function maximumCharacters(numberChar) {
    const textContent = document.querySelectorAll('.text__user');

    for (let i = 0; i < textContent.length; i++) {
        textContent[i].innerText = textContent[i].innerText.substring(0, numberChar) + '...'; 
    }
}

renderNewPostArea(users);
renderFollows(suggestUsers);
renderPost(posts);
handleModal(posts); 
followActive();
likeController();
maximumCharacters(182);