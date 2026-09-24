import { products } from "./data.js";

const header = document.querySelector("header");
header.classList.add("header");

// main header logo 9.5
const anchorlogo = document.createElement("a");
anchorlogo.classList.add("anchor-logo");
anchorlogo.href = "home-page.html";
const logoSection = document.createElement("div");
logoSection.classList.add("logo-section");

const logo = document.createElement("img");
logo.classList.add("main-logo");
logo.src = "amazon-logo.jpg";
logoSection.textContent = ".in";
logoSection.append(logo);
anchorlogo.append(logoSection);
header.append(anchorlogo);

// header location data 12
const locData = document.createElement("div");
locData.classList.add("loc-data");

const locSVG = document.createElement("div");
locSVG.classList.add("loc-svg");
locSVG.innerHTML = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>`;
locData.append(locSVG);

const locLabel = document.createElement("div");
const locLabel1 = document.createElement("div");
const locLabel2 = document.createElement("div");
locLabel1.classList.add("loc-label-1");
locLabel1.textContent = "Deliver to";
locLabel2.classList.add("loc-label-2");
locLabel2.textContent = "Kolhapur 416012";

locLabel.append(locLabel1);
locLabel.append(locLabel2);
locData.append(locLabel);

header.append(locData);

locData.addEventListener("click", () => {
  window.location.href = 'signup-page.html';
});

// header search option 45
const searchbar = document.createElement("div");
const searchCtgr = document.createElement("div");
const searchIpt = document.createElement("input");
const searchBtn = document.createElement("div");

searchbar.classList.add("search-bar");

searchCtgr.classList.add("search-ctgr");
searchCtgr.textContent = "All ▼";
const categories = [
  "All Categories", "Alexa Skills", "Amazon Devices", "Amazon Fashion", "Amazon Fresh", "Amazon Pharmacy", "Appliances",
  "Apps & Games", "Audible Audiobooks", "Baby", "Beauty", "Books", "Car & Motorbike", "Clothing & Accessories", "Deals", "Electronics",
  "Furniture", "Garden & Outdoors", "Gift Cards", "Grocery & Gourmet Foods", "Health & Personal Care", "Home & Kitchen", "Industrial & Scientific",
  "Jewellery", "Refunds", "Kindle Store", "Luggage & Bags", "Luxury Beauty", "Movies & TV Shows", "MP3 Music", "Music", "Musical Instruments",
  "Office Products", "Pet Supplies", "Prime Video", "Shoes & Handbags", "Software", "Amazon Pharmacy", "Appliances",
  "Apps & Games", "Audible Audiobooks", "Baby", "Beauty", "Books", "Car & Motorbike",
];

const categoryList = document.createElement("div");
categoryList.classList.add("ctgr-list");

categories.map((category) => {
  const ctgrLi = document.createElement("li");
  ctgrLi.classList.add("ctgr-li");
  ctgrLi.textContent = category;
  categoryList.append(ctgrLi);
});
searchCtgr.append(categoryList);

categoryList.style.visibility = "hidden";

searchCtgr.addEventListener("click", (event) => {
  if (categoryList.style.visibility != "visible") {
    categoryList.style.visibility = "visible";
    navbar.style.zIndex = "-1";
  } else {
    categoryList.style.visibility = "hidden";
    navbar.style.zIndex = "1";
  }
});

document.addEventListener("click", (event) => {
  if (categoryList.style.visibility == "visible") {
    if (event.target != searchCtgr) {
      categoryList.style.visibility = "hidden";
    }
  }

  if (event.target != searchIpt) {
    searchCtgr.style.height = "3.2vw";
    searchbar.style.boxShadow = "none";
  }

});
searchbar.append(searchCtgr);

searchIpt.classList.add("search-input");
searchbar.append(searchIpt);

searchIpt.addEventListener("focus", () => {
  searchCtgr.style.height = "3vw";
  searchbar.style.boxShadow = "0 0 1px 1px orange, 0 0 1px 4px lightsalmon";
});

searchIpt.placeholder = "Search Amazon.in";

searchBtn.classList.add("search-icon");
searchBtn.innerHTML = `<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm-8 6a8 8 0 1 1 14.32 4.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387A8 8 0 0 1 2 10z" fill="#0D0D0D"/></svg>`;

searchbar.append(searchBtn);

header.append(searchbar);

// header language option 5.5
const langOpt = document.createElement("div");
langOpt.classList.add("lang-opt");
langOpt.textContent = "EN ";
const flag = document.createElement("img");
flag.classList.add("flag-img");
const langOptArro = document.createElement("label");
langOptArro.classList.add("lang-opt-arro");
langOptArro.textContent = "▼";
langOpt.append(langOptArro);
flag.src = "ind-flag.jpg";
langOpt.append(flag);

const langDropdown = document.createElement("div");
langDropdown.classList.add("lang-dropdown");
langDropdown.style.zIndex = 10;
let languages = ["English - EN"
  , "हिन्दी - HI"
  , "தமிழ் - TA"
  , "తెలుగు - TE"
  , "ಕನ್ನಡ - KN"
  , "മലയാളം - ML"
  , "বাংলা - BN",
  "मराठी - MR"];

const dropHead = document.createElement("label");
dropHead.classList.add('drop-head');
dropHead.textContent = "Change Language.";

