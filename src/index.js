import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import searchConcepts from './components/api/search_concepts.js'
import searchRelatedGroup from './components/api/search_related_group.js'
import searchAlternatives from './components/api/search_alternatives.js'

import SearchBar from './components/search_bar';
import DrugConceptList from './components/drug_concept_list';
import AlternativeDrugList from './components/alternative_drug_list';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drugConcepts: [] ,
      selectedDrugConcept: null,
      alternativeDrugs: []
    };
  }

  drugConceptSearch(term) {
    var apiPromise = searchConcepts(term);
    apiPromise.then((results) => {
      var concepts = results.drugGroup.conceptGroup[1].conceptProperties;
      this.setState({
        drugConcepts: concepts,
        selectedDrugConcept: concepts[0]
      });
    });
  }

  relatedGroupSearch(selectedDrugConcept) {
    this.setState({ selectedDrugConcept });
    var apiPromise = searchRelatedGroup(selectedDrugConcept);
    apiPromise.then((results) => {
      var rxcui = results.relatedGroup.conceptGroup[0].conceptProperties[0].rxcui;
      this.alternativeDrugSearch(rxcui);
    });
  }

  alternativeDrugSearch(rxcui) {
    var apiPromise = searchAlternatives(rxcui);
    apiPromise.then((results) => {
      var alternativeDrugs = results.relatedGroup.conceptGroup[0].conceptProperties;
      this.setState({ alternativeDrugs });
    });
  }

  render() {
    const drugConceptSearch = _.debounce((term) => {
      this.drugConceptSearch(term)}, 300);

    const placeholder = 'Search a drug...'

    return (
      <div>
        <SearchBar placeholder={placeholder} onSearchTermChange={drugConceptSearch} />
        <DrugConceptList
          onDrugSelect={selectedDrugConcept => this.relatedGroupSearch(selectedDrugConcept)}
          drugConcepts={this.state.drugConcepts} />
        <AlternativeDrugList
          alts={this.state.alternativeDrugs}/>
      </div>
    );
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));
