# Deploying with Vercel CLI

This guide shows how to deploy the application using the Vercel CLI instead of the web interface.

## Prerequisites

- Node.js 18 or later
- Vercel CLI installed: `npm install -g vercel`
- A Vercel account

## Steps to Deploy

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Log in to Vercel**:
   ```bash
   vercel login
   ```

3. **Navigate to your project directory**:
   ```bash
   cd path/to/your/project
   ```

4. **Create a .env file** with your environment variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

5. **Run the deployment command**:
   ```bash
   vercel
   ```

6. **Follow the interactive prompts**:
   - Choose to link to an existing project or create a new one
   - Confirm the settings for your deployment
   - Vercel will detect Next.js automatically

7. **Set up environment variables** (if not already configured in the web dashboard):
   ```bash
   vercel env add MONGODB_URI
   vercel env add NEXTAUTH_SECRET
   ```

8. **Deploy to production**:
   ```bash
   vercel --prod
   ```

## Managing Deployments

- To list all deployments:
  ```bash
  vercel ls
  ```

- To get info about a deployment:
  ```bash
  vercel inspect [deployment-url]
  ```

- To set up a custom domain:
  ```bash
  vercel domains add [your-domain.com]
  ```

## CI/CD with Vercel CLI

For continuous integration and deployment, you can use the Vercel CLI in your CI/CD pipeline with:

```bash
vercel --token $VERCEL_TOKEN --prod
```

Add your Vercel token as a secret in your CI/CD system.

## Troubleshooting

- If you encounter issues, check the deployment logs:
  ```bash
  vercel logs [deployment-url]
  ```

- To see the real-time logs:
  ```bash
  vercel logs -f
  ```

For more detailed information, refer to the [Vercel CLI documentation](https://vercel.com/docs/cli). 