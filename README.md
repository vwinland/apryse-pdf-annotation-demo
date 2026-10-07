# Apryse PDF viewing and annotation demo

Companion project for the article. Requires Node.js 22.12+ and npm.

## Run the sample

1. Clone the repository and open its folder:

   ```sh
   git clone https://github.com/vwinland/apryse-pdf-annotation-demo.git
   cd apryse-pdf-annotation-demo
   ```

2. Install the dependencies using the versions in `package-lock.json`:

   ```sh
   npm ci
   ```

3. Copy the SDK runtime files (macOS/Linux):

   ```sh
   mkdir -p public/lib/webviewer
   cp -R node_modules/@pdftron/webviewer/public/. public/lib/webviewer/
   ```

   For Windows or automated copying, see [Apryse's asset setup guide](https://docs.apryse.com/web/get-started/copy-assets).

4. Open `main.js` and replace `YOUR_TRIAL_KEY` with your Apryse trial key.

5. Start the development server and open the local URL it prints:

   ```sh
   npm run dev
   ```

6. Highlight text and leave a comment. Finish the comment in its editor, then click **Save annotations** above the viewer. Wait for **Saved in this browser.** and refresh. Your saved annotations should return. To check deletion, delete an annotation, save, and refresh; the deleted annotation should stay removed.

index.html is the page; main.js initializes WebViewer and saves/restores XFDF annotations. public/documents/review.pdf is a non-sensitive two-page sample. package-lock.json pins the dependencies used in the verified app. SDK runtime files are copied after installation, not committed to this repository.

Storage is local to the browser profile and origin, including port. Save after each change. Annotations do not modify the original PDF or sync across devices. Clearing browser storage removes them. Change storageKey when replacing the PDF.

Verified in the original local app: PDF loading, highlighting, comments, page navigation, saved highlight/comment restoration and edited-comment restoration after refresh. Deletion persistence was also verified by the author. Autosave, backend persistence, concurrent edits and storage failure are unverified.

## Project structure

```text
apryse-pdf-annotation-demo/
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
