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
      drugConcepts: [],
      validConcept: true,
      selectedDrugConcept: null,
      alternativeDrugs: [],
      validAlts: true
    };
  }

  searchClear() {
    this.setState({
      drugConcepts: [],
      validConcept: true,
      selectedDrugConcept: null,
      alternativeDrugs: [],
      validAlts: true
    });
  }

  drugConceptSearch(term) {
    var apiPromise = searchConcepts(term);
    apiPromise.then((results) => {
      try {
        var concepts = results.drugGroup.conceptGroup[1].conceptProperties;
        this.setState({
          drugConcepts: concepts,
          selectedDrugConcept: concepts[0],
          validConcept: true
        });
      }
      catch(err) {
        this.setState({ validConcept: false });
      }
    });
  }

  relatedGroupSearch(selectedDrugConcept) {
    this.setState({ selectedDrugConcept });
    var apiPromise = searchRelatedGroup(selectedDrugConcept);
    apiPromise.then((results) => {
      try {
        var rxcui = results.relatedGroup.conceptGroup[0].conceptProperties[0].rxcui;
        this.setState({ validAlts: true });
        this.alternativeDrugSearch(rxcui);
      }
      catch(err) {
        this.setState({ validAlts: false });
      }
    });
  }

  alternativeDrugSearch(rxcui) {
    var apiPromise = searchAlternatives(rxcui);
    apiPromise.then((results) => {
      try {
        var alternativeDrugs = results.relatedGroup.conceptGroup[0].conceptProperties;
        this.setState({
          alternativeDrugs: alternativeDrugs,
          validAlts: true
        });
      }
      catch(err) {
        this.setState({ validAlts: false });
      }

    });
  }

  render() {
    const placeholder = 'Search a drug...';

    return (
      <div>
        <SearchBar
          placeholder={placeholder}
          onSearchTermChange={(term) => this.drugConceptSearch(term)}
          onSearchClear={() => this.searchClear()} />
        <DrugConceptList
          onDrugSelect={selectedDrugConcept => this.relatedGroupSearch(selectedDrugConcept)}
          drugConcepts={this.state.drugConcepts}
          validConcept={this.state.validConcept}/>
        <AlternativeDrugList
          alts={this.state.alternativeDrugs}
          validAlts={this.state.validAlts} />
      </div>
    );
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));
