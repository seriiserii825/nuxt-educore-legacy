export default function useCopyToClipboard(variable: string) {
  navigator.clipboard.writeText(variable).then(() => {
    useSweetAlert('success', 'Copied to clipboard', variable);
  }).catch(err => {
    useSweetAlert('error', 'Failed to copy', err);
  });
}
