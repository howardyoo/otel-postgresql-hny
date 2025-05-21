# PostgreSQL Node.js Demo

This project demonstrates a full-stack application with:
- React frontend
- Node.js backend
- PostgreSQL database
- All services containerized and orchestrated with Skaffold

## Prerequisites

- Docker
- Kubernetes cluster (local or remote)
- Skaffold
- kubectl
- Honeycomb API key (honeycomb.io)

## Project Structure

```
.
├── backend/             # Node.js backend service
├── frontend/           # React frontend service
├── k8s/               # Kubernetes manifests
│   ├── backend.yaml
│   ├── frontend.yaml
│   └── postgres.yaml
└── skaffold.yaml      # Skaffold configuration
```

## Getting Started

1. Install dependencies:
   ```bash
   # Backend
   cd backend
   npm install

   # Frontend
   cd frontend
   npm install
   ```
   - set honeycomb api key to the appropriate locations. 
     - [frontend/src/index.js](frontend/src/index.js)
     - k8s (need to convert your key using base64)
       - [backend.yaml](k8s/backend.yaml)
       - [postgres.yaml](k8s/postgres.yaml)

2. Start the application using Skaffold:
   ```bash
   skaffold dev
   ```
   or
   ```
   skaffold run
   ```

3. Access the application:
   - Frontend: http://localhost:3001

## Development

- The frontend runs on port 3001 in development mode
- The backend runs on port 3000
- PostgreSQL runs on port 5432

## Environment Variables

### Backend
- POSTGRES_HOST
- POSTGRES_USER
- POSTGRES_PASSWORD
- POSTGRES_DB
- POSTGRES_SERVER_PORT

### Frontend
- REACT_APP_API_URL

## Database

The PostgreSQL database is configured with:
- Database: postgres
- User: postgres
- Password: postgres
- Port: 5432

Data is persisted using a Kubernetes PersistentVolumeClaim. 