langDropdown.append(dropHead);
languages.map((lang) => {
  const label = document.createElement("label");
  const radio = document.createElement("input");
  label.classList.add("radio-label");
  radio.classList.add("radio-btn");
  label.textContent = lang;
  radio.type = "radio";
  radio.name = "lang";
  langDropdown.append(radio);
  langDropdown.append(label);
})
const dflag = document.createElement("img");
dflag.classList.add("dflag");
dflag.src = "ind-flag.jpg";
langDropdown.append(dflag);

const dfooter = document.createElement("label");
dfooter.classList.add("dfooter");
dfooter.textContent = "You are shopping on Amazon.in";
langDropdown.append(dfooter);

const danchor = document.createElement("a");
danchor.textContent = "Change country/region.";
danchor.classList.add("danchor");
langDropdown.append(danchor);

langOpt.append(langDropdown);
header.append(langOpt);

// Need to be fixed 
langDropdown.style.visibility = "hidden";

langOpt.addEventListener("mouseover", (event) => {

  if (langDropdown.style.visibility == "hidden") {
    langDropdown.style.visibility = "visible";
    navbar.style.zIndex = "-1";
  }
  else {
    categoryList.style.zIndex = 2;
    setTimeout(() => {
      langDropdown.style.visibility = "hidden";
      navbar.style.zIndex = "1";
    }, 400);
  }
});

// header account Sign in 10

const account = document.createElement("div");
account.classList.add("account");

const accLabel1 = document.createElement("div");
accLabel1.classList.add("acc-label-1");
accLabel1.textContent = "Hello, sign in.";

const accLabel2 = document.createElement("div");
accLabel2.classList.add("acc-label-2");
accLabel2.textContent = "Account & List";

account.append(accLabel1);
account.append(accLabel2);
header.append(account);

account.addEventListener("click", () => {
  window.location.href = 'signup-page.html';
});
// header returns and order 6

const returnOrder = document.createElement("div");
returnOrder.classList.add("return-order");

const returnL1 = document.createElement("div");
returnL1.classList.add("retL-1");
returnL1.textContent = "Returns";

const returnL2 = document.createElement("div");
returnL2.classList.add("retL-2");
returnL2.textContent = "& Orders";

returnOrder.append(returnL1);
returnOrder.append(returnL2);

header.append(returnOrder);

returnOrder.addEventListener("click", () => {
  window.location.href = 'signup-page.html';
});

// header my cart 7

const mycart = document.createElement("div");
mycart.classList.add("mycart");

const cartImg = document.createElement("img");
cartImg.src = "cart.png";
cartImg.classList.add("cart-img");

const itemCount = document.createElement("div");
itemCount.textContent = "0";
itemCount.classList.add("i-count");

const cartLabel = document.createElement("div");
cartLabel.textContent = "Cart";
cartLabel.classList.add("cart-label");


mycart.append(itemCount);
mycart.append(cartImg);
mycart.append(cartLabel);
header.append(mycart);

mycart.addEventListener("click", () => {
  window.location.href = "shopping-cart.html";
});
// Below header navigation links

const navbar = document.querySelector("nav");
navbar.classList.add("nav");

const navArea = document.createElement("div");
navArea.classList.add("nav-area");
navbar.append(navArea);

const navLinks = ["Bestsellers", "Today's deals", "Mobiles", "Movie Spot", "Amazon Pay", "Electronics", "Home & Kitchen", "Fashion"];

navLinks.map((l) => {
  const link = document.createElement("a");
  link.textContent = l;
  link.classList.add("nav-link");
  navArea.append(link);

  link.addEventListener("click" ,() => {
      if(l == "Movie Spot") {
      window.location.href = "./movie spot/movie_website.html";
    }
    });
});

const sideBarBtn = document.createElement("div");
sideBarBtn.classList.add("sbar-btn");
sideBarBtn.innerHTML = `<svg width="800px" height="800px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect width="16" height="16" id="icon-bound" fill="none" />
  <path fill="#fff" d="M1,9h14V7H1V9z M1,14h14v-2H1V14z M1,2v2h14V2H1z" /> </svg>`;

const sideBarLabel = document.createElement("div");
sideBarLabel.textContent = "All";
sideBarLabel.classList.add("sb-btn-label");

sideBarBtn.append(sideBarLabel);
navbar.append(sideBarBtn);

const sideBar = document.createElement("div");
sideBar.classList.add("display-side-bar");

const sbClsBtn = document.createElement("div");
sbClsBtn.classList.add("sb-cls-btn");
sbClsBtn.innerHTML = `<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 20L4 4.00003M20 4L4.00002 20" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>`;
sideBar.append(sbClsBtn);

const sideBarHead = document.createElement("div");
sideBarHead.classList.add("sb-head");

const sbUser = document.createElement("div");
sbUser.classList.add("sb-user");
sbUser.innerHTML = `<svg fill="#232F3E" xmlns="http://www.w3.org/2000/svg" 
	 width="800px" height="900px" viewBox="0 0 52 42" enable-background="new 0 0 52 52" xml:space="preserve">
<path d="M50,43v2.2c0,2.6-2.2,4.8-4.8,4.8H6.8C4.2,50,2,47.8,2,45.2V43c0-5.8,6.8-9.4,13.2-12.2
	c0.2-0.1,0.4-0.2,0.6-0.3c0.5-0.2,1-0.2,1.5,0.1c2.6,1.7,5.5,2.6,8.6,2.6s6.1-1,8.6-2.6c0.5-0.3,1-0.3,1.5-0.1
	c0.2,0.1,0.4,0.2,0.6,0.3C43.2,33.6,50,37.1,50,43z M26,2c6.6,0,11.9,5.9,11.9,13.2S32.6,28.4,26,28.4s-11.9-5.9-11.9-13.2
	S19.4,2,26,2z"/></svg>`;
