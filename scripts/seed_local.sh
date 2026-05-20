#!/usr/bin/env bash
set -euo pipefail

psql "$DATABASE_URL" -f database/schema/0001_initial.sql
psql "$DATABASE_URL" -f database/seeds/sample_data.sql
