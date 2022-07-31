let arr = [
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-EX4296/reebok_EX4296_1.jpg.plp",
    name: "MEN'S REEBOK RUNNING ROADMAP SHOES",
    price: "1170",
    strikedoffprice: "2599",
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-EX3921/reebok_EX3921_1.jpg.plp",
    name: "MEN'S REEBOK SWIM ARUBA FLIP SLIPPERS ",
    price: 699,
    strikedoffprice: 999,
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-EX4160/reebok_EX4160_1.jpg.plp",
    name: " MEN'S REEBOK RUNNING AUSTIN SHOES",
    price: 945,
    strikedoffprice: 2099,
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-FV8798/MEN_SWIM_SLIPPERS_FV8798_1.jpg.plp",
    name: "MEN'S REEBOK SWIM AVENGER FLIP LP SLIPPERS",
    price: 399,
    strikedoffprice: 799,
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-EW5173/reebok_EW5173_1.jpg.plp",
    name: "MEN'S REEBOK RUNNING TEMPO SHOES ",
    price: 1620,
    strikedoffprice: 3599,
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-FV7329/reebok_FV7329_1.jpg.plp ",
    name: " MEN'S REEBOK RUNNING ASTRO BOOSTER SHOES ",
    price: 1440,
    strikedoffprice: 3199,
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-GD8567/MEN_TRAINING_PANTS_GD8567_1.jpg.plp ",
    name: " MEN'S TRAINING WORKOUT READY ELITAGE PANTS ",
    price: 1999,
    strikedoffprice: 3199,
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-GQ8758/reebok_GQ8758_1.jpg.plp ",
    name: "MEN'S REEBOK TRAINING  POLO T-SHIRTS TEE  ",
    price: 769,
    strikedoffprice: 1099,
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-GP7180/reebok_GP7180_1.jpg.plp",
    name: "MEN'S REEBOK TRAINING WORKOUT  TEE  ",
    price: 1299,
    strikedoffprice: 1440,
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-EX3924/reebok_EX3924_1.jpg.plp ",
    name: "MEN'S REEBOK SUPER SOFT FLIP SLIPPERS",
    price: 699,
    strikedoffprice: 999,
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-FW0343/reebok_FW0343_1.jpg.plp ",
    name: "MEN'S REEBOK RUNNING RUN SHOES  ",
    price: 1620,
    strikedoffprice: 3599,
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-EX4285/reebok_EX4285_1.jpg.plp ",
    name: "MEN'S REEBOK RUNNING GENESIS RUNNER SHOES  ",
    price: 1620,
    strikedoffprice: 3599,
  },

  {
    image_url:
      " https://content.shop4reebok.com/static/Product-HB5732/reebok_HB5732_1.jpg.plp  ",
    name: " MEN REEBOK CLASSICS TRACKSUIT HOODIE  ",
    price: 3499,
    strikedoffprice: 4999,
  },
  {
    image_url:
      " https://content.shop4reebok.com/static/Product-HB5733/reebok_HB5733_1.jpg.plp  ",
    name: "MEN'S REEBOK CLASSIC TRACKSUIT GOLF HOODIE   ",
    price: 3499,
    strikedoffprice: 4999,
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-FQ5364/reebok_FQ5364_1.jpg.plp   ",
    name: " UNISEX REEBOK TRAINING ACTIVE  BAG ",
    price: 1399,
    strikedoffprice: 2799,
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-FW0318/reebok_FW0318_1.jpg.plp ",
    name: " MEN'S REEBOK RUNNING TREND RUNNER SHOES",
    price: 1575,
    strikedoffprice: 3499,
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-G57705/reebok_G57705_1.jpg.plp",
    name: "UNISEX REEBOK CLASSICS  BASKETBALL SHOES",
    price: 3919,
    strikedoffprice: 5599,
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-FW0344/reebok_FW0344_1.jpg.plp",
    name: "MEN'S REEBOK RUNNING RUN FUSION  SHOES",
    price: 1620,
    strikedoffprice: 3599,
  },

];

localStorage.setItem("movies", JSON.stringify(arr))

arr.forEach(function display(ele) {
  let box = document.createElement("div")
  let img = document.createElement("img")
  img.src = ele.image_url;
  img.style.width = "350px"
  img.style.height = "350px"
  let name = document.createElement("h5")
  name.innerText = ele.name
  let price = document.createElement("h2")
  price.innerText = `Rs ${ele.price}`

  box.append(img, name, price)
  document.querySelector("#movies").append(box)
});
let lowToHigh = () => {
  document.querySelector("#movies").textContent = ""
  arr.sort(function (a, b) {
    return a.price - b.price
  })

  arr.forEach(function display(ele) {
    let box = document.createElement("box")
    let img = document.createElement("img")
    img.src = ele.image_url;
    img.style.width = "350px"
    img.style.height = "350px"
    let name = document.createElement("h5")
    name.innerText = ele.name
    let price = document.createElement("h2")
    price.innerText = `Rs ${ele.price}`
    box.append(img, name, price)
    document.querySelector("#movies").append(box)
  })

}
let highToLow = () => {
  document.querySelector("#movies").textContent = ""
  arr.sort(function (a, b) {
    return b.price - a.price
  })

  arr.forEach(function display(ele) {
    let box = document.createElement("box")
    let img = document.createElement("img")
    img.src = ele.image_url;
    img.style.width = "350px"
    img.style.height = "350px"
    let name = document.createElement("h5")
    name.innerText = ele.name
    let price = document.createElement("h2")
    price.innerText = `Rs ${ele.price}`
    box.append(img, name, price)
    document.querySelector("#movies").append(box)
  })

}