sideBarHead.append(sbUser);

const sbLabel = document.createElement("div");
sbLabel.textContent = "Hello, sign in";
sbLabel.classList.add("sb-label");
sideBarHead.append(sbLabel);

sideBar.classList.remove("display-side-bar");
sideBar.classList.add("hide-side-bar");

sideBar.append(sideBarHead);

const sideBarBody = document.createElement("div");
sideBarBody.classList.add("sb-body");

const sbBodyTrending = document.createElement("h3");
sbBodyTrending.classList.add("sb-body-trending");
sbBodyTrending.textContent = "Trending";
sideBarBody.append(sbBodyTrending);

const sbt1 = document.createElement("h5");
sbt1.classList.add("sbt1");
sbt1.textContent = "Bestsellers";
sideBarBody.append(sbt1);

const sbt2 = document.createElement("h5");
sbt2.classList.add("sbt2");
sbt2.textContent = "New Releases";
sideBarBody.append(sbt2);

const sbDivider1 = document.createElement("div");
sbDivider1.classList.add("sb-divider1");
sideBarBody.append(sbDivider1);

const sbBodyDigitalCD = document.createElement("h3");
sbBodyDigitalCD.classList.add("sb-body-dcd");
sbBodyDigitalCD.textContent = "Digital Content and Devices";
sideBarBody.append(sbBodyDigitalCD);

const sbt3 = document.createElement("h5");
sbt3.classList.add("sbt3");
sbt3.innerHTML = "Echo & Alexa <div>&#11166;</div>";
sideBarBody.append(sbt3);

const sbt4 = document.createElement("h5");
sbt4.classList.add("sbt4");
sbt4.innerHTML = "Fire TV <div>&#11166;</div>";
sideBarBody.append(sbt4);

const sbt5 = document.createElement("h5");
sbt5.classList.add("sbt5");
sbt5.innerHTML = "Kindle E-Readers & eBook <div>&#11166;</div>";
sideBarBody.append(sbt5);

const sbt6 = document.createElement("h5");
sbt6.classList.add("sbt6");
sbt6.innerHTML = "Audible AudioBooks <div>&#11166;</div>";
sideBarBody.append(sbt6);

const sbDivider2 = document.createElement("div");
sbDivider2.classList.add("sb-divider1");
sideBarBody.append(sbDivider2);

const sbBodyShopBC = document.createElement("h3");
sbBodyShopBC.classList.add("sb-body-dcd");
sbBodyShopBC.textContent = "Shop by Category";
sideBarBody.append(sbBodyShopBC);

const sbt7 = document.createElement("h5");
sbt7.classList.add("sbt7");
sbt7.innerHTML = "Mobile, Computers <div>&#11166;</div>";
sideBarBody.append(sbt7);

const sbt8 = document.createElement("h5");
sbt8.classList.add("sbt8");
sbt8.innerHTML = "TV, Appliances, Electronics <div>&#11166;</div>";
sideBarBody.append(sbt8);

const sbt9 = document.createElement("h5");
sbt9.classList.add("sbt9");
sbt9.innerHTML = "Men's Fashin <div>&#11166;</div>";
sideBarBody.append(sbt9);

const sbt10 = document.createElement("h5");
sbt10.classList.add("sbt10");
sbt10.innerHTML = "Women's Fashin <div>&#11166;</div>";
sideBarBody.append(sbt10);

const sbDivider3 = document.createElement("div");
sbDivider3.classList.add("sb-divider1");
sideBarBody.append(sbDivider3);

const sbBodyHS = document.createElement("h3");
sbBodyHS.classList.add("sb-body-dcd");
sbBodyHS.textContent = "Help & Settings";
sideBarBody.append(sbBodyHS);

const sbt11 = document.createElement("h5");
sbt11.classList.add("sbt1");
sbt11.textContent = "Your Account";
sideBarBody.append(sbt11);

const sbt12 = document.createElement("h5");
sbt12.classList.add("sbt1");
sbt12.textContent = "Customer Service";
sideBarBody.append(sbt12);

const sbt13 = document.createElement("h5");
sbt13.classList.add("sbt1");
sbt13.textContent = "Sign in";
sideBarBody.append(sbt13);

const echo_Alexa = ["See All Devices With Alexa", "Meet Alexa", "Alexa Skills", "Alexa App", "Alexa Smart Home", "Amazon Prime Music"];
const fireTV = ["Movie Spot", "Fire TV Apps & Games", "See All Fire TV Devices", "Amazon Prime Video"];
const kindle = ["All-new Kindle", "All New Kindle Paperwhite", "All New Kindle Oasis"]
const AudioBooks = ["Audible Membership", "All Audiobooks", "Best Sellers", "New Releases", "Hindi Audiobooks"];

const mobComp = ["All Mobile Phones", "All Mobile Accessories", "Cases & Covers", "All Computers & Accessories", "Laptops", "Devies & Storages", "Printer & Inks"];
const tvApps = ["Televisions", "Headphones", "Home Entertainment System", "DLSR Cameras", "Gaming Consoles", "Air Conditioners", "Refrigerators", "Washing Machines"];
const menFashion = ["Clothing", "T-Shirt & Polos", "Shirts", "Jeans", "Sunglasses", "Jewellery", "Casual Shoes", "Sportswear"];
const womenFashion = ["Clothing", "Western Wear", "Ethnic Wear", "Handbags & Sunglasses", "Gold & Dimond Jewellery", "Top Brands"];

