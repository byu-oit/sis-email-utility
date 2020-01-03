# ![BYU logo](https://www.hscripts.com/freeimages/logos/university-logos/byu/byu-logo-clipart-128.gif) byuapi-email-utility
Email utility for the University API

This version is intended to be [UAPI spec](https://github.com/byu-oit/UAPI-Specification/blob/master/University%20API%20Specification.md) compliant and extensible.

### Deployment Information

Deployed via [Handel-Codepipeline](https://handel-codepipeline.readthedocs.io/en/latest/).

Because of Handel limitations, the mailer access policy must be added to the IAM role that the mailer lambda assumes.
1. Login with awslogin and assume the Admin role for the account
2. In the project root, run `mailer/add-ses-permissions.sh <function name> <role name> mailer/access-policy.json

