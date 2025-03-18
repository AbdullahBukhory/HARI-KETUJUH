const wordList = [
    {
        word: "gitar",
        hint: "Alat musik yang memiliki senar."
    },
    {
        word: "oksigen",
        hint: "Gas tak berwarna dan tak berbau yang penting bagi kehidupan."
    },
    {
        word: "gunung",
        hint: "Sebuah elevasi alami besar dari permukaan Bumi."
    },
    {
        word: "lukisan",
        hint: "Sebuah bentuk seni yang menggunakan warna pada permukaan untuk menciptakan gambar atau ekspresi."
    },
    {
        word: "astronomi",
        hint: "Studi ilmiah tentang objek dan fenomena langit."
    },
    {
        word: "cokelat",
        hint: "Makanan manis yang terbuat dari biji kakao."
    },
    {
        word: "sejarah",
        hint: "Studi tentang peristiwa masa lalu dan peradaban manusia."
    },
    {
        word: "pizza",
        hint: "Hidangan gurih yang terdiri dari dasar bulat yang datar dengan topping."
    },
    {
        word: "jazz",
        hint: "Sebuah genre musik yang ditandai dengan improvisasi dan sinkopasi."
    },
    {
        word: "kamera",
        hint: "Sebuah perangkat yang digunakan untuk menangkap dan merekam gambar atau video."
    },
    {
        word: "intan",
        hint: "Batu permata berharga yang dikenal karena kecemerlangan dan kekerasannya."
    },
    {
        word: "petualangan",
        hint: "Pengalaman yang menarik atau berani."
    },
    {
        word: "sains",
        hint: "Studi sistematis tentang struktur dan perilaku dunia fisik dan alami."
    },
    {
        word: "sepeda",
        hint: "Kendaraan yang digerakkan oleh manusia dengan dua roda."
    },
    {
        word: "kopi",
        hint: "Minuman berkafein populer yang terbuat dari biji kopi yang dipanggang."
    },
    {
        word: "tari",
        hint: "Gerakan ritmis tubuh yang sering dilakukan dengan musik."
    },
    {
        word: "galaksi",
        hint: "Sistem luas bintang, gas, dan debu yang diikat oleh gravitasi."
    },
    {
        word: "orkestra",
        hint: "Ensemble besar musisi yang memainkan berbagai instrumen."
    },
    {
        word: "novel",
        hint: "Karya fiksi panjang, biasanya dengan plot dan karakter yang kompleks."
    },
    {
        word: "patung",
        hint: "Bentuk seni tiga dimensi yang dibuat dengan membentuk atau menggabungkan bahan."
    },
    {
        word: "arsitektur",
        hint: "Seni dan ilmu merancang dan membangun bangunan."
    },
    {
        word: "ballet",
        hint: "Bentuk tari klasik yang ditandai dengan gerakan yang tepat dan anggun."
    },
    {
        word: "astronot",
        hint: "Orang yang dilatih untuk bepergian dan bekerja di luar angkasa."
    },
    {
        word: "air terjun",
        hint: "Aliran air yang jatuh dari ketinggian."
    },
    {
        word: "teknologi",
        hint: "Penerapan pengetahuan ilmiah untuk tujuan praktis."
    },
    {
        word: "pelangi",
        hint: "Fenomena meteorologi yang disebabkan oleh refleksi, refraksi, dan dispersi cahaya."
    },
    {
        word: "piano",
        hint: "Alat musik yang dimainkan dengan menekan tombol yang menyebabkan palu memukul senar."
    },
    {
        word: "liburan",
        hint: "Periode waktu yang didedikasikan untuk kesenangan, istirahat, atau relaksasi."
    },
    {
        word: "hutan hujan",
        hint: "Hutan lebat yang ditandai dengan curah hujan tinggi dan keanekaragaman hayati."
    },
    {
        word: "teater",
        hint: "Bangunan atau area luar ruangan di mana drama, film, atau pertunjukan lainnya dipentaskan."
    },
    {
        word: "telepon",
        hint: "Perangkat yang digunakan untuk mentransmisikan suara jarak jauh."
    },
    {
        word: "bahasa",
        hint: "Sistem komunikasi yang terdiri dari kata-kata, gerakan, dan sintaksis."
    },
    {
        word: "gurun",
        hint: "Tanah tandus atau kering dengan sedikit atau tanpa curah hujan."
    },
    {
        word: "bunga matahari",
        hint: "Tanaman tinggi dengan kepala bunga kuning besar."
    },
    {
        word: "fantasi",
        hint: "Genre fiksi imajinatif yang melibatkan sihir dan elemen supernatural."
    },
    {
        word: "teleskop",
        hint: "Alat optik yang digunakan untuk melihat objek jauh di luar angkasa."
    },
    {
        word: "oasis",
        hint: "Tempat subur di gurun di mana air ditemukan."
    },
    {
        word: "fotografi",
        hint: "Seni, proses, atau praktik menciptakan gambar dengan merekam cahaya atau radiasi elektromagnetik lainnya."
    },
    {
        word: "safari",
        hint: "Ekspedisi atau perjalanan, biasanya untuk mengamati satwa liar di habitat alami mereka."
    },
    {
        word: "planet",
        hint: "Benda langit yang mengorbit bintang dan tidak memproduksi cahaya sendiri."
    },
    {
        word: "sungai",
        hint: "Aliran air alami besar yang mengalir dalam saluran menuju laut, danau, atau aliran lainnya."
    },
    {
        word: "tropis",
        hint: "Berkaitan dengan atau terletak di wilayah antara Garis Balik Utara dan Garis Balik Selatan."
    },
    {
        word: "misterius",
        hint: "Sulit atau tidak mungkin untuk dipahami, dijelaskan, atau diidentifikasi."
    },
    {
        word: "enigma",
        hint: "Sesuatu yang misterius, membingungkan, atau sulit dipahami."
    },
    {
        word: "paradoks",
        hint: "Pernyataan atau situasi yang saling bertentangan atau bertentangan dengan intuisi."
    },
    {
        word: "teka-teki",
        hint: "Permainan, mainan, atau masalah yang dirancang untuk menguji kecerdikan atau pengetahuan."
    },
    {
        word: "bisikan",
        hint: "Berbicara dengan sangat lembut atau pelan, sering kali dengan cara yang rahasia."
    },
    {
        word: "bayangan",
        hint: "Area atau bentuk gelap yang dihasilkan oleh objek yang menghalangi cahaya."
    },
    {
        word: "rahasia",
        hint: "Sesuatu yang disimpan tersembunyi atau tidak diketahui orang lain."
    },
    {
        word: "ilusi",
        hint: "Persepsi atau keyakinan yang salah; penampilan atau kesan yang menipu."
    },
    {
        word: "cahaya bulan",
        hint: "Cahaya dari bulan."
    },
    {
        word: "vibran",
        hint: "Penuh energi, kecerahan, dan kehidupan."
    },
    {
        word: "nostalgia",
        hint: "Kerinduan sentimental atau kasih sayang yang penuh harapan untuk masa lalu."
    },
    {
        word: "brilian",
        hint: "Sangat cerdas, berbakat, atau mengesankan."
    },
];