const sideBar2ndBody = document.createElement("div");
sideBar2ndBody.classList.add("shrink-sidebar");



sideBar.append(sideBar2ndBody);
sideBar.append(sideBarBody);
const mainSB = document.querySelector(".side-bar");
mainSB.append(sideBar);



const addBackBtnSB = () => {
  const sb2ndBackBtn = document.createElement("div");
  sb2ndBackBtn.classList.add("sb2b");
  sb2ndBackBtn.innerHTML = "&#11164; MAIN MENU";
  sb2ndBackBtn.style.fontWeight = "Bold"
  sb2ndBackBtn.style.padding = "1vw 2vw";

  const sbDivider4 = document.createElement("div");
  sbDivider4.classList.add("sb-divider1");

  sideBar2ndBody.append(sb2ndBackBtn);
  sideBar2ndBody.append(sbDivider4);

  sb2ndBackBtn.addEventListener("click", () => {
    sideBar2ndBody.classList.remove("expand-sidebar");
    sideBar2ndBody.classList.add("shrink-sidebar");

    sideBarBody.classList.remove("shrink-sidebar");
    sideBarBody.classList.add("sb-body");

    sideBar2ndBody.innerHTML = "";
  });
}

const putSidebarElemnts = (arr) => {
  arr.map((ele) => {
    const li = document.createElement("div");
    li.textContent = ele;
    li.classList.add("sbElements");
    sideBar2ndBody.append(li);
  });
}

document.addEventListener("click", (event) => {
  if (event.target.classList.value === "sbt3") {

    sideBarBody.classList.remove("sb-body");
    sideBarBody.classList.add("shrink-sidebar");
    sideBar2ndBody.classList.remove("shrink-sidebar");
    sideBar2ndBody.classList.add("expand-sidebar");

    addBackBtnSB();
    putSidebarElemnts(echo_Alexa);

  } else if (event.target.classList.value === "sbt4") {
    sideBarBody.classList.remove("sb-body");
    sideBarBody.classList.add("shrink-sidebar");
    sideBar2ndBody.classList.remove("shrink-sidebar");
    sideBar2ndBody.classList.add("expand-sidebar");

    addBackBtnSB();
    putSidebarElemnts(fireTV);
  } else if (event.target.classList.value === "sbt5") {
    sideBarBody.classList.remove("sb-body");
    sideBarBody.classList.add("shrink-sidebar");
    sideBar2ndBody.classList.remove("shrink-sidebar");
    sideBar2ndBody.classList.add("expand-sidebar");

    addBackBtnSB();
    putSidebarElemnts(kindle);
  } else if (event.target.classList.value === "sbt6") {
    sideBarBody.classList.remove("sb-body");
    sideBarBody.classList.add("shrink-sidebar");
    sideBar2ndBody.classList.remove("shrink-sidebar");
    sideBar2ndBody.classList.add("expand-sidebar");

    addBackBtnSB();
    putSidebarElemnts(AudioBooks);
  } else if (event.target.classList.value === "sbt7") {
    sideBarBody.classList.remove("sb-body");
    sideBarBody.classList.add("shrink-sidebar");
    sideBar2ndBody.classList.remove("shrink-sidebar");
    sideBar2ndBody.classList.add("expand-sidebar");

    addBackBtnSB();
    putSidebarElemnts(mobComp);
  } else if (event.target.classList.value === "sbt8") {
    sideBarBody.classList.remove("sb-body");
    sideBarBody.classList.add("shrink-sidebar");
    sideBar2ndBody.classList.remove("shrink-sidebar");
    sideBar2ndBody.classList.add("expand-sidebar");

    addBackBtnSB();
    putSidebarElemnts(tvApps);
  } else if (event.target.classList.value === "sbt9") {
    sideBarBody.classList.remove("sb-body");
    sideBarBody.classList.add("shrink-sidebar");
    sideBar2ndBody.classList.remove("shrink-sidebar");
    sideBar2ndBody.classList.add("expand-sidebar");

    addBackBtnSB();
    putSidebarElemnts(menFashion);
  } else if (event.target.classList.value === "sbt10") {
    sideBarBody.classList.remove("sb-body");
    sideBarBody.classList.add("shrink-sidebar");
    sideBar2ndBody.classList.remove("shrink-sidebar");
    sideBar2ndBody.classList.add("expand-sidebar");

    addBackBtnSB();
    putSidebarElemnts(womenFashion);
  }
});


// special offer cards 
const specialOffer = document.querySelector(".special-offer-cards");

const spcrd1 = document.createElement("div");
spcrd1.classList.add("spcrd");
spcrd1.innerHTML = `<img alt="Kurta" src="https://m.media-amazon.com/images/I/516N2UzaCAL._SX855_.jpg" aria-label="Kurta" class="_single-creative-card_style_image__kEmO2" data-a-hires="https://m.media-amazon.com/images/I/516N2UzaCAL._SX855_.jpg">`;
specialOffer.append(spcrd1);
const spcrdTitle1 = document.createElement("div");
spcrdTitle1.innerHTML = `<h1>UNDER ₹199</h1> 
                        <h2>Trendy earrings</h2> 
                        <h3>Pay on delivery</h3>
                        <p>*T&C apply </p>`;
