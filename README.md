# render-urls
A node script meant to render a list of urls.
The output consists of a rendered screenshot as well as a rendered HTML-file per url you submit.

Runs on node/express and provides an user interface for modifying user-agent, viewport and a list of urls to render.

## Installation
1. Download from Github...DERP...
2. Install node.js....DERP...
3. Navigate to the root-folder in the terminal
4. Run *npm install* in the terminal
5. Remove the file located in the /Output folder
6. Run *npm run dev* in the terminal
7. Open http://localhost:3000 in your browser

## Usage
1. On localhost:3000, you can choose viewport height, width and user-agent depending on how you want to render
2. Insert urls you want to render - one url per line
3. Click "Request Rendering"
4. Each rendered screenshot will end up in order in the /Output-folder
5. The weird looking numbers are the timestamps and is there to separate the outputs (nothing to do with the individual URL)
6. Enjoy :)
