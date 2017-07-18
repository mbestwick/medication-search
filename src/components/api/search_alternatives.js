
function searchAlternatives(rxcui) {
  let apiCall = fetch('https://rxnav.nlm.nih.gov/REST/rxcui/'+rxcui+'/related.json?tty=SCD+SBD')
    .then((response) => {
      return response.json();
    })
    return apiCall;
}

export default searchAlternatives;
