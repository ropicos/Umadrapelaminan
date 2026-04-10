function doGet(e) {
  // 1. Ambil nama tamu
  var name = (e && e.parameter && e.parameter.to) ? e.parameter.to : "Tamu Undangan";
  
  // 2. Buat template (Pastikan di sidebar kiri namanya 'index' pakai huruf kecil)
  var template = HtmlService.createTemplateFromFile('index');
  template.to = name;
  
  // 3. Evaluasi dengan Meta Tag Mobile yang LEBIH LENGKAP
  return template.evaluate()
      .setTitle("Undangan Ropi & Uum")
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      // Penambahan 'viewport-fit=cover' sangat penting untuk HP berponi (iPhone/Android baru)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover');
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}