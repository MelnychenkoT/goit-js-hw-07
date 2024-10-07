const items = document.querySelectorAll("li.item");

console.log(`Number of categories: ${items.length}`);


items.forEach((item) => {
    const categoriesTitle = item.querySelector("h2").textContent;
    const elementsCount = item.querySelectorAll("ul li").length;

    console.log(`Category: ${categoriesTitle}`);
    console.log(`Elements: ${elementsCount}`)
})