if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed: ', error);
            });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const scanButton = document.getElementById('scanButton');
    const outputDiv = document.getElementById('output');

    if ('NDEFReader' in window) {
        scanButton.addEventListener('click', async () => {
            try {
                const ndef = new NDEFReader();
                await ndef.scan();
                outputDiv.textContent = 'Bring an NFC tag close to your device...';

                ndef.addEventListener('reading', ({ message, serialNumber }) => {
                    const records = message.records.map(record => {
                        if (record.recordType === "text") {
                            const textDecoder = new TextDecoder(record.encoding);
                            return `Text: ${textDecoder.decode(record.data)}`;
                        } else if (record.recordType === "url") {
                            const textDecoder = new TextDecoder();
                            return `URL: ${textDecoder.decode(record.data)}`;
                        }
                        return 'Unsupported record type';
                    });
                    outputDiv.innerHTML = `
                        <p>Serial Number: ${serialNumber}</p>
                        <p>Records:</p>
                        <ul>
                            ${records.map(record => `<li>${record}</li>`).join('')}
                        </ul>
                    `;
                });
            } catch (error) {
                outputDiv.textContent = `Error: ${error}`;
            }
        });
    } else {
        scanButton.disabled = true;
        outputDiv.textContent = 'Web NFC is not supported on this browser.';
    }
});
