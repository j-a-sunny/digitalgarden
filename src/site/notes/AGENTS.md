---
{"dg-publish":true,"permalink":"/agents/","title":"AGENTS","tags":["meta","ai-agents"],"dg-note-properties":{"title":"AGENTS","tags":["meta","ai-agents"]}}
---


# Notes for AI agents working in this vault

Read [[MEMORY\|MEMORY]] too: it has the student's background, current courses and the status of each note.

## Layout
- Vault root: `/home/jasper/Documents/Obsidian/Vault01`
- Study notes live under `Study/3rd Semester/<Subject>/`
- Current subjects: Macroeconomics, Marketing (shared group files are in `Marketing/Group shared`)

## When converting lecture slides or PDFs
- Save the `.md` in the same folder as the source file, with the same base name
- Make it Obsidian-compatible: YAML frontmatter with tags, callouts, tables, `![[attachments/...]]` image links
- Reword and reformat for studying: summary first, key-terms table, memory aids, self-test questions in foldable callouts
- Mark anything not printed on the slides (added standard definitions, mnemonics) so it is clear what is from the source and what was added
- Keep key slide figures in an `attachments/` folder next to the note, named like `Ch2-slide-04.png`
- After finishing a note, update the status table in [[MEMORY\|MEMORY]]

## Tooling notes
- Filesystem tools on this machine write text only, so extract images with `pdftoppm` (poppler) from a shell
- Do not edit or delete original PDFs or slides

## Preferences
- Ask before creating new files outside the folder of the source material
