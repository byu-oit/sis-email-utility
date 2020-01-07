#!/bin/sh

if [ "$#" -ne 3 ]; then
  echo "Usage is ./wso2-vars.sh <handel ssm prefix> <client key> <client secret>";
  exit 1;
fi

prefix=$1
clientKey=$2
clientSecret=$3

echo "Adding $prefix.CLIENT_KEY"
aws ssm put-parameter \
    --name "$prefix.CLIENT_KEY" \
    --description "Email Utility WSO2 Client Key" \
    --type "SecureString" \
    --value "$clientKey" \
    --no-overwrite

echo "Adding $prefix.CLIENT_SECRET"
aws ssm put-parameter \
    --name "$prefix.CLIENT_SECRET" \
    --description "Email Utility WSO2 Client Secret" \
    --type "SecureString" \
    --value "$clientSecret" \
    --no-overwrite
