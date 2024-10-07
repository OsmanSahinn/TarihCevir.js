/**
 * Osman ŞAHİN - benosmansahin@gmail.com
 * TarihCevir.js
 * 
 * Bu kütüphane, belirtilen tarih formatlarını algılayarak Türkçe tarih biçiminde
 * çıktı verir. Tarihlerin yanında haftanın gününü de gösterebilir ve tarih formatı
 * içinde özel karakterlerin kullanılmasına izin verir.
 * 
 * Fonksiyon Adı: TarihCevir()
 * 
 * Kullanım:
 * - HTML öğelerinde (örneğin <p>, <span>, <div>) tarih biçiminde belirtilen ifadeleri
 *   algılar ve Türkçe formatta çıktılar verir.
 * - Tarih ifadeleri şu şekilde belirtilmelidir: 
 *   Tarih(GG AA YYYY HG Saat(2024-09-09 08:15:00))
 * 
 * Desteklenen Formatlar:
 * - GG-AA-YYYY veya GG.AA.YYYY
 * - YYYY-AA-GG veya YYYY.MM.DD
 * - Sadece GG-AA veya GG.AA
 * - Sadece YYYY
 * 
 * Çıktı Bileşenleri:
 * - "GG"   : Gün (örneğin, "09")
 * - "AA"   : Ay adı (örneğin, "Eylül")
 * - "YYYY" : Yıl (örneğin, "2024")
 * - "HG"   : Haftanın günü (örneğin, "Pazartesi")
 * - "Saat" : Saat bilgisi (örneğin, "08:15:00")
 * 
 * Örnek Çıktı Formatları:
 * - "GG - AA - YYYY HG Saat" --> "09 - Eylül - 2024 Pazartesi 08:15:00"
 * - "GG / AA / YYYY" --> "09 / Eylül / 2024"
 * - "HG, GG AA YYYY" --> "Pazartesi, 09 Eylül 2024"
 * - Kullanıcı, özel karakterleri (/, -, :, vb.) kullanarak formatı özelleştirebilir.
 * 
 * Örnek Kullanım:
 * -------------------------
 * HTML:
 * <p>Tarih(GG - AA - YYYY HG Saat(2024-09-09 08:15:00))</p>
 * <p>Tarih(GG / AA / YYYY(2024-09-09))</p>
 * <p>Tarih(Saat(2024-09-09 11:22:00))</p>
 * <p>Tarih(HG, GG AA YYYY(2024-09-09))</p>
 * 
 * JS:
 * TarihCevir(); // Bu fonksiyon sayfa yüklendikten sonra çalıştırılmalıdır.
 * -------------------------
 * 
 * Özellikler:
 * - Sadece HTML içindeki metinlerde belirtilen Tarih(...) ifadelerini algılar ve dönüştürür.
 * - Çıktı formatında belirtilen bileşenler (GG, AA, YYYY, HG, Saat) yalnızca girdi verisinde
 *   varsa ve kullanıcı tarafından belirtilmişse gösterilir.
 * - Haftanın gününü göstermek için "HG" bileşeni kullanılabilir.
 * - Fazla boşluk ve ayırıcılar otomatik olarak temizlenir.
 * - Saat, dakika ve saniye bileşenleri girdi formatında yoksa ve çıktı formatında
 *   belirtilmişse, bu bileşenler otomatik olarak gizlenir.
 * 
 * Uyarılar:
 * - Fonksiyon, tarih formatlarının doğru belirtilmesi durumunda çalışır. Geçersiz formatlar
 *   "Geçersiz tarih formatı" şeklinde uyarı verir.
 */

(function (e) {
    let a = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
    let gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];  // Haftanın günleri
    e.TarihCevir = function e() {
        let r = document.querySelectorAll("p, span, div");
        r.forEach((e) => {
            e.innerHTML = e.innerHTML.replace(/Tarih\(([\w\s\/\-\:]+)\(([\w\.\-\s:]+)\)\)/g, (e, r, l) =>
                (function e(r, l) {
                    let t = (function e(a) {
                        for (let r of [
                            { regex: /^(\d{2})[.-](\d{2})[.-](\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/, order: ["gun", "ay", "yil", "saat", "dakika", "saniye"] },
                            { regex: /^(\d{4})[.-](\d{2})[.-](\d{2})\s+(\d{2}):(\d{2}):(\d{2})$/, order: ["yil", "ay", "gun", "saat", "dakika", "saniye"] },
                            { regex: /^(\d{2})[.-](\d{2})[.-](\d{4})$/, order: ["gun", "ay", "yil"] },
                            { regex: /^(\d{4})[.-](\d{2})[.-](\d{2})$/, order: ["yil", "ay", "gun"] },
                            { regex: /^(\d{2})[.-](\d{2})$/, order: ["gun", "ay"] },
                            { regex: /^(\d{4})$/, order: ["yil"] },
                        ]) {
                            let l = a.match(r.regex);
                            if (l) {
                                let t = {};
                                return (
                                    r.order.forEach((e, a) => {
                                        t[e] = l[a + 1];
                                    }),
                                    t
                                );
                            }
                        }
                        return null;
                    })(l);
                    if (!t) return "Geçersiz tarih formatı";
                    let i = t.gun ? t.gun.padStart(2, "0") : null,
                        n = t.ay ? parseInt(t.ay, 10) - 1 : null,
                        d = t.yil || new Date().getFullYear(),
                        u = r,
                        tarih = new Date(d, n, i);  // Tarihi Date nesnesi olarak oluştur
                    let haftaGunu = gunler[tarih.getDay()];  // Haftanın gününü al
                    
                    if (
                        ((u = r.includes("GG") && i ? u.replace(/GG/g, i) : u.replace(/GG/g, "")),
                        (u = r.includes("AA") && null !== n ? u.replace(/AA/g, a[n]) : u.replace(/AA/g, "")),
                        (u = r.includes("YYYY") && d ? u.replace(/YYYY/g, d) : u.replace(/YYYY/g, "")),
                        (u = r.includes("HG") ? u.replace(/HG/g, haftaGunu) : u.replace(/HG/g, "")),  // Haftanın gününü ekle
                        r.includes("Saat") && t.saat)
                    ) {
                        let g = t.saat.padStart(2, "0"),
                            s = t.dakika.padStart(2, "0"),
                            c = t.saniye ? t.saniye.padStart(2, "0") : "00";
                        u = u.replace(/Saat/g, `${g}:${s}:${c}`);
                    } else u = u.replace(/Saat/g, "");
                    return u
                        .replace(/\s+/g, " ")
                        .trim()
                        .replace(/[\/:\.-]{2,}/g, "$1")
                        .trim();
                })(r.trim(), l.trim())
            );
        });
    };
})(window);
