const PubSub = require('../helpers/pub_sub.js');

const InfoView = function(){

}



InfoView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:selected', (evt) => {
    const instrument = evt.detail;
    const newInfo = createElement('p')
    newInfo.textContent = instrument;
    this.appendChild(newInfo);
  })
};

AnimalInfoView.prototype.render = function(animal){
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `The ${animal.species}, of class '${animal.class}', has a maximum speed of ${animal.maxSpeed} km/h.`;
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
};


module.exports = InfoView;
