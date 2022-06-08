const baseUrl = "https://cat-fact.herokuapp.com";

async function fetchCatFacts(index) {
    const url = baseUrl + "/facts";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Content-Type": "application/json",
      },
    });
    
    if (response.status >= 200 && response.status < 300) {
      const json = await response.json();
      let fact = json[index];
      return fact;
    } else {
      throw new Error("something went wrong");
    }
    
  }



function renderFact(f) {
    let fact = document.getElementById("fact");
    fact.innerHTML = f.text;
}

async function start() {
    try {
        let index = Math.floor(Math.random() * 5);
        const fact = await fetchCatFacts(index);
        renderFact(fact);
    } 
    catch (err) {
      console.log(err);
    }
  }

  start();