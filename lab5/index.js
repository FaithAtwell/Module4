
let news = [
    { id: 1, title: 'What are the 10 types of flour?', content: "Below are 12 common types of flour, their primary uses, and their textures...." },
    { id: 2, title: 'Cupcakes and muffins, Whats the difference?', content: "The fluffy batter is what gives cupcakes their soft, spongy texture. Muffins, on the other hand, are moist and dense...." },
    { id: 3, title: 'What makes a dessert?', content: "According to Merriam-Webster, dessert is a usually sweet course or dish (as of pastry or ice cream) usually served at the end of a meal...." }
];

function updateNewsContainer() {
    const newsContainer = document.getElementById('NewsCont');
    newsContainer.innerHTML = '';
    news.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.innerHTML = `<h2>${item.title}</h2><p>${item.content}</p>`;
        newsContainer.appendChild(newsItem);});
}

function addNewsItem() { // Add news item
    const newsTitleInput = document.getElementById('news-title');
    const newsContentInput = document.getElementById('news-content');
    const title = newsTitleInput.value;
    const content = newsContentInput.value;
    if (title && content) {
        const newItem = { id: news.length + 1, title, content };
        news.unshift(newItem);
        updateNewsContainer();
        newsTitleInput.value = '';
        newsContentInput.value = '';
    } else {
        alert('both title and content fields need to have input.');}
}

updateNewsContainer();
setInterval(function() {
    news.reverse();
    updateNewsContainer();
}, 10000);