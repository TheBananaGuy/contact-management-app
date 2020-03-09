## Current status

- Main objective should be completed
- Secondary objectives are yet incomplete

## Current issues

- CORS requests fail in **Mozilla Firefox**, probably due to certification issue (backend).
- Header fails to collapse on selected item on mobile breakpoint.
- Order persistence is stored in the browser. It is possible to also `patch` indexes in the `sequence` attribute, but without a general bulk request the number of individual requests scales with the amount of contacts in the database at the moment of runtime.

## TODO-s and considerations overview

- Fix the header collapse issue
- Finish secondary objectives
- Comment the code
- Implement possible improvements to page routing (and possibly structure too)
- Automated sorting options
- Login screen
