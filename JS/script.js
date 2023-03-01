const url10Dta = `../server data/Richest_People_API.json`;
const imgUrl = 'https://specials-images.forbesimg.com/imageserve/6050f48ca1ab099ed6e290cc/416x416.jpg?background=000000&cropX1=0&cropX2=800&cropY1=0&cropY2=800';
// console.log(url10Dta);

const loadData = async () =>{
    const res = await fetch(url10Dta);
    const data = await res.json();
    showUi10Data(data)
    // console.log(data);
}
loadData()

const showUi10Data = (data) =>{
    const parentCard = document.getElementById('card-parent');
    data.slice(0-20).forEach(element => {
        const {thumbnail, personName, squareImage, financialAssets, birthDate, countryOfCitizenship, state, city, position, rank } = element;
        // console.log(financialAssets[0].numberOfShares);
        const card = document.createElement('div');
        card.innerHTML = `
        <div class="shadow-2xl rounded-3xl h-[380px]">
        <div class="w-full flex justify-center mb-3">
        <h2 class="card-title font-bold text-transparent bg-clip-text bg-gradient-to-l from-purple-400 to-pink-600">${personName}</h2>
        </div>
        <div class="card lg:card-side bg-base-100 rounded-none">
        <figure class="w-1/2">
          <img
            src="${squareImage ? squareImage : imgUrl}"
            alt="${squareImage ? 'img' : 'Pro pic'}"
          />
        </figure>
        <div class="card-body">

          <p class="font-bold">Citizenship: <span class="font-light">${countryOfCitizenship}</span></p>
          <p class="font-bold">State: <span class="font-light">${state ? state : 'No state'}</span></p>
          <p class="font-bold">City: <span class="font-light">${city}</span></p> 
          <p class="font-bold">Total share: <span class="font-light">${typeof financialAssets == 'undefined' ? 'data not defiend' : financialAssets[0].numberOfShares}</span></p>
          <p class="font-bold">Share price: <span class="font-light">${financialAssets ? financialAssets.forEach(e => e.sharePrice) : 'Not found money'}</span></p>
          <p class="font-bold">Position: <span class="font-light">${position}</span></p>  
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
      </div>
        `;
        parentCard.appendChild(card)
    //     const share = 0;
    //     for (const totalShare of financialAssets) {
    //       share = totalShare;
    //     }
        // console.log(typeof financialAssets == 'undefined' ? 'data not defiend' : financialAssets[0]);
        console.log(element);
    });
}
