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
})

// ==================================================================================
// ==================================================================================
import { getCart, updateCartCount } from "./data.js";
updateCartCount(itemCount);

const cartDetails = document.querySelector(".cart-details");
cartDetails.classList.add("cart-details");

if (getCart().length === 0) {
  const emtCartImg = document.createElement("div");
  emtCartImg.innerHTML = `<img src="empty cart.png">`
  cartDetails.append(emtCartImg);

  const emtMsg = document.createElement("h2");
  emtMsg.textContent = "Your Amazon Cart is empty";
  cartDetails.append(emtMsg);
} else {

  const cart = getCart();
  const uniqueCart = [];
  cart.forEach((product) => {
    const existingProduct = uniqueCart.find(
      item => item.productName === product.productName
    );
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      uniqueCart.push({
        imgLink: product.imgLink,
        productName: product.productName,
        price: product.price,
        discount: product.discount,
        quantity: 1
      });
    }
  });

  console.log(uniqueCart);
  const shoppingCartLbl = document.createElement("div");
  shoppingCartLbl.textContent = "Shopping Cart";
  shoppingCartLbl.classList.add("shopping-cart-label");
  cartDetails.append(shoppingCartLbl);

  const priceTopLabel = document.createElement("p");
  priceTopLabel.textContent = "Price";
  priceTopLabel.classList.add("ptl");
  cartDetails.append(priceTopLabel);

  uniqueCart.map((product) => {
    const divider = document.createElement("div");
    divider.classList.add("divider");
    cartDetails.append(divider);

    const itemSummary = document.createElement("div");
    itemSummary.classList.add("item-summary");
    cartDetails.append(itemSummary);
    const itmSmry1 = document.createElement("div");
    const prodImage = document.createElement("img");
    prodImage.src = product.imgLink;
    itmSmry1.append(prodImage);
    itmSmry1.classList.add("itmSmry1");
    itemSummary.append(itmSmry1);

    const itmSmry2 = document.createElement("div");
    itmSmry2.innerHTML = `<div id="prodName">${product.productName}</div>
                          <div id="inStk">In Stock</div>
                          <div id="dDate">FREE delivery<b> Fri, 25 Sept, </b>Available at Checkout</div>
                          <div><img id="fufilled" src="ff.png"></div>
                          <div id="gift"><input type="checkbox">This will be a gift.</div>
                          <div id="adjustQty">
                          <div id="decQty">-</div>     <div id="Qty">${product.quantity}</div>    <div id="incQty">+</div> 
                          </div>
                          <div id="removeItem">Delete</div>`;
    itmSmry2.classList.add("itmSmry2");
    itemSummary.append(itmSmry2);

    const itmSmry3 = document.createElement("div");

    const discountedPrice = product.price - (product.price * product.discount / 100);

    itmSmry3.classList.add("itmSmry3");
    itmSmry3.innerHTML = `₹${(product.quantity * discountedPrice).toFixed(0)}<p>00</p> 
                          <div id="actPrice">M.R.P : ₹<s>${product.price * product.quantity}.00</s></div>`;
    itemSummary.append(itmSmry3);

    const decQty = document.getElementById("decQty");
    const Qty = document.getElementById("Qty");
    const incQty = document.getElementById("incQty");
    const rmItem = document.getElementById("removeItem");

    prodImage.addEventListener("click", () => {
      localStorage.setItem("selectedProduct", JSON.stringify(product));
      window.location.href = "product-page.html";
    });

    // feture scope
    // decQty.addEventListener("click", () => {
    // });

    // feture scope
    // decQty.addEventListener("click", () => {
    // });
  });

  let totalAmount = cart.reduce((acl,prod) => {
    let discountedPrice = prod.price - (prod.price * prod.discount / 100);
    return acl += discountedPrice;
  }, 0);

  const purchaseSummary = document.querySelector(".purchase-summary");
  purchaseSummary.classList.add("purchase-summary");

  const freeDelLabel = document.createElement("div");
  freeDelLabel.innerHTML = `<img src="greenTick.png"><label>Your order is eligible for FREE Delivery.</label>`;
  freeDelLabel.classList.add("freeDelLabel");
  purchaseSummary.append(freeDelLabel)
  
  const freeDelLabel2 = document.createElement("div");
  freeDelLabel2.textContent = "Choose FREE Delivery option at checkout";
  freeDelLabel2.classList.add("freeDelLabel2");
  purchaseSummary.append(freeDelLabel2)
 

  if(totalAmount<1000) {
    freeDelLabel.style.display = "none";
    freeDelLabel2.style.display = "none";
  }
  console.log(cart.length)
  let gitem;
  cart.length > 1 ? gitem = "Items" : gitem = "Item";
  const subTotal = document.createElement("div");
  subTotal.innerHTML = `Subtotal (${cart.length} ${gitem}): <b>₹${totalAmount.toFixed(0)}.00</b>`;
  subTotal.classList.add("subTotal");
  purchaseSummary.append(subTotal);

  const proceedToBuy = document.createElement("div");
  proceedToBuy.textContent = "Proceed to Buy";
  proceedToBuy.classList.add("proceedToBuy");
  purchaseSummary.append(proceedToBuy);

  proceedToBuy.addEventListener("click", () => {
    window.location.href = "checkout-page.html";
  });
}

// ==================================================================================
// ==================================================================================

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

window.addEventListener("pageshow", () => {
    updateCartCount(itemCount);
});
