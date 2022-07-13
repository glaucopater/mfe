#!/bin/bash

cd angular-app
npm run mfe &

cd ..
cd my-react-app
npm run mfe &

cd ..
cd react-app
npm run mfe &

cd ..
cd ts-react-app
npm run mfe &

cd ..
cd react-redux-toolkit-persist
npm run mfe &

cd ..
cd microapp
ng build
ng serve 