/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import List from '@ckeditor/ckeditor5-list/src/list';

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js'
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [	
	Bold,
	Italic,
	Heading,
	Indent,
	List,
	Alignment,
	Underline,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'undo',
			'redo',
			'heading',
			'|',
			'bold',
			'italic',
			'underline',
			'|',			
			'alignment',
			'|',
			'indent',
			'outdent',
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};