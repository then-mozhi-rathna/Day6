// Step 1: Countries from Asia using filter
    const countriesFromAsia = data.filter(country => country.region === 'Asia');
    console.log('Countries from Asia:', countriesFromAsia);

    // Step 2: Countries with population less than 2 lakhs using filter
    const countriesWithPopulationLessThan2Lakhs = data.filter(country => country.population < 200000);
    console.log('Countries with population less than 2 lakhs:', countriesWithPopulationLessThan2Lakhs);

    // Step 3: Print name, capital, flag using forEach
    data.forEach(country => {
      console.log('Name:', country.name.common);
      console.log('Capital:', country.capital[0]);
      console.log('Flag:', country.flags.png);
    });

    // Step 4: Total population of countries using reduce
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log('Total population of countries:', totalPopulation);

    // Step 5: Country that uses US Dollars as currency using find
    const countryWithUSDollarCurrency = data.find(country => {
      return country.currencies && Object.values(country.currencies).includes('USD');
    });
    console.log('Country that uses US Dollars:', countryWithUSDollarCurrency?.name.common);
  });
  
