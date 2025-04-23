async function indirPdf(url, dosyaAdi) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const blob = await response.blob();
    const urlObj = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = urlObj;
    link.download = dosyaAdi;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(urlObj);
    console.log(`PDF başarıyla indirildi ve '${dosyaAdi}' olarak kaydedildi.`);
  } catch (error) {
    console.error(`Bir hata oluştu: ${error}`);
  }
}

// Kullanım örneği:
const pdfUrl = "https://www.africau.edu/images/default/sample.pdf";
const kayitAdi = "FizikSunum.pdf";
indirPdf(pdfUrl, kayitAdi);
