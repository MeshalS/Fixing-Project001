let orgin = document.getElementById("orgin")



bulidHTML()
function bulidHTML() {
    let data = JSON.parse(localStorage.getItem('origins')) || [];
    let count = 0;
    var countries = {};
    // countries.egypt = 2;
    // countries['saudi arabia']
    // origins = ['ksa', 'egypt', 'ksa', 'ksa', 'usa']
    data.forEach((element) => {
        if (countries[element]) {
            countries[element] += 1;
            // countries = {
            //     'us' : 2,
            // us: 1
            // }
        } else {
            countries[element] = 1
            // countries = {
            //     'us' : 1,
            //uk: 1
            // }
        }
    });

    const objKeys = Object.keys(countries)
    objKeys.forEach(countryName => {
        orgin.innerHTML += `<tr>
          <td>${countryName}</td>
          <td>${countries[countryName]}</td>
      </tr>`;
    })

}