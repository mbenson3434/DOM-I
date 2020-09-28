const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const anchors = document.querySelectorAll('a')
anchors[0].textContent = siteContent['nav']['nav-item-1']
anchors[1].textContent = siteContent['nav']['nav-item-2']
anchors[2].textContent = siteContent['nav']['nav-item-3']
anchors[3].textContent = siteContent['nav']['nav-item-4']
anchors[4].textContent = siteContent['nav']['nav-item-5']
anchors[5].textContent = siteContent['nav']['nav-item-6']


document.querySelector('h1').innerHTML = 'DOM<br>\ Is<br>\ Awesome'

document.querySelector('button').textContent = siteContent['cta']['button']

const ctaLogo = document.getElementById("cta-img");
ctaLogo.setAttribute('src', siteContent["cta"]["img-src"])

const h4s = document.querySelectorAll('h4')
h4s[0].textContent = siteContent['main-content']['features-h4']
h4s[1].textContent = siteContent['main-content']['about-h4']
h4s[2].textContent = siteContent['main-content']['services-h4']
h4s[3].textContent = siteContent['main-content']['product-h4']
h4s[4].textContent = siteContent['main-content']['vision-h4']
h4s[5].textContent = siteContent['contact']['contact-h4']

console.log(h4s);

const mainImg = document.getElementById("middle-img");
mainImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


const paragraphs = document.querySelectorAll('p')
paragraphs[0].textContent = siteContent['main-content']['features-content']
paragraphs[1].textContent = siteContent['main-content']['about-content']
paragraphs[2].textContent = siteContent['main-content']['services-content']
paragraphs[3].textContent = siteContent['main-content']['product-content']
paragraphs[4].textContent = siteContent['main-content']['vision-content']

paragraphs[5].textContent = siteContent['contact']['address']
paragraphs[6].textContent = siteContent['contact']['phone']
paragraphs[7].textContent = siteContent['contact']['email']

paragraphs[8].textContent = siteContent['footer']['copyright']

const newLink1 = document.createElement('a')
newLink1.textContent = 'Link1'
newLink1.href = '#'
newLink1.id = 'newLink1'
document.querySelector('nav').appendChild(newLink1)
newLink1.style.color = 'green'

const newLink2 = document.createElement('a')
newLink2.textContent = 'Link2'
newLink2.href = '#'
newLink2.id = 'newLink2'
document.querySelector('nav').appendChild(newLink2)
newLink2.style.color = 'green'

anchors.forEach((anchor) => {
  anchor.style.color = 'green'
})
