## Stage 1: Build the Next.js app
#FROM node:20.5.1-alpine AS builder
#WORKDIR /app
#
## Copy the package.json, package-lock.json, and prisma schema file, then install dependencies
#COPY package.json package-lock.json ./
#COPY prisma ./prisma
#RUN DATABASE_URL="postgresql://postgres:password@localhost:5432/mydatabase" npm install
#
## Copy the rest of the application code
#COPY . .
#
## Build the Next.js application
#RUN npm run build
#
## Stage 2: Serve the built Next.js app using a lightweight web server
#FROM node:20.5.1-alpine
#WORKDIR /app
#
## Copy the built application from the builder stage
#COPY --from=builder /app ./
#
## Install only production dependencies
#COPY package.json package-lock.json ./
#RUN npm install --production
#
## Copy Prisma schema (in case it's needed again in the final stage)
#COPY --from=builder /app/prisma ./prisma
#
## Run Prisma migrations
##ENV DATABASE_URL="postgresql://postgres:password@db:5432/mydatabase"
##RUN npx prisma generate --schema=./prisma/schema.prisma && npx prisma migrate deploy --schema=./prisma/schema.prisma
#
## Expose the port the app runs on
#EXPOSE 3000
#
## Start the application
##CMD ["npm", "run", "start"]
#
## Start the application and run Prisma migrate
#CMD ["sh", "-c", "npx prisma migrate deploy && npm run start"]


#-----------------------------------------------------------
# Stage 1: Build the Next.js app
FROM node:20.5.1-alpine AS builder
WORKDIR /app

# Copy the package.json, package-lock.json, and prisma schema file, then install dependencies
COPY package.json package-lock.json ./
COPY prisma ./prisma
RUN DATABASE_URL="postgresql://yourusername:yourpassword@db:5432/yourdatabase" npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Generate Prisma Client
RUN npx prisma generate --schema=./prisma/schema.prisma

# Stage 2: Serve the built Next.js app using a lightweight web server
FROM node:20.5.1-alpine
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app ./

# Install only production dependencies
COPY package.json package-lock.json ./
RUN npm install --production

# Copy Prisma schema (in case it's needed again in the final stage)
COPY --from=builder /app/prisma ./prisma

# Expose the port the app runs on
EXPOSE 8080

# Start the application and run Prisma migrate
#CMD ["sh", "-c", "npx prisma migrate deploy && npm run start"]
CMD ["sh", "-c", "npx prisma migrate deploy --schema=./prisma/schema.prisma && npm run start"]
