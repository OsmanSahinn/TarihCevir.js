
 Osman ŞAHİN - benosmansahin@gmail.com
 TarihCevir.js
 
 Bu kütüphane, belirtilen tarih formatlarını algılayarak Türkçe tarih biçiminde
 çıktı verir. Tarihlerin yanında haftanın gününü de gösterebilir ve tarih formatı
 içinde özel karakterlerin kullanılmasına izin verir.
 
 Fonksiyon Adı: TarihCevir()
 
 Kullanım:
 - HTML öğelerinde (örneğin <p>, <span>, <div>) tarih biçiminde belirtilen ifadeleri
   algılar ve Türkçe formatta çıktılar verir.
 - Tarih ifadeleri şu şekilde belirtilmelidir: 
   Tarih(GG AA YYYY HG Saat(2024-09-09 08:15:00))
 
 Desteklenen Formatlar:
 - GG-AA-YYYY veya GG.AA.YYYY
 - YYYY-AA-GG veya YYYY.MM.DD
 - Sadece GG-AA veya GG.AA
 - Sadece YYYY
 
 Çıktı Bileşenleri:
 - "GG"   : Gün (örneğin, "09")
 - "AA"   : Ay adı (örneğin, "Eylül")
 - "YYYY" : Yıl (örneğin, "2024")
 - "HG"   : Haftanın günü (örneğin, "Pazartesi")
 - "Saat" : Saat bilgisi (örneğin, "08:15:00")
 
 Örnek Çıktı Formatları:
 - "GG - AA - YYYY HG Saat" --> "09 - Eylül - 2024 Pazartesi 08:15:00"
 - "GG / AA / YYYY" --> "09 / Eylül / 2024"
 - "HG, GG AA YYYY" --> "Pazartesi, 09 Eylül 2024"
 - Kullanıcı, özel karakterleri (/, -, :, vb.) kullanarak formatı özelleştirebilir.
 
 Örnek Kullanım:
 -------------------------
 HTML:
 <p>Tarih(GG - AA - YYYY HG Saat(2024-09-09 08:15:00))</p>
 <p>Tarih(GG / AA / YYYY(2024-09-09))</p>
 <p>Tarih(Saat(2024-09-09 11:22:00))</p>
 <p>Tarih(HG, GG AA YYYY(2024-09-09))</p>
 
 JS:
 TarihCevir(); // Bu fonksiyon sayfa yüklendikten sonra çalıştırılmalıdır.
 -------------------------
 
 Özellikler:
 - Sadece HTML içindeki metinlerde belirtilen Tarih(...) ifadelerini algılar ve dönüştürür.
 - Çıktı formatında belirtilen bileşenler (GG, AA, YYYY, HG, Saat) yalnızca girdi verisinde
   varsa ve kullanıcı tarafından belirtilmişse gösterilir.
 - Haftanın gününü göstermek için "HG" bileşeni kullanılabilir.
 - Fazla boşluk ve ayırıcılar otomatik olarak temizlenir.
 - Saat, dakika ve saniye bileşenleri girdi formatında yoksa ve çıktı formatında
   belirtilmişse, bu bileşenler otomatik olarak gizlenir.
 
 Uyarılar:
 - Fonksiyon, tarih formatlarının doğru belirtilmesi durumunda çalışır. Geçersiz formatlar
   "Geçersiz tarih formatı" şeklinde uyarı verir.