spcrdTitle1.style.color = "white";
spcrdTitle1.style.top = "30%";
spcrdTitle1.classList.add("spcrd-title");
spcrd1.append(spcrdTitle1);


const spcrd2 = document.createElement("div");
spcrd2.innerHTML = `<img alt="Men" src="https://m.media-amazon.com/images/I/71oF6VZGc5L._SX855_.jpg" aria-label="Men" class="_single-creative-card_style_image__kEmO2" data-a-hires="https://m.media-amazon.com/images/I/71oF6VZGc5L._SX855_.jpg">`;
spcrd2.classList.add("spcrd");
specialOffer.append(spcrd2);

const spcrdTitle2 = document.createElement("div");
spcrdTitle2.innerHTML = `<h1>UNDER ₹399</h1> 
                        <h2>T-shirts & polos</h2> 
                        <h3>Top Brands</h3>
                        <p>*T&C apply </p>`;
spcrdTitle2.classList.add("spcrd-title");
spcrd2.append(spcrdTitle2);

const spcrd3 = document.createElement("div");
spcrd3.classList.add("spcrd");
spcrd3.innerHTML = `<img alt="Kurta" src="https://m.media-amazon.com/images/I/61FElI7G+YL._SX855_.jpg" aria-label="Kurta" class="_single-creative-card_style_image__kEmO2" data-a-hires="https://m.media-amazon.com/images/I/61FElI7G+YL._SX855_.jpg">`;
specialOffer.append(spcrd3);

const spcrdTitle3 = document.createElement("div");
spcrdTitle3.innerHTML = `<h1>UNDER ₹699</h1> 
                        <h2>Bags & bagpacks</h2> 
                        <h3>Pay on delivery</h3>
                        <p>*T&C apply </p>`;
spcrdTitle3.style.color = "black";
spcrdTitle3.style.top = "30%";
spcrdTitle3.classList.add("spcrd-title");
spcrd3.append(spcrdTitle3);

const spcrd4 = document.createElement("div");
spcrd4.classList.add("spcrd");
spcrd4.innerHTML = `<img alt="Kurta" src="https://m.media-amazon.com/images/I/71DKa-FEMkL._SX855_.jpg" aria-label="Kurta" class="_single-creative-card_style_image__kEmO2" data-a-hires="https://m.media-amazon.com/images/I/71DKa-FEMkL._SX855_.jpg">`;
specialOffer.append(spcrd4);

const spcrdTitle4 = document.createElement("div");
spcrdTitle4.innerHTML = `<h1>UNDER ₹399</h1> 
                        <h2>Sarees</h2> 
                        <h3>Latest Trends</h3>
                        <p>*T&C apply </p>`;
spcrdTitle4.style.color = "white";
spcrdTitle4.style.top = "30%";
spcrdTitle4.classList.add("spcrd-title");
spcrd4.append(spcrdTitle4);

const spcrd5 = document.createElement("div");
spcrd5.classList.add("spcrd");
spcrd5.innerHTML = `<img alt="Men jeans" src="https://m.media-amazon.com/images/I/71PvBKGHRsL._SX855_.jpg" aria-label="Men jeans" class="_single-creative-card_style_image__kEmO2" data-a-hires="https://m.media-amazon.com/images/I/71PvBKGHRsL._SX855_.jpg">`;
specialOffer.append(spcrd5);

const spcrdTitle5 = document.createElement("div");
spcrdTitle5.innerHTML = `<h1>UNDER ₹499</h1> 
                        <h2>Jeans</h2> 
                        <h3>Latest Trends</h3>
                        <p>*T&C apply </p>`;
spcrdTitle5.style.color = "white";
spcrdTitle5.style.top = "30%";
spcrdTitle5.classList.add("spcrd-title");
spcrd5.append(spcrdTitle5);

const spcrd6 = document.createElement("div");
spcrd6.classList.add("spcrd");
spcrd6.innerHTML = `<img alt="Kurta" src="https://m.media-amazon.com/images/I/61wTM5dmbwL._SX855_.jpg" aria-label="Kurta" class="_single-creative-card_style_image__kEmO2" data-a-hires="https://m.media-amazon.com/images/I/61wTM5dmbwL._SX855_.jpg">`;
specialOffer.append(spcrd6);

const spcrdTitle6 = document.createElement("div");
spcrdTitle6.innerHTML = `<h1>UNDER ₹399</h1> 
                        <h2>Trendy Dresses</h2> 
                        <h3>Latest Trends</h3>
                        <p>*T&C apply </p>`;
spcrdTitle6.style.color = "black";
spcrdTitle6.style.top = "30%";
spcrdTitle6.classList.add("spcrd-title");
spcrd6.append(spcrdTitle6);

const spcrd7 = document.createElement("div");
spcrd7.classList.add("spcrd");
spcrd7.innerHTML = `<img alt="Top" src="https://m.media-amazon.com/images/I/51jTehhu70L._SX855_.jpg" aria-label="Top" class="_single-creative-card_style_image__kEmO2" data-a-hires="https://m.media-amazon.com/images/I/51jTehhu70L._SX855_.jpg">`;
specialOffer.append(spcrd7);

const spcrdTitle7 = document.createElement("div");
spcrdTitle7.innerHTML = `<h1>ACCESSORIES</h1> 
                        <h2>Keyboards, mice & headphones</h2> 
                        <h3>Up to 60% Off</h3>
                        <p>*T&C apply </p>`;
spcrdTitle7.style.color = "white";
spcrdTitle7.style.top = "30%";
spcrdTitle7.classList.add("spcrd-title");
spcrd7.append(spcrdTitle7);

