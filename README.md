# render-urls
A node script meant to render a list of urls locally on your computer.
If you want to use this online, make sure to make it more secure, since no security is implemented in this application.

The output consists of a rendered screenshot as well as a rendered HTML-file per url you submit.

Runs on node/express and provides an user interface for modifying user-agent, viewport and a list of urls to render.

## Installation
1. Download this code from Github
2. Install node.js
3. Navigate to the root-folder of this application in the terminal
4. Run *npm install* in the terminal
5. Remove the file located in the /Output folder since it's a dummy-file
6. Run *npm run dev* in the terminal
7. Open http://localhost:3000 in your browser

## Usage
1. On localhost:3000, you can choose viewport height, width and user-agent depending on how you want to render
2. Insert urls you want to render - one url per line
3. Click "Request Rendering"
4. Each rendered screenshot will end up in order in the /Output-folder
5. The weird looking numbers are the timestamps and is there to separate the outputs (nothing to do with the individual URL)
6. Enjoy :)
