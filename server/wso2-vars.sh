#!/bin/sh

if [ "$#" -ne 4 ]; then
  echo "Usage is ./wso2-vars.sh <handel app name> <handel pipeline name> <client key> <client secret>";
  exit 1;
fi

appName=$1
pipelineName=$2
clientKey=$3
clientSecret=$4
prefix="$appName.$pipelineName"

paramName="$prefix.CLIENT_KEY"
echo "Adding $paramName"
aws ssm put-parameter \
    --name "$paramName" \
    --description "Email Utility WSO2 Client Key" \
    --type "SecureString" \
    --value "$clientKey" \
    --overwrite

paramName="$prefix.CLIENT_SECRET"
echo "Adding $paramName"
aws ssm put-parameter \
    --name "$paramName" \
    --description "Email Utility WSO2 Client Secret" \
    --type "SecureString" \
    --value "$clientSecret" \
    --overwrite
