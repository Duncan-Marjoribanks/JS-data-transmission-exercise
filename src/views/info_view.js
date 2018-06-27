const PubSub = require('../helpers/pub_sub.js');

const InfoView = function(){

}

InfoView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:selected', (evt) => {
    const instrument = evt.detail;
    this.render(instrument);
  })
};


module.exports = InfoView;
