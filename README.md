# Auto-sso

## Warning

Please do not share the sso URL publicly

## Description

We must sign in using sso everyday to be able to deploy lambdas and it is very repetitive.
We need a way to make it faster.

## Solution

Make a chrome extension to validate the form automatically for us.

1. clone the repository
2. Replace `SSO_URL` inside the [manifest.json](manifest.json) file by your sso URL. Ex: `https://x-xxxxxxxxxx.awsapps.com/start`
3. Follow [these instructions](https://support.google.com/chrome/a/answer/2714278?hl=en) to create an extension or :

   - Go to chrome://extensions/
   - Enable `Developer mode` (top right corner)
   - Click on `Load unpacked`
   - Select the folder where you cloned the repository

4. Go to your SSO URL and the form should be automatically submitted for you.
