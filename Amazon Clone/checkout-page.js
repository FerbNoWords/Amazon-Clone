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

const secChekLabel = document.createElement("div");
secChekLabel.textContent = "Secure Checkout"
secChekLabel.classList.add("sec-chek");
header.append(secChekLabel);
// ==================================================================================
// ==================================================================================
import { getCart, updateCartCount } from "./data.js";
const cart = getCart();
const checkout = document.querySelector(".checkout");
checkout.classList.add("checkout")

const deliveryDetails = document.createElement("div");
deliveryDetails.classList.add("delivery-details");
checkout.append(deliveryDetails);

const ddLabel = document.createElement("div");
ddLabel.textContent = "Delivery Details";
ddLabel.classList.add("ddlabel");
deliveryDetails.append(ddLabel);

const divider = document.createElement("div");
divider.classList.add("divider");
deliveryDetails.append(divider);

const deliveryAddr = document.createElement("div");
deliveryAddr.classList.add("d-addr");
deliveryAddr.innerHTML = `<h1>John Doe</h2>
                            <h3>House No. 18, Maple Residency
                            Station Road, Camp Area
                            Kolhapur, Maharashtra – 416003</h3>
                            <h4>Phone Number: 9123456789</h4>`;
deliveryDetails.appendChild(deliveryAddr);

const paymentMethod = document.createElement("div");
paymentMethod.innerHTML = ` <h3>Payment Method</h3>
                            <div class="divider"></div>
                            <input type="radio" name="payMethod" disabled><label>Credit Card</label><div class="divider"></div>
                            <input type="radio" name="payMethod" disabled><label>Net Banking</label><div class="divider"></div>
                            <input type="radio" name="payMethod"><label>Cash On Delivery/Pay On Delivery</label>
                            `;
paymentMethod.classList.add("payment-method");
deliveryDetails.append(paymentMethod);

const orderSummary = document.createElement("div");
orderSummary.classList.add("order-summary");
checkout.append(orderSummary);

let ic = cart.length;
let totalAmount = cart.reduce((acl, prod) => {
    let discountedPrice = prod.price - (prod.price * prod.discount / 100);
    return acl += discountedPrice;
}, 0);
const ordSmry = document.createElement("div");
ordSmry.innerHTML = `<label>Items  <p>${ic}</p></label>
                    <label>Deliver To <p>Jhon Doe</p></label>
                    <h3>Order Total: <p>₹${totalAmount.toFixed(0)}.00</p></h3><div class="divider"></div>
`;
ordSmry.classList.add("ordsmry");
orderSummary.append(ordSmry);

const placeOrder = document.createElement("div");
placeOrder.textContent = "Place Order"
placeOrder.classList.add("place-order");
orderSummary.append(placeOrder)

placeOrder.addEventListener("click", () => {
    localStorage.removeItem("customerCart");
    checkout.style.background = "#FBFBFB";
    checkout.innerHTML = `
        <img class="aft-gif" src="orderplaced.gif"><br>
        <div class="aft-ord">
        <img class="aft-gtk" src="greenTick.png">
        <label>Order Placed, Thank You :)</label>
        </div>
    `;
});

// ==================================================================================
// ==================================================================================
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