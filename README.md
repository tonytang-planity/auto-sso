# Auto-sso

## Warning
Please do not share the sso URL publicly

## Description
We must sign in using sso everyday to be able to deploy lambdas and it is very repetitive.
We need a way to make it faster.

## Solution
Make a chrome extension to validate the form automatically for us.

1. clone the repository
2. Replace `SSO_URL` inside the [manifest.json](manifest.json) & the [auto-sso.js](scripts/auto-sso.js) files by your sso URL (without last slash `/`). Ex: `https://device.sso.xx-xxxx-x.amazonaws.com`
3. Replace `DEVICE_URL` inside the [manifest.json](manifest.json) & the [auto-sso.js](scripts/auto-sso.js) files by your device check URL (without last slash `/`). Ex: `https://x-xxxxxxxxxx.awsapps.com/start`
4. Follow the instructions to create an extension (until step 2) : https://support.google.com/chrome/a/answer/2714278?hl=en
