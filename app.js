Ext.application({
    name: 'Example',
    appFolder: 'app',
    controllers: [
        'Grid', 'Form', 
    ],
    launch: function() {
    	Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'panel',
                    title: 'Panel Example',
                    xtype: 'tabpanel',
                    items: [{
                        title: 'Grid',
                        html: "My content was added during construction."
                    }, {
                        title: 'Form',
                        html: "My  was added during construction."
                    }, 
                    ]
                }
            ]
        });
    }
});