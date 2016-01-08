CKEDITOR.dialog.add( 'stampwithdateDialog', function( editor ) {
    return {
        title: 'Stamp Properties',
        minWidth: 400,
        minHeight: 200,
        contents: [
            {
                id: 'tab-basic',
                label: 'Basic Settings',
                elements: [
                    {
                        type: 'select',
                        id: 'stampType',
                        label: 'Select the stamp',
                        items: [ [ 'Approved' ], [ 'Rejected' ] ],
                        'default': 'Approved',
                        onChange: function( api ) {
                            // this = CKEDITOR.ui.dialog.select
                            //alert( 'Current value: ' + this.getValue() );
                        }
                    }
                    /*{
                        type: 'text',
                        id: 'userText',
                        label: 'Text',
                        validate: CKEDITOR.dialog.validate.notEmpty( "Text field cannot be empty." )
                    }*/
                ]
            }
        ],
        onOk: function() {

            var dialog = this;

            var stampType = dialog.getValueOf('tab-basic', 'stampType');

            //TODO: add datetime to the stamp
            //if(stampType === 'Approved') var src = 'http://localhost:8080/images/approved_latest.jpg';
            //if(stampType === 'Rejected') var src = 'http://localhost:8080/images/rejected_latest.jpg';
            if(stampType === 'Approved') var src = 'http://s12.postimg.org/73cs2lz8t/approved.jpg';
            if(stampType === 'Rejected') var src = 'http://s7.postimg.org/rg8q66s17/rejected.jpg';

            var image = editor.document.createElement('img');
            image.setAttribute('src', src);

            editor.insertElement(image);

            //editor.insertHtml('<img alt="" src="http://fretlessrock.com/wp-content/uploads/2012/11/Fretless-Rock-Stamp-Rotated-RED.png">');
            //editor.insertHtml('<img alt="" src="http://s23.postimg.org/o2m8oxol7/rejected_latest.jpg">');

        }
    };
});