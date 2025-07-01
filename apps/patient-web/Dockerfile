FROM node:18-alpine

WORKDIR /app

# Copy root package files
COPY package*.json ./

# Copy app package files
COPY apps/patient-web/package*.json ./apps/patient-web/

# Copy packages
COPY packages ./packages

# Install dependencies
RUN npm install

# Copy app source
COPY apps/patient-web ./apps/patient-web

# Copy shared configs
COPY tsconfig.base.json ./
COPY turbo.json ./

# Build the app
WORKDIR /app/apps/patient-web
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"] 