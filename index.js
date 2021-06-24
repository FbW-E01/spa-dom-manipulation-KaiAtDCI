function createCard(book) {
    const imageUrl = book.img;
    const title = book.title;
    const lastName = book.lastname;
    const foreName = book.forename;
    const alreadyRead = book.alreadyRead;
    return `
        <li class="book">
            <img class="book-cover" src="${imageUrl}" alt="cover">
            <div class="title">Title: ${title}</div>
            <div class="author">Author: ${lastName}, ${foreName}</div>
            <div class="status" 
                 style="background-color: ${alreadyRead ? 'red' : 'green'}">Status: ${alreadyRead ? 'read' : 'to read'}
            </div>
        </li>`
}

newBooksList = books.map(book => {
    const foreName = book.author.split(' ')[0];
    const lastName = book.author.split(' ')[1];
    return {
        img: book.img,
        title: book.title,
        forename: foreName,
        lastname: lastName,
        alreadyRead: book.alreadyRead,
    }
})

newBooksList.sort((a, b) => a.lastname >= b.lastname ? 1 : -1);
const bookList = document.getElementsByClassName('book-list').item(0);
newBooksList.forEach(book => bookList.insertAdjacentHTML('beforeend', createCard(book)));