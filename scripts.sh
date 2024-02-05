#!/bin/bash
set -e

case "$1" in
  test)

    dotEnvTest=.env.test
    if [ -f "$dotEnvTest" ]; then
      echo "DotEnv file for test environment '$dotEnvTest' already exists, skipping creation ..."
    else
      echo "DotEnv file for test environment '$dotEnvTest' doesn't exists, creating it .."
      echo -e 'AWS_ACCOUNT_ID=test\nNODE_ENV=test\nNEWRELIC_ACCOUNT_ID=test\nNEWRELIC_API_KEY=test\nNEWRELIC_TRUSTED_ACCOUNT_KEY=test\nVS=test' >> $dotEnvTest
    fi

    export DEBUG=gb:*
    export NODE_ENV=test
    export NEW_RELIC_ENABLED=false
    jest --coverage --forceExit --passWithNoTests
  ;;
  build)
    echo 'Building...'
    rm -rf dist
    npm ci
    serverless package --package dist --stage ${NODE_ENV} --region us-east-1
  ;;
  start)
    echo 'Local...'

    dotEnvLocal=.env.local
    if [ -f "$dotEnvLocal" ]; then
      echo "DotEnv file for local environment '$dotEnvLocal' already exists, skipping creation ..."
    else
      echo "DotEnv file for local environment '$dotEnvLocal' doesn't exists, creating it .."
      echo -e 'AWS_ACCOUNT_ID=local\nNODE_ENV=local\nNEWRELIC_ACCOUNT_ID=local\nNEWRELIC_API_KEY=local\nNEWRELIC_TRUSTED_ACCOUNT_KEY=local\nVS=local' >> $dotEnvLocal
    fi

    sls offline start --reloadHandler --stage local --region us-east-1 ${@: 2}
  ;;
  event)
    echo 'Local...'

    dotEnvLocal=.env.local
    if [ -f "$dotEnvLocal" ]; then
      echo "DotEnv file for local environment '$dotEnvLocal' already exists, skipping creation ..."
    else
      echo "DotEnv file for local environment '$dotEnvLocal' doesn't exists, creating it .."
      echo -e 'AWS_ACCOUNT_ID=local\nNODE_ENV=local\nNEWRELIC_ACCOUNT_ID=local\nNEWRELIC_API_KEY=local\nNEWRELIC_TRUSTED_ACCOUNT_KEY=local\nVS=local' >> $dotEnvLocal
    fi

    sls invoke local --stage local --region us-east-1 --function ${@: 2} --path resources/local.json
  ;;
  *)
    echo "Usage: {test|build|local}"
    exit 1
  ;;
esac