# quick-blog-conventions

House conventions for `burnjohn/quick-blog`, extracted from the repository and confirmed by a maintainer. Flag changes that violate any rule below and cite the offending `file:line`. A rule that does not apply to the diff under review is not a finding.

## use-es-module-importexport-syntax-exclusively
Use ES module import/export syntax exclusively; never use require().

CLAUDE.md explicitly forbids require() and mandates ES modules, and the sample files consistently use import/export.

Detected in `CLAUDE.md:37`:

```
- Use `require()`; use ES module `import`/`export` only
```
## keep-client-and-server-code-strictly
Keep client and server code strictly separate; never mix them.

CLAUDE.md explicitly states this as a hard rule, and the sample shows a clear client/ directory structure.

Detected in `CLAUDE.md:36`:

```
- Mix client and server code; keep `client/` and `server/` strictly separate
```