var apikey = {
  key: "4089c222-e2e8-480d-b8b8-b36d3ada3070",
};

// GET Fetch Requisition
fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=" + apikey.key)
  .then((response) => {
    if (!response.ok)
      throw new Error(
        "Erro ao executar a requisição, status " + response.status
      );
    return response.json();
  })
  .then((api) => {
    var text = "";

    for (let i = 0; i < 10; i++) {
      var d = new Date(api.data[i].first_historical_data);

      text = text +
        `
        <div class="media">
            <img src="./img/coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60">
            <div class="media-body">
                <h5 class="mt-2">${api.data[i].name}</h5>
                <p>${api.data[i].symbol} -> first_historical_data: ${d.toDateString()}</p>
            </div>
        </div>    
    `;

      document.getElementById("coins").innerHTML = text;
    }

  })
  .catch((error) => {
    console.error(error.message);
  });
