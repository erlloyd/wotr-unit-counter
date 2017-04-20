FROM erlloyd/angular-cli

RUN mkdir /app
WORKDIR /app

CMD yarn install --no-bin-links && node ./fix-bin-links.js && yarn start
