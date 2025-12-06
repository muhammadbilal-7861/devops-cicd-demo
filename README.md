# DevOps CI/CD Demo

This is a small DevOps-focused project that shows how to containerize a Node.js application with Docker and validate it using a GitHub Actions CI pipeline.

## Tech stack

- Node.js + Express
- Docker
- GitHub Actions

## Features

- Simple REST API endpoint served by a Node.js + Express application.
- Dockerfile to package the app into a lightweight container image.
- GitHub Actions workflow that runs automatically on every push to the `main` branch and on pull requests.
- CI pipeline installs dependencies and runs tests to make sure the application is healthy before changes are merged.

## How to run locally
npm install
npm start

then open http://localhost:3000

## Run with Docker
docker build -t mbilal7861/devops-cicd-demo:latest .
docker run -p 3000:3000 mbilal7861/devops-cicd-demo:latest

then open http://localhost:3000


## Continuous Integration (CI)

The GitHub Actions workflow is defined in `.github/workflows/ci-cd.yml`.

On every push to `main` and on each pull request, the pipeline:

1. Checks out the repository code.  
2. Sets up Node.js (version 20).  
3. Installs dependencies with `npm install`.  
4. Runs a basic health-check test using `npm test`.
