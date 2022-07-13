# mfe
A Microfrontend POC considering Angular and React
---

![Demo](/doc/mfe.png)

Microapp
The main container is an angular application (running on port 4200)

There are 4 apps:
- my-react-app (a React 16 with create-react-app ejected running on HTTP port 5000)
- angular-app (an angular app running on HTTP port 5001)
- react-app (a React 16 with create-react-app ejected running on HTTP port 5002)
- ts-react-app (a React 18 with typescript running on HTTP port 5003)
- react-redux-toolkit-persist (a React 17 with RTK Query and persist state on HTTP port 5004)


Setup
---
For each folder run 
- npm install or yarn 

Run
---
Start the single applications then the container
Microapp
- npm run start

For the single apps
- npm run mfe (this will build the bundle and expose the application)

To run everything with a single command, using bash or zsh
./run-all.sh

Notes 
- this is a fork of the original project (https://github.com/namdeok/micro-frontend)
- the bundle once exposed is not in dev mode, the manifest will expose the assets for the container. 
- On each change the bundle of the non-ejected apps will be regenerated
- In order to update the js src \micro-frontend\microapp\src\index.html should be updated.
