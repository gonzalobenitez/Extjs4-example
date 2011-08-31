Ext.application({
    name: 'Example',
    appFolder: 'app',
    launch: function() {
    	Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'panel',
                    title: 'Panel Example',
                    html : 'Grid will go here'
                }
            ]
        });
         });
    }
});