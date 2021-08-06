import * as ko from 'knockout';
require('knockout.validation');

import Person from './models/person';
import PersonReadOnly from './components/PersonReadOnly';
import PersonEditable from './components/PersonEditable';
import NavBar from './components/NavBar';
import filmsBinding from './bindings/filmsBinding';


ko.components.register('person-read-only', PersonReadOnly);
ko.components.register('person-editable', PersonEditable);
ko.components.register('navbar', NavBar);

ko.bindingHandlers.films = filmsBinding;

class AppViewModel {
  person: Person;

  constructor() {

    // These values are hard-coded but could come from a server API request with JSON response
    this.person = new Person(
      'Jon',
      'Keeping',
      ['The Matrix', 'The Shawshank Redemption', 'Upgrade']
    )
  }
}

ko.validation.init({
  errorElementClass: 'is-invalid',
  errorMessageClass: 'invalid-feedback',
  decorateInputElement: true
});

// Bind Knockout to the "app" element in "webpack-template/index.html"
ko.applyBindings(new AppViewModel(), document.getElementById('app'));