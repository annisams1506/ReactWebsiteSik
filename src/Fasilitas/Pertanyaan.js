import React from "react";

const Pertanyaan = () => {
  const faqs = [
    {
      question: "Apa saja yang dipelajari di Sistem Informasi Kelautan?",
      answer: "Di Program Studi Sistem Informasi Kelautan, mahasiswa akan belajar untuk bisa mengelola data-data kelautan dan perikanan dengan metode-metode tertentu baik untuk data yang bersifat numerik maupun spasial. Oleh karena itu setidaknya di program studi sistem informasi kelautan kita akan belajar 3 (tiga) bidang ilmu, yaitu Sistem Informasi, Geografi, serta Kelautan dan Perikanan.",
    },
    {
        question:"Apa anak SMK/IPS bisa masuk prodi Sistem Informasi Kelautan?",
        answer:" Anak IPS tidak bisa, yang bisa masuk ke prodi Sistem Informasi Kelautan (SIK) adalah IPA dan SMK Jurusan tertentu. Jurusan SMK yang bisa masuk ke prodi SIK adalah Teknik Geomatika dan Geospasial, Teknik Komputer dan Informatika, Pelayaran Kapal Penangkap Ikan, Perikanan, dan Pengolahan Hasil Perikanan",
    },
    {
        question:"Apakah harus bisa berenang untuk masuk prodi Sistem Informasi Kelautan?",
        answer:"Tidak harus, ada mata kuliah selam ilmiah yang nantinya akan bisa mahasiswa manfaatkan untuk berlatih berenang dan menyelam untuk kebutuhan pengambilan data di laut.",
    },
    {
        question:"Bagaimana cara masuk prodi Sistem Informasi Kelautan?",
        answer:"Untuk dapat menjadi mahasiswa di program Studi Sistem Informasi Kelautan, calon mahasiswa dapat mengikuti seleksi SNMPTN, SBMPTN, Mandiri UPI, Prestasi Mahasisiswa dan RPL (Rekognisi Pembelajaran Lampau).",
    },
    {
        question:"Berapa passing grade masuk Sistem Informasi Kelautan?  ",
        answer:"Universitas Pendidikan Indonesia selama ini tidak pernah merilis secara resmi passing grade minimal atau maksimal sebagai syarat kelulusan.",
    },
    {
        question:"Apa saja fasilitas di Sistem Informasi Kelautan?",
        answer:"Laboratorium Sistem Informasi dan Rekayasa, Laboratorium Remote Sensing (Penginderaan Jauh), Laboratorium Computational Intelligence (Kecerdasan Komputasional), Laboratorium sumber daya kelautan, Marine station Lontar, Lab Bahasa, Smart Classroom, Perpustakaan dengan buku dan jurnal kelautan dan perikanan, ruang kuliah ber AC dan terkoneksi dengan Wif",
    },
    {
        question:"Apakah ada asrama untuk mahasiswa? Berapa kira-kira biayanya?",
        answer:"Universitas Pendidikan Indonesia Kampus Daerah Serang memiliki asrama dengan kuota 10 orang untuk SIK. Biaya Rp. 2.000.000/tahun/mahasiswa dan dapat dicicil 2 x dalam setahun.",
    },
    {
        question:"Bagaimana peluang kerja setelah lulus?",
        answer:"Lulusan dapat bekerja di Kementerian/Lembaga/Badan pemerintahan seperti KKP, KEMENKO MARITIM, KLHK, BMKG, BIG, BAKAMLA, BRIN, dll atau perusahaan Swasta seperti Konsultan Lingkungan, NGO, WWF, TNC, WCS, CSF, WRI, dll.",
    },
    // Tambahkan pertanyaan dan jawaban lain di sini...
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl text-yellow-950 font-bold mb-4">Frequently Asked Questions (FAQ)</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-8 ">
          <h2 className="text-xl text-blue-950 font-bold mb-2">{faq.question}</h2>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Pertanyaan;