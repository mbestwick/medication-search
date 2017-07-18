
function searchRelatedGroup(drug) {
  let apiCall = fetch('https://rxnav.nlm.nih.gov/REST/rxcui/'+drug.rxcui+'/related.json?tty=IN')
    .then((response) => {
      return response.json();
    })
    return apiCall;
}

export default searchRelatedGroup;
