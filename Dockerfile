FROM node:alpine

ENV NODE_ENV=dev
WORKDIR /reactapp



COPY ["package.json", "package-lock.json", "./"]


RUN apk add --update npm
RUN npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom

COPY . ./

EXPOSE 3000
CMD ["npm", "run", "dev"]