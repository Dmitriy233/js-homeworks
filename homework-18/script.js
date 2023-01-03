
const BASE_URL = "https://jsonplaceholder.typicode.com";

const cont = document.createElement('div');
const postsXHR = new XMLHttpRequest();
postsXHR.open('GET', `${BASE_URL}/posts`);
postsXHR.responseType = 'json';

postsXHR.send()



const hideComments = (div) => {
    let comments = div.lastElementChild
    comments.remove()
}

const showComments = (comments, div) => {
    const divComment = document.createElement('div')

    comments.forEach((obj) => {
        let { body: comment } = obj

        const p = document.createElement('p')
        p.innerText = comment
        p.classList.add('comment-container')
        divComment.append(p)
    })
    div.append(divComment)
}

const getPostComments = (id, event) => {
    const commentsXHR = new XMLHttpRequest()
    commentsXHR.open('GET', `${BASE_URL}/posts/${id}/comments`)
    commentsXHR.responseType = 'json'

    commentsXHR.send()

    let button = event.target
    let parent = event.target.parentNode

    commentsXHR.onload = () => {

        let { response: result } = commentsXHR
        if (button.innerText === 'Show comments') {
            button.innerText = 'Hide comments'
            showComments(result, parent)

        } else if (button.innerText === 'Hide comments') {
            button.innerText = 'Show comments'
            hideComments(parent)
        }

    }
}

const renderPost = (postList, container) => {
    const posts = postList.map((post) => {
        const postContainer = document.createElement('div')
        const postTitle = document.createElement('h2')
        const postText = document.createElement('p')
        const button = document.createElement('button')

        postTitle.innerText = post.title;
        postText.innerText = post.body;
        button.innerText = 'Show comments'
        postContainer.classList.add('post-container')
        button.classList.add('button')

        postContainer.append(postTitle, postText, button)


        let postsId = post.id;

        button.addEventListener('click', (event) => {
            getPostComments(postsId, event)
        })


        container.append(postContainer)
    })


}


postsXHR.onload = () => {
    const { response } = postsXHR
    renderPost(response, cont)
    document.body.append(cont)
}
