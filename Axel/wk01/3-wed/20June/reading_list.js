console.log('reading list running')
// create array with multiple book objects

var readingList = [

  book1 = {
    title: 'Lord of the Rings',
    author: ' J.R.R Tolkien',
    alreadyRead: false
  },

  book2 = {
    title: 'The way of kings',
    author: 'Brandon Sanderson',
    alreadyRead: true
  },

  book3 = {
    title: 'Hyperion',
    author: 'Dan Simmons',
    alreadyRead: true
  }

]
// iterate through the books with a for loop
for (i = 0; i < readingList.length; i++) { 
    // use if/ else statement to check if book has been read
  if (readingList[i].alreadyRead === true){
    console.log('You\'ve already read the book, Title ' + readingList[i].title + ' and author ' + readingList[i].author)
  } else {
    console.log('You have not read the book, Title ' + readingList[i].title + ' and author ' + readingList[i].author)
  }
  

}
