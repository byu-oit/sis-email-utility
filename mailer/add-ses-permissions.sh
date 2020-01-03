#!/bin/sh

if [ "$#" -ne 3 ]; then
  echo "Usage is ./add-ses-permissions.sh <function name> <role name> <access policy file>";
  exit 1;
fi

fName=$1
roleName=$2
access=$3

if ! [ -f "$access" ]; then
  echo "Policy file $access does not exist";
  exit 2;
fi

echo "Checking function exists"
if ! aws lambda get-function --function-name $fName --output text; then
  echo "Function $fName does not exist"
  exit 2
fi

echo "Checking IAM role exists"
if ! aws iam get-role --role-name $roleName --output text; then
  echo "Role $roleName does not exist"
  exit 2
fi

echo "Adding SES permissions to mailer lambda role"
aws iam put-role-policy \
    --role-name $roleName \
    --policy-name ServerlessEmail \
    --policy-document "file://$access"
