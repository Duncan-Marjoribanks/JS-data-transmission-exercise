const SelectView = require('./views/select_view.js');
const InfoView = require('./views/info_view.js');
const InstrumentFamilies = require('./models/instrument_families.js');

document.addEventListener('DOMContentLoaded', () =>{
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('#instrument-families');
  const dropDown = new SelectView(selectElement);
  dropDown.bindEvents();

  const instrumentDataSource = new InstrumentFamilies();
  instrumentDataSource.bindEvents();

  const instrumentInfo = document.querySelector('#instrument_families');
  const infoView = new InfoView(instrumentInfo);
  infoView.bindEvents();

});
