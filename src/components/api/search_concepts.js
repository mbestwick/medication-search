
function searchConcepts(drug) {
  let apiCall = fetch('https://rxnav.nlm.nih.gov/REST/drugs.json?name='+drug.term)
    .then((response) => {
      return response.json();
    })
    return apiCall;
}

export default searchConcepts;
