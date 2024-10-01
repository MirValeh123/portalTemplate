document.getElementById('showOthers').addEventListener('click', function(e) {
    e.preventDefault();
    const listItems = document.querySelectorAll('#languageList li');
    const isVisible = listItems[1].style.display === 'block'; // "EN" dilinin görünüb-görünmədiyini yoxla

    // İkinci və üçüncü dilləri gizlət və ya göstər
    listItems.forEach((item, index) => {
        if (index !== 0) {
            item.style.display = isVisible ? 'none' : 'block'; // EN və RU dillərini gizlə və ya göstər
        }
    });
});

// "AZ" dilinin xaricində bir yerə kliklənmə hadisəsi
document.addEventListener('click', function(event) {
    const langDiv = document.querySelector('.lang');
    const listItems = document.querySelectorAll('#languageList li');

    // "AZ" dilinə klik olunmadığını yoxla
    if (!langDiv.contains(event.target)) {
        listItems.forEach((item, index) => {
            if (index !== 0) {
                item.style.display = 'none'; // EN və RU dillərini gizlə
            }
        });
    }
});


window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    if (window.scrollY > 0) {
        header.classList.add('shadow'); // Skrol edildikdə kölgə əlavə olunur
    } else {
        header.classList.remove('shadow'); // Başlanğıc vəziyyətinə qayıdanda kölgə çıxarılır
    }
});


const row = document.querySelector('.tags .row');
let startX;
let isDragging = false; // Sürükleme durumunu takip etmek için
let startTranslateX = 0; // Başlangıç pozisyonunu kaydet

// Her bir butona mousedown olayını ekleyin
const buttons = row.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mousedown', (e) => {
        const style = window.getComputedStyle(row);
        const matrix = new WebKitCSSMatrix(style.transform);
        startTranslateX = matrix.m41; // Geçerli translateX değerini al

        startX = e.pageX; // Başlangıç pozisyonunu ayarla
        row.style.transition = 'none'; // Geçiş efekti kaldır
        isDragging = true; // Sürükleme başladığını belirt
    });
});

// Fareyi bıraktığımızda geçiş efekti ekle ve önceki pozisyona geri dön
document.addEventListener('mouseup', () => {
    if (isDragging) {
        row.style.transition = 'transform 0.3s ease'; // Geçiş efekti ekle
        row.style.transform = `translateX(${startTranslateX}px)`; // Önceki pozisyona geri dön
        isDragging = false; // Sürüklemeyi bitir
    }
});

// Fare hareket ettiğinde kaydırma işlemini yap
document.addEventListener('mousemove', (e) => {
    if (isDragging) { // Sadece sürükleme durumu aktifse kaydır
        const x = e.pageX;
        const walk = (x - startX); // Ne kadar kaydırıldığını hesapla
        row.style.transform = `translateX(${startTranslateX + walk}px)`; // Kaydır ve önceki pozisyonu ekle
    }
});


// İlk olaraq elementi əlavə etmək istədiyiniz container-i seçirik
const mainContainer  = document.querySelector('.second .container '); // .row içərisinə əlavə etmək üçün

// 12 element yaratmaq üçün döngü
for (let i = 0; i < 12; i += 3) {
    // Yeni row div-i yaradılır
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row'); // "row" sinfi əlavə olunur

    // Hər bir sıra üçün 3 ədəd "col-4" yaratmaq
    for (let j = 0; j < 3; j++) {
        // Yeni col-4 div-i yaradılır
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-4'); // "col-4" sinfi əlavə olunur

        // icon_service div-i yaradılır
        const iconServiceDiv = document.createElement('div');
        iconServiceDiv.classList.add('icon_serivce');

        // Şəkil elementi yaradılır
        const img = document.createElement('img');
        img.src = './static/service.png'; // Şəkilin src-si təyin olunur
        img.alt = ''; // Şəkilin alt təsviri

        // Şəkili iconServiceDiv-ə əlavə edirik
        iconServiceDiv.appendChild(img);

        // content div-i yaradılır
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content');

        // Başlıq h3 elementi yaradılır
        const h3 = document.createElement('h3');
        h3.textContent = 'Elektron formulyar'; // Başlıq mətni

        // Paraqraf p elementi yaradılır
        const p = document.createElement('p');
        p.textContent = 'Qeyri-müntəzəm sərnişin daşımalarında formulyarın elektron qaydada tərtib edilməsi'; // Paraqraf mətni

        // h3 və p elementlərini contentDiv-ə əlavə edirik
        contentDiv.appendChild(h3);
        contentDiv.appendChild(p);

        // iconServiceDiv və contentDiv elementlərini colDiv-ə əlavə edirik
        colDiv.appendChild(iconServiceDiv);
        colDiv.appendChild(contentDiv);

        // colDiv-i row-a əlavə edirik
        rowDiv.appendChild(colDiv);
    }

    // Hazır olan row-u əsas konteynerə əlavə edirik
    mainContainer.appendChild(rowDiv);
}



