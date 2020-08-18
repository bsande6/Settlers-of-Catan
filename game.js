var hex_array = ['Wood', 'Wood', 'Wood', 'Wood', 'Wheat', 'Wheat', 'Wheat',
                    'Wheat', 'Sheep','Sheep','Sheep','Sheep', 'Rock', 'Rock',
                    'Rock', 'Brick', 'Brick', 'Brick','Desert'];
var hex_tile_ids = [];
var num_array = ['2', '3','3','4','4','5','5','6','6','8','8','9','9','10','10','11','11','12'];
var port_array = ['Sheep Port', 'Wood Port', 'Wheat Port', 'Rock Port', 'Brick Port', "3-1", '3-1', '3-1', '3-1'];
var dev_cards = ['Knight', 'Knight', 'Knight', 'Knight', 'Knight', 'Knight', 'Knight',
                  'Knight','Knight', 'Knight', 'Knight', 'Knight' ,'Knight',
                  'Knight', 'Victory Point','Victory Point', 'Victory Point',
                  'Victory Point','Victory Point', 'Monopoly', 'Monopoly',
                  'Road Building', 'Road Building', 'Year of Plenty', 'Year of Plenty'];
//var roll = 0;
Array.prototype.hex_tile_shuffle = function() {
  var i = this.length, j, temp;
  while(--i > 0) {
    j = Math.floor(Math.random() * (i+1));
    temp = this[j];
    this[j] = this[i];
    this[i] = temp;
  }
}

shuffleArrays = function() {
  port_array.hex_tile_shuffle();
  hex_array.hex_tile_shuffle();
  dev_cards.hex_tile_shuffle();
  num_array.hex_tile_shuffle();
}
