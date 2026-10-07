import WebViewer from '@pdftron/webviewer';

const save = document.getElementById('save');
const status = document.getElementById('status');
const storageKey = 'review.pdf:v1:xfdf';

WebViewer({
  path: '/lib/webviewer',
  licenseKey: 'YOUR_TRIAL_KEY',
}, document.getElementById('viewer')).then(async (instance) => {
  const { documentViewer, annotationManager } = instance.Core;
  const saved = localStorage.getItem(storageKey) || '';
  await documentViewer.setDocumentXFDFRetriever(async () => saved);
  documentViewer.addEventListener('annotationsLoaded', () => {
    save.disabled = false;
    status.textContent = saved ? 'Saved annotations restored.' : 'Ready to annotate.';
  });
  save.addEventListener('click', async () => {
    save.disabled = true;
    status.textContent = 'Saving...';
    try {
      const xfdf = await annotationManager.exportAnnotations({
        links: false, widgets: false,
      });
      localStorage.setItem(storageKey, xfdf);
      status.textContent = 'Saved in this browser.';
    } catch (error) {
      status.textContent = 'Save failed. Keep this tab open.';
      console.error(error);
    } finally {
      save.disabled = false;
    }
  });
  instance.UI.loadDocument('/documents/review.pdf');
}).catch((error) => {
  status.textContent = 'Setup failed. Check the console.';
  console.error(error);
});