// Daftar soal dengan satu kata jawaban
const questions = [
    {
        word: "gitar",
        hint: "Alat musik yang memiliki senar."
    },
    {
        word: "oksigen",
        hint: "Gas tak berwarna dan tak berbau yang penting bagi kehidupan."
    },
    {
        word: "gunung",
        hint: "Sebuah elevasi alami besar dari permukaan Bumi."
    },
    {
        word: "cokelat",
        hint: "Makanan manis yang terbuat dari biji kakao."
    },
    {
        word: "sejarah",
        hint: "Studi tentang peristiwa masa lalu dan peradaban manusia."
    },
    {
        word: "pizza",
        hint: "Hidangan gurih yang terdiri dari dasar bulat yang datar dengan topping."
    },
    {
        word: "jazz",
        hint: "Sebuah genre musik yang ditandai dengan improvisasi dan sinkopasi."
    },
    {
        word: "intan",
        hint: "Batu permata berharga yang dikenal karena kecemerlangan dan kekerasannya."
    },
    {
        word: "sains",
        hint: "Studi sistematis tentang struktur dan perilaku dunia fisik dan alami."
    },
    {
        word: "sepeda",
        hint: "Kendaraan yang digerakkan oleh manusia dengan dua roda."
    },
    {
        word: "kopi",
        hint: "Minuman berkafein populer yang terbuat dari biji kopi yang dipanggang."
    },
    {
        word: "tari",
        hint: "Gerakan ritmis tubuh yang sering dilakukan dengan musik."
    },
    {
        word: "galaksi",
        hint: "Sistem luas bintang, gas, dan debu yang diikat oleh gravitasi."
    },
    {
        word: "orkestra",
        hint: "Ensemble besar musisi yang memainkan berbagai instrumen."
    },
    {
        word: "novel",
        hint: "Karya fiksi panjang, biasanya dengan plot dan karakter yang kompleks."
    },
    {
        word: "patung",
        hint: "Bentuk seni tiga dimensi yang dibuat dengan membentuk atau menggabungkan bahan."
    },
    {
        word: "arsitektur",
        hint: "Seni dan ilmu merancang dan membangun bangunan."
    },
    {
        word: "ballet",
        hint: "Bentuk tari klasik yang ditandai dengan gerakan yang tepat dan anggun."
    },
    {
        word: "astronot",
        hint: "Orang yang dilatih untuk bepergian dan bekerja di luar angkasa."
    },
    {
        word: "air terjun",
        hint: "Aliran air yang jatuh dari ketinggian."
    },
    {
        word: "teknologi",
        hint: "Penerapan pengetahuan ilmiah untuk tujuan praktis."
    },
    {
        word: "pelangi",
        hint: "Fenomena meteorologi yang disebabkan oleh refleksi, refraksi, dan dispersi cahaya."
    },
    {
        word: "piano",
        hint: "Alat musik yang dimainkan dengan menekan tombol yang menyebabkan palu memukul senar."
    },
    {
        word: "liburan",
        hint: "Periode waktu yang didedikasikan untuk kesenangan, istirahat, atau relaksasi."
    },
    {
        word: "hutan hujan",
        hint: "Hutan lebat yang ditandai dengan curah hujan tinggi dan keanekaragaman."
    }];