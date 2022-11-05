const products = [
    {
      name: "Iphone 12",
      brand: "Apple",
      price: 3200000,
      properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
    },
    {
      name: "Galaxy S20 Ultra",
      brand: "Samsung",
      price: 2900000,
      properties: ["120 hz screen", "Water resistance"],
    },
    {
      name: "MI 9",
      brand: "Xiaomi",
      price: 1300000,
      properties: ["Best price", "Pay less - get more!"],
    },
  ];
  console.log(products);

        for (const product of products) {
            let container = document.createElement('div')
            let titleProduct = document.createElement('h2');
            let nameProduct = document.createElement('h3');
            let characteristics = document.createElement('ul');
            characteristicsHTML = product.properties
            .map(item => `<li>${item}</li>`)
            .join('');
            characteristics.innerHTML = characteristicsHTML;
            titleProduct.innerHTML = product.name;
            nameProduct.innerHTML = product.brand;
            container.append(titleProduct, nameProduct, characteristics)
            document.body.append(container);
        };
