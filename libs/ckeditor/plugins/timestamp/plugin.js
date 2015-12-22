CKEDITOR.plugins.add('timestamp', {
	icons: 'timestamp',
	init: function(editor){

		editor.addCommand('insertTimestamp', {
			exec: function(editor){
				var now = new Date();
				editor.insertHtml(now.toString());
			}
		});

		editor.ui.addButton('Timestamp', {
			label: 'Insert Timestamp',
			command: 'insertTimestamp',
			toolbar: 'timestamp'
		});

	}
});