sideBarBtn.addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector("body").style.overflow = "hidden";
  header.style.opacity = 0.3;
  navbar.style.opacity = 0.3;
  navbar.style.zIndex = "-1";
  specialOffer.style.opacity = "0.3";

  specialOffer.style.zIndex = "-1";
  sideBar.classList.remove("hide-side-bar");
  sideBar.classList.add("display-side-bar");

});

sbClsBtn.addEventListener("click", () => {
  sideBar.classList.remove("display-side-bar");
  sideBar.classList.add("hide-side-bar");
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector("body").style.overflow = "visible";
  navbar.style.opacity = 1;
  header.style.opacity = 1;
  navbar.style.zIndex = "1";
  specialOffer.style.opacity = "1";

  sideBar2ndBody.classList.remove("expand-sidebar");
  sideBar2ndBody.classList.add("shrink-sidebar");

  sideBarBody.classList.remove("shrink-sidebar");
  sideBarBody.classList.add("sb-body");

  sideBar2ndBody.innerHTML = "";
});

const slideLeft = document.createElement("div");
slideLeft.classList.add("slide-left");
slideLeft.innerHTML = "&#65308;";
slideLeft.style.visibility = "hidden";
specialOffer.append(slideLeft);

const slideRight = document.createElement("div");
slideRight.classList.add("slide-right");
slideRight.innerHTML = "&#65310;";
specialOffer.append(slideRight);

specialOffer.addEventListener("scroll", () => {
  let sv = specialOffer.scrollLeft;

  if (sv <= 1) {
    slideLeft.style.visibility = "hidden";
  } else {
    slideLeft.style.visibility = "visible";
  }

  if (sv >= 768) {
    slideRight.style.visibility = "hidden";
  } else {
    slideRight.style.visibility = "visible";
  }
});

slideLeft.addEventListener("click", () => {
  specialOffer.scrollBy({
    left: -713,
    behavior: "smooth"
  });
});

slideRight.addEventListener("click", () => {
  specialOffer.scrollBy({
    left: 713,
    behavior: "smooth"
  });
});




const offerDeal = document.querySelector(".offer-deal-cards");

const dealsForULabel = document.createElement("div");
dealsForULabel.textContent = "Recommanded deals for you";
dealsForULabel.classList.add("dls-Fr-U-L");

offerDeal.append(dealsForULabel);

// =======================================================================

const createOfferDealContainer = (array, heading) => {
  const dlsFrU = document.createElement("div");
  dlsFrU.classList.add("dls-fr-u")
  offerDeal.append(dlsFrU);

  const prodBoxLbl = document.createElement("h1");
  prodBoxLbl.classList.add("prod-box-label");
  prodBoxLbl.innerHTML = `${heading} <p> > </p>`;
  dlsFrU.append(prodBoxLbl);

  array.map((prod) => {
    const prodBox = document.createElement("div");
    prodBox.classList.add("prod-box");
    dlsFrU.append(prodBox);

    const prodImg = document.createElement("img");
    prodImg.src = prod.imgLink;
    prodImg.classList.add("prod-img");
    prodBox.append(prodImg);

    const discountBox = document.createElement("div");
    discountBox.innerHTML = `${prod.discount}% Off`;
    discountBox.classList.add("discount-box");
    prodBox.append(discountBox);

    const ltd = document.createElement("div");
    ltd.textContent = "Limited time deal";
    ltd.classList.add("ltd");
    prodBox.append(ltd);

    prodBox.addEventListener("click", () => {
      localStorage.setItem("selectedProduct", JSON.stringify(prod));
      window.location.href = "product-page.html";
    });

  });
}


const dealsForYou = [products.electronics[0], products.electronics[5], products.clothing[5], products.furniture[3]];
createOfferDealContainer(dealsForYou, "Deals for you");

const inspiredByHistory = [products.electronics[8], products.electronics[9], products.electronics[10], products.electronics[11]];
createOfferDealContainer(inspiredByHistory, "Inspired by your recent history");

const fourStarAbove = [products.clothing[2], products.clothing[4], products.furniture[2], products.furniture[1]];
createOfferDealContainer(fourStarAbove, "4 stars and above");


const createOfferDealContainer2 = (array, heading) => {
  const dlsFrU = document.createElement("div");
  dlsFrU.classList.add("dls-fr-u2")
  offerDeal.append(dlsFrU);

  const prodBoxLbl = document.createElement("h1");
  prodBoxLbl.classList.add("prod-box-label");
  prodBoxLbl.innerHTML = `${heading}`;
  dlsFrU.append(prodBoxLbl);

  array.map((prod) => {
    const prodBox = document.createElement("div");
    prodBox.classList.add("prod-box");
    dlsFrU.append(prodBox);

    const prodImg = document.createElement("img");
    prodImg.src = prod.imgLink;
    prodImg.classList.add("prod-img");
    prodBox.append(prodImg);

    const prodName = document.createElement("div");
    prodName.textContent = prod.productName;
    prodName.classList.add("prod-name");
    prodBox.append(prodName);

    const prodPrice = document.createElement("div");
    const discountedPrice = prod.price - (prod.price * prod.discount / 100);
    prodPrice.innerHTML = `<P>₹</P>${discountedPrice.toFixed(0)}<P>00</P>`;
    prodPrice.classList.add("prod-price");
    prodBox.append(prodPrice);

    prodBox.addEventListener("click", () => {
      localStorage.setItem("selectedProduct", JSON.stringify(prod));
      window.location.href = "product-page.html";
    });
  });
}

