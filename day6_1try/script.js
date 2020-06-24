
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


fetch(endpoint).
    then(res => res.json()).
    then(data => {




        const cities = [];
        data.forEach(element => {
            cities.push(element.city);
        });


        // get search value
        document.querySelector('.search').addEventListener('change', getCityFromSearch);

        function getCityFromSearch() {
            console.log(this.value);

            const filteredCity = cities.filter(place => {

                if (place.match(`${this.value}`)) {
                    return `<ul class = "filteredCity">${place}</ul>`;
                };
            });

            document.querySelector('.suggestions').innerHTML = filteredCity;
        };

    });


