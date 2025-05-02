# Deploying Your University Website to Vercel

This guide provides a detailed walkthrough of deploying your Next.js university website to Vercel.

## Prerequisites

1. Your project code pushed to a Git repository (GitHub, GitLab, or Bitbucket)
2. A [Vercel account](https://vercel.com/signup)
3. MongoDB Atlas database set up and configured

## Step 1: Prepare Your Environment Variables

Before deploying, make sure you have the following environment variables ready:

- `MONGODB_URI`: Your MongoDB connection string
- `NEXTAUTH_SECRET`: A secure random string for NextAuth.js
- `NEXTAUTH_URL`: This will be your Vercel deployment URL (can be updated after first deployment)

## Step 2: Deploy to Vercel

### Using the Vercel Dashboard

1. Login to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Click the "New Project" button
3. Import your Git repository
4. Configure the project:
   - Vercel should automatically detect Next.js as your framework
   - In the "Environment Variables" section, add all the variables from your `.env.local` file
   - Leave the build settings as default (they're configured in vercel.json)
5. Click "Deploy"
6. Wait for the build to complete (this may take a few minutes)

### Using the Vercel CLI (Alternative Method)

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Navigate to your project directory:
   ```bash
   cd university-website
   ```

4. Deploy the project:
   ```bash
   vercel
   ```

5. Follow the interactive prompts to configure your deployment

## Step 3: Update Environment Variables

After the first deployment:

1. Go to your project settings in the Vercel dashboard
2. Update the `NEXTAUTH_URL` environment variable with your actual deployment URL
3. Re-deploy the project for changes to take effect

## Step 4: Set Up a Custom Domain (Optional)

1. Go to your project in Vercel dashboard
2. Navigate to "Domains" section
3. Click "Add" to add your custom domain
4. Follow the verification process to set up DNS records
5. Wait for DNS propagation (usually takes 24-48 hours)

## Troubleshooting

### Build Fails

1. Check the build logs for errors
2. Ensure all dependencies are properly listed in package.json
3. Verify that your Next.js version is compatible with your code
4. If you see an error about `@next-auth/mongodb-adapter` not being found, make sure you're importing from `@auth/mongodb-adapter` instead, as this is the package specified in your dependencies
5. If you see a "Can't resolve 'tailwindcss'" error, ensure your Tailwind CSS configuration is correct:
   - Update postcss.config.js to use the correct plugin format:
     ```js
     module.exports = {
       plugins: {
         tailwindcss: {},
         autoprefixer: {},
       },
     }
     ```
   - Make sure globals.css uses the proper Tailwind directives:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

### MongoDB Connection Issues

1. Make sure your MongoDB Atlas IP whitelist allows connections from all IPs (`0.0.0.0/0`)
2. Verify your connection string is correct in the environment variables
3. Check that your MongoDB user has appropriate permissions

### Authentication Problems

1. Verify your NEXTAUTH_URL is set correctly
2. Make sure NEXTAUTH_SECRET is properly configured
3. Check NextAuth.js logs for specific authentication errors

## Continuous Deployment

Your application will automatically redeploy when you push changes to your Git repository. You can configure branch deployments and deployment settings in your Vercel project dashboard.

## Performance Monitoring

Vercel provides built-in analytics and monitoring tools:

1. Go to your project dashboard
2. Navigate to the "Analytics" tab
3. Monitor performance metrics, errors, and user behavior

---

For additional help, refer to [Vercel Documentation](https://vercel.com/docs) or create an issue in your project repository. 