const amazonFashion = [products.clothing[8], products.clothing[7], products.clothing[2], products.clothing[1]];
createOfferDealContainer2(amazonFashion, "Amazon Fashion");

const furnitureForU = [products.furniture[7], products.furniture[6], products.furniture[5], products.furniture[4]];
createOfferDealContainer2(furnitureForU, "Based on your shopping trend");


const bestSellingLaptops = [products.electronics[4], products.electronics[3], products.electronics[2], products.electronics[1]];
createOfferDealContainer2(bestSellingLaptops, "Best selling laptops");


const ContinueWhereULeftOff = [products.clothing[0], products.furniture[0], products.clothing[2], products.furniture[2]];
createOfferDealContainer2(ContinueWhereULeftOff, "Continue where you left off");

const smartPhonesDeals = [products.electronics[5], products.electronics[6], products.electronics[7], products.electronics[8]];
createOfferDealContainer2(smartPhonesDeals, "Best smart phones Deals");

const additionalItemsToExplore = [products.electronics[0], products.electronics[12], products.electronics[1], products.electronics[3]];
createOfferDealContainer2(additionalItemsToExplore, "Additional items to explore");

// Customers who viewed items in your browsing history also viewed

const otherSuggestions = document.querySelector(".other-sugg");
otherSuggestions.classList.add("other-suggestions");

const otherSuggHeading = document.createElement("div");
otherSuggHeading.innerHTML = `<h1>Customers who viewed items in your browsing history also viewed</h1><p id="pageNo">Page 1 of 4</p>`;
otherSuggHeading.classList.add("other-sugg-heading");

otherSuggestions.append(otherSuggHeading);

const otherSuggestionsItems = [
  products.electronics[6], products.clothing[3], products.furniture[3],
  products.furniture[6], products.clothing[6], products.electronics[3],
  products.electronics[1], products.clothing[1], products.furniture[1],
  products.electronics[5], products.clothing[5], products.furniture[5],
  products.electronics[7], products.clothing[7], products.furniture[7],
  products.electronics[0], products.clothing[0], products.furniture[0],

  products.electronics[2], products.clothing[2], products.furniture[2],

  products.electronics[4], products.clothing[4], products.furniture[4],
];

const otherSuggLeftBtn = document.createElement("div");
otherSuggLeftBtn.textContent = "﹤";
otherSuggLeftBtn.classList.add("other-sugg-left-btn");

const otherSuggRightBtn = document.createElement("div");
otherSuggRightBtn.textContent = "﹥";
otherSuggRightBtn.classList.add("other-sugg-right-btn");

otherSuggestions.append(otherSuggLeftBtn);
otherSuggestions.append(otherSuggRightBtn);

const suggContainer = document.createElement("div");
suggContainer.classList.add("sugg-container");
otherSuggestions.append(suggContainer);

otherSuggestionsItems.map((product) => {
  const itemBox = document.createElement("div");
  itemBox.classList.add("item-box");
  suggContainer.append(itemBox);

  const itemimg = document.createElement("img");
  itemimg.src = product.imgLink;
  itemimg.classList.add("item-img");
  itemBox.append(itemimg);

  const itemName = document.createElement("div");
  itemName.innerHTML = `<a>${product.productName}</a>`;
  itemName.classList.add("item-name");
  itemBox.append(itemName)

  const ratingImg = document.createElement("img");
  ratingImg.src = "rating.png";
  ratingImg.width = "100px";
  ratingImg.classList.add("rating-img");
  itemBox.append(ratingImg);

  const prizing = document.createElement("div");
  prizing.classList.add("prizing");
  itemBox.append(prizing);

  const itemDiscount = document.createElement("div");
  itemDiscount.innerHTML = `-${product.discount}%`;
  itemDiscount.classList.add("item-discount");
  prizing.append(itemDiscount);


  const prodPrice = document.createElement("div");
  const discountedPrice = product.price - (product.price * product.discount / 100);
  prodPrice.innerHTML = `<P>₹</P>${discountedPrice.toFixed(0)}.00`;
  prodPrice.classList.add("item-discounted-price");
  prizing.append(prodPrice);

  const ogPrice = document.createElement("div");
  ogPrice.innerHTML = `M.R.P:<s>₹${product.price}.00</s>`;
  ogPrice.classList.add("og-price");
  prizing.append(ogPrice);

  const getItBy = document.createElement("div");
  getItBy.innerHTML = `Get it by<b>Friday, September 25</b>`;
  getItBy.classList.add("getitby");
  itemBox.append(getItBy);

  const freeDeliveryTag = document.createElement("div");
  freeDeliveryTag.textContent = "FREE Delivery by Amazon";
  freeDeliveryTag.classList.add("freeDtag");
  itemBox.append(freeDeliveryTag);

  itemimg.addEventListener("click", () => {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    window.location.href = "product-page.html";
  });
  itemName.addEventListener("click", () => {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    window.location.href = "product-page.html";
  });
})

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

suggContainer.addEventListener("wheel", (e) => {
  if (Math.abs(e.deltaX) > 0 || e.shiftKey) {
    e.preventDefault();
  }
});

suggContainer.addEventListener("keydown", (e) => {
  if (
    e.key === "ArrowLeft" ||
    e.key === "ArrowRight" ||
    e.key === "Home" ||
    e.key === "End"
  ) {
    e.preventDefault();
  }
});

