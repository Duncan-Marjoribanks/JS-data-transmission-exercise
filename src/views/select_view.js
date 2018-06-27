const PubSub = require('../helpers/pub_sub.js');


const SelectView = function(element){
this.element = element;
console.log(this.element);
};


SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Instrument-families:data', (evt) =>{
    const instrumentObjects = evt.detail;
    console.log(evt);
    this.populate(instrumentObjects);
  })
  
  this.element.addEventListener('change', (evt) =>{
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  });
};





SelectView.prototype.populate = function(instrumentsData){
  console.log(instrumentsData);
  instrumentsData.forEach((instrument, index) =>{
    const option = document.createElement('option');
    option.textContent = instrument.name;
    option.value = index;
    this.element.appendChild(option);
  })
}


module.exports = SelectView;
