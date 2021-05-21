
#include "script/Batch Mockup Smart Object Replacement.jsx" 

var output = {
  path: './_output files', // Outputs next to the mockup psd
  format: 'jpg', // 'jpg', 'png', 'tif', 'psd', 'pdf'
  filename: '@mockup - @input', 
};

mockups([
  
  // Mockup #1
  {
    output: output, 
    mockupPath: '$/assets/example-mockup.psd', 
    smartObjects: [
      {
        target: '@screen',
        input: [
          './_input files'
        ], 
        inputNested: true,
        align: 'center center',
        resize: 'fill', 
      },
    ]
  },
    
]);

