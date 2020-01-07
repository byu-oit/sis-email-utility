# ![BYU logo](https://www.hscripts.com/freeimages/logos/university-logos/byu/byu-logo-clipart-128.gif) sis-email-utility
Email utility for the SIS Domain

This version is intended to be [UAPI spec](https://github.com/byu-oit/UAPI-Specification/blob/master/University%20API%20Specification.md) compliant and extensible.

### Deployment Information

Deployed via [Handel-Codepipeline](https://handel-codepipeline.readthedocs.io/en/latest/).

The application client key and secret must be added to the ssm parameter store (before initial deployment).
1. Login with awslogin and assume at least the PowerUser role.
2. In the project root, run `server/wso2-vars.sh <handel app name> <handel pipeline name> <client key> <client secret>`.
3. Other variables can be added in the server/vars-ssm.sh script. Still in the project root, run `server/vars-ssm.sh <aws account id> <aws region> <handel app name> <handel pipeline name>`.

Due to Handel limitations, the mailer access-policy.json must be added (after initial deployment) to the IAM role that the mailer lambda assumes.
1. Login with awslogin and assume the Admin role for the account.
2. In the project root, run `mailer/add-ses-permissions.sh <function name> <role name> mailer/access-policy.json`.
