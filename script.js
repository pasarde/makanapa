let daftarMakanan = [];

function tambahMakanan() {
  const input = document.getElementById('makananInput');
  const makanan = input.value.trim();
  
  if (makanan) {
    daftarMakanan.push(makanan);
    updateDaftarMakanan();
    input.value = '';
  }
}

function updateDaftarMakanan() {
  const ul = document.getElementById('daftarMakanan');
  ul.innerHTML = '';
  daftarMakanan.forEach(makanan => {
    const li = document.createElement('li');
    li.textContent = makanan;
    ul.appendChild(li);
  });
}

function pilihMakanan() {
  if (daftarMakanan.length > 0) {
    const makananTerpilihElement = document.getElementById('makananTerpilih');
    makananTerpilihElement.textContent = 'Memilih...';
    makananTerpilihElement.classList.add('gacha-animation');

    // Animasi highlight pada daftar makanan
    const listItems = document.querySelectorAll('#daftarMakanan li');
    let index = 0;
    const intervalId = setInterval(() => {
      listItems.forEach(item => item.classList.remove('highlight'));
      listItems[index].classList.add('highlight');
      index = (index + 1) % listItems.length;
    }, 200);

    setTimeout(() => {
      clearInterval(intervalId);
      const indexTerpilih = Math.floor(Math.random() * daftarMakanan.length);
      const makananTerpilih = daftarMakanan[indexTerpilih];
      
      listItems.forEach(item => item.classList.remove('highlight'));
      listItems[indexTerpilih].classList.add('highlight');

      makananTerpilihElement.textContent = makananTerpilih;
      makananTerpilihElement.classList.remove('gacha-animation');
    }, 3000); // Animasi berlangsung selama 3 detik
  } else {
    document.getElementById('makananTerpilih').textContent = 'Belum ada makanan yang dimasukkan.';
  }
}
