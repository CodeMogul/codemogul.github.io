import { h } from 'preact';

export default function DownloadPdfButton() {
  return (
    <a className="download-pdf" href="/SiddheshNachane.pdf" download target="_blank">
      <i class="fas fa-file-download"></i>
    </a>
  )
}
