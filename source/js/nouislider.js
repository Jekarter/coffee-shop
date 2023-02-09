const snapSlider = document.getElementById('slider-snap');

noUiSlider.create(snapSlider, {
    start: [0, 900],
    snap: false,
    connect: true,
    range: {
        'min': 0,
        'max': 900
    }
});

const snapValues = [
  document.getElementById('lower'),
  document.getElementById('upper')
];

snapSlider.noUiSlider.on('update', function( values, handle ) {
  snapValues[handle].value = Math.round(values[handle]);
});
