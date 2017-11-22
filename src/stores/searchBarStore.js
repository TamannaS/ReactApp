var Reflux = require('reflux');
var SearchbarActions = require('../actions/searchbarAction');

var SearchBarStore = Reflux.createStore({
    listenables: [SearchbarActions],
    EVENTS: {
        STATE_CHANGE: 0

    },
  

    onSearchYouTube: function() {
        console.log('Hello from Store')    
        this.trigger(this.STATE_CHANGE, 'Lets Test !');
      },

})

module.exports = SearchBarStore;