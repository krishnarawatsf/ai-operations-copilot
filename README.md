[![CI](https://github.com/krishnarawatsf/ai-operations-copilot/actions/workflows/python.yml/badge.svg)](https://github.com/krishnarawatsf/ai-operations-copilot/actions)
[![License](https://img.shields.io/github/license/krishnarawatsf/ai-operations-copilot.svg)](https://github.com/krishnarawatsf/ai-operations-copilot/blob/main/LICENSE)
[![GitHub release](https://img.shields.io/github/v/release/krishnarawatsf/ai-operations-copilot.svg)](https://github.com/krishnarawatsf/ai-operations-copilot/releases)
[![codecov](https://codecov.io/gh/krishnarawatsf/ai-operations-copilot/branch/main/graph/badge.svg)](https://codecov.io/gh/krishnarawatsf/ai-operations-copilot)
[![Dependabot status](https://img.shields.io/github/dependabot/krishnarawatsf/ai-operations-copilot.svg)](https://github.com/krishnarawatsf/ai-operations-copilot/network/alerts)

# ai-operations-copilot
Python automation copilot for operations playbooks, incident triage, and runbooks.

## One-line
Automate ops workflows: runbooks, triage, and remediation with safe dry-run support.

## Why
Reduce MTTR by automating repetitive ops tasks and surfacing suggested actions with human approval.

## Features
- Playbook runner (YAML-based playbooks)
- Connectors for Slack, PagerDuty, AWS, GCP
- Dry-run mode and safe execution guards
- Example playbooks in `examples/`

## Quickstart
```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python examples/run_playbook.py examples/sample_playbook.yaml --dry-run
```

## Structure
- `playbooks/` — YAML playbooks
- `runners/` — execution engine
- `connectors/` — integrations
- `examples/` — runnable examples

## Safety
- Always test with `--dry-run`
- Use scoped credentials and environment variables for secrets

## Tests & CI
- Run unit tests: `pytest`
- Suggested CI: GitHub Actions `python.yml` (see `.github/workflows/`)

## Contributing
Open an issue for feature requests and follow contribution guidelines.

## License
MIT
