# GitHub Pages Deployment Guide

This Storybook is automatically deployed to GitHub Pages using GitHub Actions.

## Automatic Deployment

The Storybook will be automatically built and deployed to GitHub Pages when:
- Code is pushed to the `main` branch
- Pull requests are created (build only, no deployment)

## Manual Deployment

To manually trigger a deployment:
1. Go to the "Actions" tab in your GitHub repository
2. Select the "Build and Deploy Storybook to GitHub Pages" workflow
3. Click "Run workflow"

## Setup Requirements

Before the first deployment, make sure to:

1. **Enable GitHub Pages in your repository settings:**
   - Go to Settings → Pages
   - Set Source to "GitHub Actions"
   - Save the settings

2. **Ensure the repository is public** (or you have GitHub Pro for private repos with Pages)

3. **Update the base path** in `.storybook/main.js` if your repository name is different from `dxcomponents`

## Accessing Your Storybook

Once deployed, your Storybook will be available at:
```
https://[your-username].github.io/[repository-name]/
```

For example: `https://yourusername.github.io/dxcomponents/`

## Local Development

To run Storybook locally:
```bash
npm run startStorybook
```

To build Storybook locally:
```bash
npm run build-storybook
```
