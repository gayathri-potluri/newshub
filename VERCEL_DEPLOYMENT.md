# Vercel Deployment Guide

This document provides instructions for deploying this Next.js application to Vercel.

## Prerequisites

- A [Vercel](https://vercel.com/) account
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (or another MongoDB provider)
- Node.js 18 or later installed (as specified in package.json)

## Environment Variables

The following environment variables need to be configured in your Vercel project:

- `MONGODB_URI`: Your MongoDB connection string
- `NEXTAUTH_SECRET`: A secure string for NextAuth.js session encryption
- `NEXTAUTH_URL`: Will be automatically set to your Vercel deployment URL

## Deployment Steps

1. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket)

2. **Import your project to Vercel**:
   - Log in to your Vercel account
   - Click "Add New Project"
   - Import your Git repository
   - Select the project

3. **Configure Environment Variables**:
   - In the Vercel project settings, navigate to the "Environment Variables" tab
   - Add each of the required environment variables listed above
   - For local development, you can create a `.env.local` file (don't commit this to Git)

4. **Configure Build Settings** (already set in vercel.json):
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install --force`

5. **Deploy**:
   - Click "Deploy" and Vercel will build and deploy your application
   - Once deployed, Vercel will provide you with a URL for your application

## Continuous Deployment

Vercel automatically deploys your application when you push changes to your Git repository. By default:

- Production deploys: Made when pushing to the main branch
- Preview deploys: Made when pushing to other branches or creating pull requests

## Troubleshooting

If you encounter issues during deployment:

1. Check the build logs in your Vercel dashboard
2. Verify that all environment variables are correctly set
3. Ensure your MongoDB connection string is correct and the database is accessible
4. Make sure your Next.js configuration is compatible with Vercel (which it should be by default)

## Local Development

For local development:

1. Clone the repository
2. Create a `.env.local` file with the required environment variables
3. Run `npm install`
4. Run `npm run dev`

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/) 