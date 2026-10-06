const loginBtn = document.querySelector(".login");
const cartCount = document.querySelector(".cart small");

loginBtn.onclick = function () {
    const name = prompt("What is your name?");
    if (name) {
        loginBtn.textContent = "Hi, " + name;
    }
};

document.querySelector(".browse").onclick = function () {
    document.querySelector(".section1").scrollIntoView({ behavior: "smooth" });
};

document.querySelectorAll(".add").forEach(function (btn) {
    btn.onclick = function () {
        cartCount.textContent = Number(cartCount.textContent) + 1;
        btn.textContent = "Added ✓";
        setTimeout(function () {
            btn.textContent = "Add to cart";
        }, 1000);
    };
});

document.querySelectorAll(".card").forEach(function (card) {
    card.onclick = function () {
        card.classList.toggle("active");
    };
});

const items = document.querySelectorAll(".reviews .item");
const arrows = document.querySelectorAll(".reviews .arrows button");
let now = 0;

function showReview(n) {
    now = (n + items.length) % items.length;
    items.forEach(function (item, i) {
        item.classList.toggle("on", i === now);
    });
}

arrows[0].onclick = function () {
    showReview(now - 1);
};

arrows[1].onclick = function () {
    showReview(now + 1);
};

showReview(0);