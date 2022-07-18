function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandData() {
    let rndMonthNew = getRndInteger(0, 12);
    let rnddayNew = getRndInteger(1, 31);
    let x = new Date(2022, rndMonthNew, rnddayNew);
    let z;

    let rndYear = x.getFullYear();
    let rndMonth = x.getMonth() + 1;
    let rndDay = x.getDate();

    z = `${rndYear}.${rndMonth}.${rndDay}`;

    return z;
}

let obj1 = {};
let obj2 = {};
let obj3 = {};
let arr = [];

const macPrice = 3000;
const ipPrice = 1000;
const samPrice = 1200;

let listOfItem = document.getElementById("listOfItem");
let ulEl = document.getElementById("ulEl");
let liEl = document.getElementsByClassName("liEl");
let btnBuyMac = document.getElementById(`btnBuyMac`);
let textMac = document.getElementById("macID");
let btnBuyIP = document.getElementById(`btnBuyIP`);
let textIP = document.getElementById("ipID");
let btnBuySam = document.getElementById(`btnBuySam`);
let textSam = document.getElementById("samID");

let cart = document.getElementById("cart");
let cartItem = document.getElementById("cartItem");

let btnOrder = document.createElement("button");
btnOrder.innerText = "Order";
let orderSum = document.createElement("span");
let sum = 0;

let listOfOrder = document.getElementById("listOfOrder");
let orderBtn = document.getElementById("myOrder");

ulEl.onclick = (e) => {
    let newLiEl = document.createElement("li");
    let newSpEl = document.createElement("span");
    let newInEl = document.createElement("input");
    newInEl.setAttribute("id", "count");
    let newPriceEl = document.createElement("span");

    let target = e.target;
    console.log(target.id);
    if (target.id == "btnBuyMac") {
        target.disabled = true;
        newSpEl.innerText = "Macbook";

        newPriceEl.innerText = `$${macPrice}`;

        newLiEl.append(newSpEl);
        newLiEl.append(newInEl);
        newLiEl.append(newPriceEl);

        cartItem.append(newLiEl);

        newInEl.addEventListener("input", () => {
            sum += macPrice * parseInt(newInEl.value);
            console.log(sum);
            orderSum.innerText = sum;
            obj1[`count`] = parseInt(newInEl.value);
        });
        obj1[`name`] = newSpEl.innerText;
    }
    if (target.id == "btnBuyIP") {
        target.disabled = true;
        newSpEl.innerText = "IPhone";

        newPriceEl.innerText = `$${ipPrice}`;

        newLiEl.append(newSpEl);
        newLiEl.append(newInEl);
        newLiEl.append(newPriceEl);

        cartItem.append(newLiEl);

        newInEl.addEventListener("input", () => {
            sum += ipPrice * parseInt(newInEl.value);
            console.log(sum);
            orderSum.innerText = sum;
            obj2[`count`] = parseInt(newInEl.value);
        });
        obj2[`name`] = newSpEl.innerText;
    }
    if (target.id == "btnBuySam") {
        target.disabled = true;
        newSpEl.innerText = "Samsung";

        newPriceEl.innerText = `$${samPrice}`;

        newLiEl.append(newSpEl);
        newLiEl.append(newInEl);
        newLiEl.append(newPriceEl);

        cartItem.append(newLiEl);

        newInEl.addEventListener("input", () => {
            sum += samPrice * parseInt(newInEl.value);
            console.log(sum);
            orderSum.innerText = sum;
            obj3[`count`] = parseInt(newInEl.value);
        });
        obj3[`name`] = newSpEl.innerText;
    }
    cart.append(btnOrder);
    btnOrder.addEventListener("click", () => {
        arr.push(obj1, obj2, obj3);
        console.log(arr);
        console.log(obj1);
        console.log(obj2);
        console.log(obj3);

        localStorage.setItem(`cart`, JSON.stringify(arr));
        newLiEl.remove();
        btnOrder.remove();
        orderSum.remove();

        orderBtn.classList.remove("vision");
    });

    cart.append(orderSum);
};

orderBtn.addEventListener("click", () => {
    orderBtn.disabled = true;
    let trueDate = getRandData();

    const openFirst = () => {
        let newLiEl = document.createElement("li");
        let newSpEl = document.createElement("span");
        let x = JSON.parse(localStorage.getItem("cart"));

        newSpEl.innerText = `${trueDate} - ${x[0].name} X${x[0].count}  - $${
            x[0].count * macPrice
        }`;
        newLiEl.append(newSpEl);
        listOfOrder.append(newLiEl);
    };
    const openSecond = () => {
        let newLiEl = document.createElement("li");
        let newSpEl = document.createElement("span");
        let x = JSON.parse(localStorage.getItem("cart"));

        newSpEl.innerText = `${trueDate} - ${x[1].name} X${x[1].count}  - $${
            x[0].count * ipPrice
        }`;
        newLiEl.append(newSpEl);
        listOfOrder.append(newLiEl);
    };
    const openThird = () => {
        let newLiEl = document.createElement("li");
        let newSpEl = document.createElement("span");
        let x = JSON.parse(localStorage.getItem("cart"));

        newSpEl.innerText = `${trueDate} - ${x[2].name} X${x[2].count}  - $${
            x[0].count * samPrice
        }`;
        newLiEl.append(newSpEl);
        listOfOrder.append(newLiEl);
    };
    openFirst();
    openSecond();
    openThird();
});
