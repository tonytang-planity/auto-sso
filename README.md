# Auto-sso

## Warning
Please do not share the sso URL publicly

## Description
We must sign in using sso everyday to be able to deploy lambdas and it is very repetitive.
We need a way to make it faster.

## Solution
Make a chrome extension to validate the form automatically for us.

1. clone the repository
2. Replace `TODO: paste URL here` inside the [manifest.json](manifest.json) file by your sso URL and add `/*` at the end. If the url is `https://myssourl`, you should have `https://myssourl/*`
3. Follow the instructions to create an extension (until step 2) : https://support.google.com/chrome/a/answer/2714278?hl=en
