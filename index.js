function createCard(book) {
    const imageUrl = book.img;
    const title = book.title;
    const author = book.author;
    const isRead = book.alreadyRead;
    return `
        <li class="book">
            <img class="book-cover" src="${imageUrl}" alt="cover">
            <div class="title">Title: ${title}</div>
            <div class="author">Author: ${author}</div>
            <div class="status" style="background-color: ${isRead ? 'red' : 'green'}">Status: ${isRead ? 'read' : 'to read'}</div>
        </li>`
}

const bookList = document.getElementsByClassName('book-list').item(0);
books.forEach(book => bookList.insertAdjacentHTML('beforeend', createCard(book)));