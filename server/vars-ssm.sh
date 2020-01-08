#!/bin/sh

if [ "$#" -ne 4 ]; then
  echo "Usage is ./vars-ssm.sh <aws account id> <aws region> <handel app name> <handel pipeline name>";
  exit 1;
fi

accountId=$1
region=$2
appName=$3
pipelineName=$4
prefix="$appName.$pipelineName"

paramName="HANDEL_ENVIRONMENT_NAME"
echo "Adding $paramName"
aws ssm put-parameter \
    --name "$paramName" \
    --description "Handel Environment Name" \
    --type "String" \
    --value "$pipelineName" \
    --overwrite

paramName="HANDEL_PARAMETER_STORE_PREFIX"
echo "Adding $paramName"
aws ssm put-parameter \
    --name "$paramName" \
    --description "Handel Parameter Store Prefix" \
    --type "String" \
    --value "$prefix" \
    --overwrite

paramName="$prefix.BUS_TOPIC_ARN"
echo "Adding $paramName"
aws ssm put-parameter \
    --name "$paramName" \
    --description "Email Utility Bus Topic ARN" \
    --type "String" \
    --value "arn:aws:sns:$region:$accountId:$appName-$pipelineName-bus-sns" \
    --overwrite
