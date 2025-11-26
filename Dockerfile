FROM node:20.19-trixie

COPY . .

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]