Ext.define('Example.controller.Grid', {
    extend: 'Ext.app.Controller',
    init: function() {
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            }
        });
    },

    onPanelRendered: function() {
        console.log('The grid was rendered');
    }

});