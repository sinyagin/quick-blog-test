# quick-blog-conventions

House conventions for `burnjohn/quick-blog`, extracted from the repository and confirmed by a maintainer. Flag changes that violate any rule below and cite the offending `file:line`. A rule that does not apply to the diff under review is not a finding.

## use-es-module-importexport-exclusively-never
Use ES module `import`/`export` exclusively; never use `require()`.

CLAUDE.md explicitly forbids require() and all sampled files use import/export.

Detected in `CLAUDE.md:37`:

```
- Use `require()`; use ES module `import`/`export` only
```
## every-module-directory-must-have-an
Every module directory must have an `index.js` barrel that re-exports the module's public API.

Four directories (Button, AppContext, hooks/core, api) each contain an index.js that re-exports.

Detected in `client/src/components/ui/Button/index.js:1`:

```
export { default } from './Button'
export * from './Button'
```
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
## edited-via-manual-ui-verification
Edited via manual UI verification

messages.js groups all user-facing strings into MESSAGES with clear prefixes (SUCCESS_, ERROR_, VALIDATION_, INFO_). This is a deliberate pattern for i18n and consistency.

Detected in `client/src/constants/messages.js:1`:

```
export const MESSAGES = {
```
## use-a-barrel-file-indexjs-that
Use a barrel file (index.js) that re-exports from the main module (e.g., export * from './AppContext') to simplify imports.

Both AppContext/index.js and Button/index.js follow this pattern, re-exporting from the sibling file.

Detected in `client/src/context/AppContext/index.js:1`:

```
export * from './AppContext'
```