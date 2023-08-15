/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

const loginFormElement = document.querySelector('#loginForm');
/**
*Membuat variabel inputEmailElement untuk tampilan input email
*@constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');


/**
*Membuat variabel inputPasswordElement untuk tampilan input password
*@constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');


/**
* Membuat variabel expectedEmail untuk menyimpan informasi email
*@constant {string}
*/
const expectedEmail = 'admin@dicoding.com';


/**
* Membuat variabel expectedPassword untuk menyimpan informasi email
*@constant {string}
*/
const expectedPassword = 'superpassword';


/*Menambahkan aksi klik button. */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /**
  *Membuat variabel email untuk menyimapn nilai email yang didapatkan pada saat button ditekan
  *@constant{string}
  */
  const email = inputEmailElement.value;

  /**
  *Membuat variabel password untuk menyimapn nilai password yang didapatkan pada saat button ditekan
  *@constant{string}
  */
  const password = inputPasswordElement.value;

  /*Memasukan bahwa nilai email dan password sesuai*/
  if (email == expectedEmail && password == expectedPassword) {
    /*Jika sesuai move to Home*/
    goToHome();
  } else {
    /*Jika tidak sesuai, tampilkan pop up notifikasi input salah*/
    showPopUp();
  }
});
