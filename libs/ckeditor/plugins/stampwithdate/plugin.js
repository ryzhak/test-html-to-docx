CKEDITOR.plugins.add( 'stampwithdate', {
    icons: 'stampwithdate',
    init: function( editor ) {
        editor.addCommand( 'stampwithdate', new CKEDITOR.dialogCommand( 'stampwithdateDialog' ) );
        editor.ui.addButton( 'Stampwithdate', {
            label: 'Insert Stamp',
            command: 'stampwithdate',
            toolbar: 'stampwithdate'
        });

        CKEDITOR.dialog.add( 'stampwithdateDialog', this.path + 'dialogs/stampwithdate.js' );
    }
});