Ext.define('Example.controller.Form', {
	extend: 'Ext.app.Controller',
    init: function() {
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            }
        });
    },

    onPanelRendered: function() {
        console.log('The form was rendered');
    }
});