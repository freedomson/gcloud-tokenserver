#!/bin/bash
foo="$(awk -v RS= '{$1=$1}1' key.json)"
export APP_KEY="$foo"
export APP_CODE="123456"