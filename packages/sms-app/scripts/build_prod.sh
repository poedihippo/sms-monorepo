#!/bin/bash

if [ -z "$(git status --porcelain)" ]; then 

  BRANCH=$(git rev-parse --abbrev-ref HEAD)
  if [[ "$BRANCH" != "main" ]]; then
    echo "Branch not 'main'. Make sure to be in the correct branch before building.";
    exit 1;
  fi

  # PUBLISH
  expo build:android --release-channel prod

else 
  # Uncommitted changes
  echo 'Git branch dirty. Cancelling.';
  exit 1;
fi