const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];
const sliderProduct = [
    {
      id: 1,
      title: "AIR FORCE NEW SEASON",
      price: 119,
      bgcolor: "black",
      img: "./img/air.png",
    },
    {
      id: 2,
      title: "AIR JORDAN NEW SEASON",
      price: 149,
      bgcolor: "lightgray",
      img: "./img/jordan.png",
    },
    {
      id: 3,
      title: "BLAZER NEW SEASON",
      price: 109,
      bgcolor: "lightgreen",
      img: "./img/blazer.png",
    },
    {
      id: 4,
      title: "CRATER NEW SEASON",
      price: 129,
      bgcolor: "lighpink",
      img: "./img/crater.png",
    },
    {
      id: 5,
      title: "HIPPIE NEW SEASON",
      price: 99,
      bgcolor: "gray",
      img: "./img/hippie.png",
    },
  ];

  const facilites = [
    {
        img: "./img/shipping.png",
        ititle: "Free Shipping",
        text: "Free worldwide shipping on all orders."
    },
    {
        img: "./img/return.png",
        title: "30 days return",
        text: "No question return and easy refund in 14 days.",
    },
    {
        img: "./img/gift.png",
        title: "gift card",
        text: "Buy a girt cards and use coupon codes easily."
    },
    {
        img: "./img/contact.png",
        title: "contact us",
        text: "Keep in touch via email and support system.",
    }
  ]

  
const sliderWrapper = document.querySelector('.slider-wrapper');
const faciliteWrapper = document.querySelector('.facilite-wrapper');
const navItems = document.querySelectorAll('.item');
console.log(sliderWrapper);
const productName = document.querySelector('.pName');
const productImg = document.querySelector('.pImg');
const productPrice = document.querySelector('.pPrice');
const productColors = document.querySelectorAll('.color');
const gotoTop = document.querySelector('.goto-top');

// insert slider content
sliderProduct.forEach((item) => {
    sliderWrapper.innerHTML += `<div class="slider-item">
    <div class="imgbg">
        <img src=${item.img} alt="">
    </div>
    <div class="info">
    <h1>${item.title}</h1>
    <h2>$ ${item.price}/-</h2>
    <a href="#product"><button class="btn">buy now</button></a>
    </div>
    </div>  `
})

// insert facilite content
facilites.forEach((item)=>{
    faciliteWrapper.innerHTML += `<div class="fItems">
    <img src=${item.img} alt="">
    <h2>${item.title}</h2>
    <span>${item.text}</span>
</div>`
})

let choosenProduct = products[0];

navItems.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        // change the slider
        sliderWrapper.style.transform = `translateX(${-100 * index}vw)`;

        // remove all active linkes and add current link
        const id = e.target.dataset.id;
        if(id){
            navItems.forEach((item) => {
                item.classList.remove('active');
                e.target.classList.add('active');     
            });
        }
        choosenProduct = products[index];

        // change choosen product
        productName.textContent = choosenProduct.title;
        productPrice.textContent = "$ " + choosenProduct.price;
        productImg.src = choosenProduct.colors[0].img;

        // assigning product colors
        productColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    })
})

// change product image color
productColors.forEach((color, index) => {
    color.addEventListener('click', () =>{
        productImg.src = choosenProduct.colors[index].img;
    })
});

// toggle gotoTop button
window.addEventListener('scroll', () =>{
    const windowHeight = window.pageYOffset;
    if(windowHeight > 300){
        gotoTop.classList.add('showing');
    }else{
        gotoTop.classList.remove('showing');
    }
});

gotoTop.addEventListener('click',()=>{
    window.scroll(0,0);
})
