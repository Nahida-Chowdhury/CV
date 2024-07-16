const link = 'https://nahida-chowdhury.github.io/CV/';
const msg = encodeURIComponent('');
const title = encodeURIComponent(document.querySelector('title').textContent);

console.log([link, msg, title]);

const fb = document.querySelector('.facebook');
fb.href = `https://www.facebook.com/sharer/sharer.php?u=${link}&quote=${msg}%20${title}`;

const whatsapp = document.querySelector('.whatsapp');
whatsapp.href = `https://api.whatsapp.com/send?text=${msg}%20${link}`;

const twitter = document.querySelector('.twitter');
twitter.href = `https://twitter.com/intent/tweet?url=${link}&text=${msg}%20${title}`;

const linkedin = document.querySelector('.linkedin');
linkedin.href = 'https://www.linkedin.com/shareArticle?mini=true&url=${link}&title=${title}&summary=${msg}';