#!/bin/sh

if [ "$#" -ne 4 ]; then
  echo "Usage is ./ssm-env-vars.sh <handel ssm prefix> <bus topic arn> <client key> <client secret>";
  exit 1;
fi

prefix=$1
busTopicArn=$2
clientKey=$3
clientSecret=$4

echo "Adding $prefix.BUS_TOPIC_ARN"
aws ssm put-parameter \
    --name "$prefix.BUS_TOPIC_ARN" \
    --description "Email Utility Bus Topic ARN" \
    --type "String"
    --value "$busTopicArn"
    --no-overwrite

echo "Adding $prefix.CLIENT_KEY"
aws ssm put-parameter \
    --name "$prefix.CLIENT_KEY" \
    --description "Email Utility WSO2 Client Key" \
    --type "String"
    --value "$clientKey"
    --no-overwrite

echo "Adding $prefix.CLIENT_SECRET"
aws ssm put-parameter \
    --name "$prefix.CLIENT_SECRET" \
    --description "Email Utility WSO2 Client Secret" \
    --type "String"
    --value "$clientSecret"
    --no-overwrite
