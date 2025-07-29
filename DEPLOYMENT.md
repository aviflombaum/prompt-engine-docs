# Deployment Guide - Serving from Root Path

This guide ensures your PromptEngine documentation site is served from the root path (/) instead of a subdirectory.

## Configuration for Root Path Deployment

### 1. Environment Configuration

Create a `.env.production` file:
```bash
# Leave empty or don't set to serve from root
NEXT_PUBLIC_BASE_PATH=
```

### 2. Build Configuration

The site is configured to serve from root by default. Ensure your build process doesn't override this:

```bash
npm run build
npm start
```

### 3. Web Server Configuration

#### Nginx Configuration
If using Nginx, ensure your location block doesn't add a path prefix:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### Apache Configuration
For Apache with reverse proxy:

```apache
<VirtualHost *:80>
    ServerName your-domain.com
    
    ProxyPreserveHost On
    ProxyPass / http://localhost:3000/
    ProxyPassReverse / http://localhost:3000/
</VirtualHost>
```

#### PM2 Process Manager
If using PM2:

```json
{
  "apps": [{
    "name": "prompt-engine-docs",
    "script": "npm",
    "args": "start",
    "cwd": "/path/to/prompt-engine-docs",
    "env": {
      "NODE_ENV": "production",
      "PORT": 3000
    }
  }]
}
```

### 4. Docker Deployment
If using Docker:

```dockerfile
# Use the provided Dockerfile
docker build -t prompt-engine-docs .
docker run -p 80:3000 prompt-engine-docs
```

### 5. Vercel/Netlify Deployment
These platforms serve from root by default. No special configuration needed.

## Troubleshooting

### Issue: Site is still being served from /docs
1. Check that NEXT_PUBLIC_BASE_PATH is not set in your environment
2. Ensure your web server isn't adding a path prefix
3. Clear your browser cache
4. Check for any hardcoded paths in your reverse proxy configuration

### Issue: Assets not loading
1. Verify next.config.mjs has no basePath set
2. Check that your CDN or proxy isn't rewriting asset paths
3. Ensure the build was done with the correct configuration

### Issue: Links are broken
The current configuration expects:
- Home page at: `/`
- Documentation at: `/docs`
- Individual pages at: `/docs/getting-started/installation`, etc.

All internal links should work correctly with this structure.