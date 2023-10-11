import React from 'react';
import { Container } from 'react-bootstrap';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar,Lists ,Font,Video  } from '@syncfusion/ej2-react-richtexteditor';
export default function Editornew() {
    let toolbarSettings = {
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
             '|',
            'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
            'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
    };
  return (
    <Container>
         <h3 className='py-2'>Editor</h3>
    <RichTextEditorComponent  height={"500px"}className="mx-auto" toolbarSettings={toolbarSettings}>
    <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>
    <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar ]} />
</RichTextEditorComponent>
</Container>
  )
}
