import MakeupApiService from "./infraestructure/MakeupApiService.js";


const main = async () => {
    let i = 1;
    let n = 0;
    const cardImgs = document.querySelectorAll('img')
    const namePrd = document.getElementsByClassName('name')
    const prices = document.getElementsByClassName('price')
    const brands = document.getElementsByClassName('brand')

    const makeupService = new MakeupApiService();
    const makeupsInfo = await makeupService.getAllProducts();
    console.log(makeupsInfo);

    cardImgs.forEach((imgTag) => {
        let imagelink = makeupsInfo.get(i)['image_link'];
        let makeupName = makeupsInfo.get(i)['name'];
        const price = makeupsInfo.get(i)['price']
        const brand = makeupsInfo.get(i)['brand'].toString().toUpperCase()
        imgTag.src = imagelink
        console.log(brand.toString())


        namePrd[n].textContent = makeupName
        prices[n].textContent = `$${price}`
        brands[n].textContent = brand


        i++;
        n++;

    });


}

main();

// https://dummyimage.com/450x300/dee2e6/6c757d.jpg


// showing loading

