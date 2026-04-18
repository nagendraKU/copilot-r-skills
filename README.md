# GitHub Copilot R Skills

A curated set of R skills for GitHub Copilot agents (Copilot cloud agent, Copilot CLI, and VS Code agent mode).

This repository is structured so you can clone it into your project’s `.github` directory and use it directly.

## Quick start

From your project root:

```bash
git clone https://github.com/nagendraKU/copilot-r-skills.git .github
```

After cloning, your project will contain skill folders at `.github/skills/*`, which matches GitHub Copilot’s documented project-skill layout.

## Included skills

- `tidyverse-patterns`
- `rlang-patterns`
- `r-performance`
- `r-style-guide`
- `r-oop`
- `r-package-development`
- `r-bayes`
- `tdd-workflow`

Each skill uses the required format:

- `skills/<skill-name>/SKILL.md`
- YAML frontmatter with `name` and `description`

## Copilot custom instructions

This repo includes `copilot-instructions.md` intended for `.github/copilot-instructions.md` when cloned as `.github`.

It ports the prior Claude-focused guidance into Copilot-compatible repository instructions.

## Directory layout (when cloned into `.github`)

```text
.github/
├── copilot-instructions.md
├── skills/
│   ├── r-bayes/
│   │   └── SKILL.md
│   ├── r-oop/
│   │   └── SKILL.md
│   ├── r-package-development/
│   │   └── SKILL.md
│   ├── r-performance/
│   │   └── SKILL.md
│   ├── r-style-guide/
│   │   └── SKILL.md
│   ├── rlang-patterns/
│   │   └── SKILL.md
│   ├── tdd-workflow/
│   │   └── SKILL.md
│   └── tidyverse-patterns/
│       └── SKILL.md
└── README.md
```

## Notes

- Skill discovery and activation are handled by Copilot based on skill descriptions and your prompt context.
- Keep skill folder names lowercase with hyphens.
- Keep skill files named exactly `SKILL.md`.

## License

MIT License - see [LICENSE](LICENSE).
