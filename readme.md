This is just a stand-alone example. The actual script repo and it's usage details you can find here: [Batch Mockup Smart Object Replacement.jsx Photoshop script](https://github.com/joonaspaakko/Batch-Mockup-Smart-Object-Replacement-photoshop-script).


## Example usage and other details:

1. Run the script `Batch replace example (Run this file in PS).jsx` in Photoshop.
    - It may ask to load missing fonts. You can just press cancel and the script should start running.
    - The easiest way to run scripts in Photoshop is by dragging the script file to the application icon. 
        - Or at least this way is perfect for scripts like this one that you don't need a shortcut for...
        - On Windows you can drag the file over the PS icon on the taskbar, hold down `Shift` and release.
        - On Mac you can drag the file into the PS icon in the Dock.
    - This file contains settings for the script:
        - Path to the mockup .psd file(s) you want to process
        - Target smart object(s): the input files are placed inside it one by one...
        - Input folder paths
        - etc...
2. What will happen when you run the script: 
      1. The script opens `assets/example-mockup.psd`
          - You could process multiple psd files, but in this example it's just this one file.
      2. Goes through every single input file at `assets/_input files` (and its sub folders in this case):
          1. Replaces the `target: '@screen'` smart object layer's contents with the file
            - Could have more than one smart object `target` as well, but in this case there's just the one.
          2. Saves the document as jpg as per the settings.
          3. Moves on to the next file....
      3. When it's done, the output files will be at `assets/_output files`.
          - In this case The folder is already filled with files, so you may actually want to delete this folder and run it again. 

