const dataMataUang = [
  { kode: "USD", nama: "Dollar Amerika", nilai: 1 },
  { kode: "IDR", nama: "Rupiah Indonesia", nilai: 16500 },
  { kode: "EUR", nama: "Euro", nilai: 0.92 },
];

const inputJumlah = document.getElementById("jumlah");
const asal = document.getElementById("dari");
const tujuan = document.getElementById("ke");
const btnConvert = document.getElementById("btn-convert");
const btnTukar = document.getElementById("btn-swap");
const divResult = document.getElementById("result");
const RateNote = document.getElementById("rate-note");
const errorJumlah = document.getElementById("error-jumlah");

function inisialisasi() {
  dataMataUang.forEach((m) => {
    const optDari = document.createElement("option");
    optDari.value = m.kode;
    optDari.textContent = `${m.kode} - ${m.nama}`;
    asal.appendChild(optDari);

    const optKe = document.createElement("option");
    optKe.value = m.kode;
    optKe.textContent = `${m.kode} - ${m.nama}`;
    tujuan.appendChild(optKe);
  });

  asal.value = "USD";
  tujuan.value = "IDR";
}

function tukarMataUang() {
  btnTukar.addEventListener("click", () => {
    const temp = asal.value;
    asal.value = tujuan.value;
    tujuan.value = temp;
  });
}

function validasi() {
  const val = inputJumlah.value;
  if (val === "" || parseFloat(val) <= 0) {
    errorJumlah.textContent = "Jumlah harus diisi dan positif!";
    return false;
  }
  errorJumlah.textContent = "";
  return true;
}

function konversi() {
  if (!validasi()) return;

  const jumlah = parseFloat(inputJumlah.value);
  const kodeDari = asal.value;
  const kodeKe = tujuan.value;

  const mataUangDari = dataMataUang.find((m) => m.kode === kodeDari);
  const mataUangKe = dataMataUang.find((m) => m.kode === kodeKe);

  const hasil = (jumlah / mataUangDari.nilai) * mataUangKe.nilai;

  divResult.textContent = `${jumlah.toLocaleString()} ${kodeDari} = ${hasil.toLocaleString("id-ID", { minimumFractionDigits: 2 })} ${kodeKe}`;

  const kursSatuan = (1 / mataUangDari.nilai) * mataUangKe.nilai;
  RateNote.textContent = `Kurs: 1 ${kodeDari} = ${kursSatuan.toFixed(4)} ${kodeKe}`;
}

document.addEventListener("DOMContentLoaded", inisialisasi);
btnConvert.addEventListener("click", konversi);

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") konversi();
});