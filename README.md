# Apryse PDF review sample

Companion project for the article. Requires Node.js 22.12+ and npm.

1. Extract the ZIP and open a terminal in the pdf-review folder.
2. Run `npm ci`.
3. Copy the SDK runtime files (macOS/Linux):

```sh
mkdir -p public/lib/webviewer
cp -R node_modules/@pdftron/webviewer/public/. public/lib/webviewer/
```

For Windows or automated copying, see https://docs.apryse.com/web/get-started/copy-assets.

4. In main.js, replace YOUR_TRIAL_KEY with your Apryse trial key.
5. Run `npm run dev` and open the printed URL.
6. Highlight text and add a note. Finish the note, click Save annotations, wait for Saved in this browser, then refresh.

index.html is the page; main.js initializes WebViewer and saves/restores XFDF annotations. public/documents/review.pdf is a non-sensitive two-page sample. package-lock.json pins the dependencies used in the verified app. SDK runtime files are copied after installation, not included in this ZIP.

Storage is local to the browser profile and origin, including port. Save after each change. Annotations do not modify the original PDF or sync across devices. Clearing browser storage removes them. Change storageKey when replacing the PDF.

Verified in the original local app: PDF loading, highlighting, notes, page navigation, saved highlight/note restoration and edited-note restoration after refresh. Deletion, autosave, backend persistence, concurrent edits and storage failure are unverified.

## Project structure

```text
apryse-pdf-review/
├── index.html                 Page containing the viewer
├── main.js                    Viewer setup and annotation persistence
├── package.json               Dependencies and development command
├── package-lock.json          Exact dependency versions
├── README.md                  Setup and testing instructions
├── .gitignore                 Excludes installed and generated files
└── public/
    └── documents/
        └── review.pdf         Sample document
```

After installation and copying runtime assets, you also have:

```text
node_modules/                  Installed npm packages
public/lib/webviewer/          SDK runtime files served to the browser
```

Create or edit index.html and main.js in the same folder as package.json. The sample already contains both files. The browser stores annotations locally; saving does not create another project file.