const pageNo = document.querySelector("#pageNo");

let no = 1;

otherSuggRightBtn.addEventListener("click", () => {

  if (no === 4) {
    no = 1;
    suggContainer.scrollTo({
      left: 0,
      behavior: "smooth"
    });
  } else {
    no++;
    suggContainer.scrollBy({
      left: suggContainer.clientWidth,
      behavior: "smooth"
    });
  }
  pageNo.textContent = `Page ${no} of 4`;
});


otherSuggLeftBtn.addEventListener("click", () => {

  if (no === 1) {
    no = 4;
    suggContainer.scrollTo({
      left: suggContainer.scrollWidth,
      behavior: "smooth"
    });
  } else {
    no--;
    suggContainer.scrollBy({
      left: -suggContainer.clientWidth,
      behavior: "smooth"
    });
  }

  pageNo.textContent = `Page ${no} of 4`;
});

const backToTop = document.querySelector(".page-end");
backToTop.textContent = "Back to top";
backToTop.classList.add("back-to-top");


const footer = document.querySelector("footer");
footer.classList.add("footer");

const footerLink1 = document.createElement("div");
const footerLink2 = document.createElement("div");
const footerLink3 = document.createElement("div");
const footerLink4 = document.createElement("div");

footerLink1.classList.add("footerLink");
footerLink2.classList.add("footerLink");
footerLink3.classList.add("footerLink");
footerLink4.classList.add("footerLink");

footer.append(footerLink1);
footer.append(footerLink2);
footer.append(footerLink3);
footer.append(footerLink4);

const footerL1 = document.createElement("h1");
const footerL2 = document.createElement("h1");
const footerL3 = document.createElement("h1");
const footerL4 = document.createElement("h1");

footerL1.textContent = "Get to Know Us";
footerL2.textContent = "Connect with Us";
footerL3.textContent = "Make Money with Us";
footerL4.textContent = "Let Us Help You";

footerLink1.append(footerL1);
footerLink2.append(footerL2);
footerLink3.append(footerL3);
footerLink4.append(footerL4);


const getToKnowUs = [
  "About Amazon",
  "Careers",
  "Press Releases",
  "Amazon Science"
];

const connectWithUs = [
  "Facebook",
  "Twitter",
  "Instagram"
];

const makeMoneyWithUs = [
  "Sell on Amazon",
  "Sell under Amazon Accelerator",
  "Protect and Build Your Brand",
  "Amazon Global Selling",
  "Supply to Amazon",
  "Become an Affiliate",
  "Fulfilment by Amazon",
  "Advertise Your Products",
  "Amazon Pay on Merchants"
];

const letUsHelpYou = [
  "Your Account",
  "Returns Centre",
  "Recalls and Product Safety Alerts",
  "100% Purchase Protection",
  "Amazon App Download",
  "Help"
];

const displayFooterLinks = (array, linkArea) => {
  array.map((link) => {
    const li = document.createElement("div");
    li.textContent = link;
    li.classList.add("footLink");
    linkArea.append(li)
  });
}


displayFooterLinks(getToKnowUs, footerLink1);
displayFooterLinks(connectWithUs, footerLink2);
displayFooterLinks(makeMoneyWithUs, footerLink3);
displayFooterLinks(letUsHelpYou, footerLink4);

const footer2 = document.querySelector(".footer-bottom");
footer2.classList.add("footer-2");

const footerPart1 = document.createElement("div");
footerPart1.classList.add("fp1");
footer2.append(footerPart1);

const fp1Logo = document.createElement("img")
fp1Logo.src = "armbg.png";
footerPart1.append(fp1Logo);

const fp1Lang = document.createElement("div")
fp1Lang.innerHTML = `<svg width="800px" height="800px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#ffffff" fill="none"><circle cx="32" cy="32" r="24.86"/><path d="M32,6.84A34.09,34.09,0,0,1,43.66,32.31c0,16.19-7.28,21-11.66,24.24"/><path d="M32,6.84A34.09,34.09,0,0,0,20.31,32.31c0,16.19,7.28,21,11.66,24.24"/><line x1="10.37" y1="19.75" x2="53.75" y2="19.75"/><line x1="32" y1="6.84" x2="32" y2="56.55"/><line x1="11.05" y1="45.33" x2="52.98" y2="45.33"/><line x1="7.14" y1="32.31" x2="56.86" y2="31.69"/></svg> <div>English</div>`;
fp1Lang.classList.add("fp1-lang");
footerPart1.append(fp1Lang);

const fp1Country = document.createElement("div");
fp1Country.innerHTML = `<img src="ind-flag.jpg"><div>India</div>`;
fp1Country.classList.add("fp1c");
footerPart1.append(fp1Country);

const footerPart2 = document.createElement("div");
footerPart2.classList.add("fp2");
footer2.append(footerPart2);

const fp2Links = document.createElement("div");
fp2Links.innerHTML = `<a>Conditions of Use & Sale</a> <a>Privacy Notice
</a> <a>Interest-Based Ads</a>`;
fp2Links.classList.add("fp2-links");
footerPart2.append(fp2Links);

const copyRt = document.createElement("div");
copyRt.classList.add("copyRt");
copyRt.textContent = "© 1996-2026, Amazon.com, Inc. or its affiliates";
footerPart2.append(copyRt);

import { getCart, updateCartCount } from "./data.js";
updateCartCount(itemCount);
window.addEventListener("pageshow", () => {
    updateCartCount(itemCount);
});
console.log(getCart())