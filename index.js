function createCard(book) {
    const imageUrl = book.img;
    const title = book.title;
    const authorLastName = book.authorLastName;
    const authorForeName = book.authorForeName;
    const isRead = book.alreadyRead;
    return `
        <li class="book">
            <img class="book-cover" src="${imageUrl}" alt="cover">
            <div class="title">Title: ${title}</div>
            <div class="author">Author: ${authorLastName}, ${authorForeName}</div>
            <div class="status" style="background-color: ${isRead ? 'red' : 'green'}">Status: ${isRead ? 'read' : 'to read'}</div>
        </li>`
}

newBooksList = books.map(book => {
    const foreName = book.author.split(' ')[0];
    const lastName = book.author.split(' ')[1];
    return {
        img: book.img,
        title: book.title,
        authorForeName: foreName,
        authorLastName: lastName,
        alreadyRead: book.alreadyRead,
    }
})

newBooksList.sort((a, b) => a.authorLastName >= b.authorLastName ? 1 : -1);
const bookList = document.getElementsByClassName('book-list').item(0);
newBooksList.forEach(book => bookList.insertAdjacentHTML('beforeend', createCard(book)));