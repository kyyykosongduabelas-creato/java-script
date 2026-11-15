class BankAccount {
  constructor(nama, saldoAwal) {
    this.nama = nama;
    this._saldo = saldoAwal;
    this._riwayat = [];
    this._riwayat.push("Akun dibuat, saldo awal: " + saldoAwal);
  }

  deposit(jumlah) {
    if (jumlah <= 0) {
      console.log("ERROR: Jumlah deposit harus lebih dari 0");
      return;
    }
    this._saldo += jumlah;
    this._riwayat.push("+ Deposit " + jumlah + " | Saldo: " + this._saldo);
    console.log("Berhasil deposit " + jumlah + ". Saldo sekarang: " + this._saldo);
  }

  withdraw(jumlah) {
    if (jumlah <= 0) {
      console.log("ERROR: Jumlah tarik harus lebih dari 0");
      return;
    }
    if (jumlah > this._saldo) {
      console.log("TRANSAKSI ERROR: Saldo tidak cukup! Mau tarik " + jumlah + ", saldo cuma " + this._saldo);
      this._riwayat.push("X Gagal tarik " + jumlah + " - Saldo tidak cukup");
      return;
    }
    this._saldo -= jumlah;
    this._riwayat.push("- Tarik " + jumlah + " | Saldo: " + this._saldo);
    console.log("Berhasil tarik " + jumlah + ". Saldo sekarang: " + this._saldo);
  }

  transfer(tujuan, jumlah) {
    if (jumlah > this._saldo) {
      console.log("TRANSAKSI ERROR: Transfer ke " + tujuan.nama + " gagal, saldo tidak cukup!");
      return;
    }
    this.withdraw(jumlah);
    tujuan.deposit(jumlah);
    console.log("Berhasil transfer " + jumlah + " ke " + tujuan.nama);
  }

  getSaldo() {
    return this._saldo;
  }

  cetakRiwayat() {
    console.log("\n=== Riwayat " + this.nama + " ===");
    for (let i = 0; i < this._riwayat.length; i++) {
      console.log(this._riwayat[i]);
    }
    console.log("Saldo Akhir: " + this._saldo);
    console.log("========================\n");
  }
}

// === COBA YANG BARU ===
const lucky = new BankAccount("lucky", 100000);
const irawan = new BankAccount("irawan", 0);

lucky.deposit(50000);
lucky.withdraw(30000);
lucky.withdraw(200000);
lucky.transfer(irawan, 100000);

lucky.cetakRiwayat();
irawan.cetakRiwayat();