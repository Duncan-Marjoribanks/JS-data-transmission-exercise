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


module.exports = InfoView;
