FROM erlloyd/angular-cli

RUN mkdir /app
WORKDIR /app

CMD ["npm", "start"]