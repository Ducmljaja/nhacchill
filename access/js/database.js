const song = [
    // Mỗi bài hát sẽ có các thuộc tính như sau:
    {
        id: 0,
        name: 'Buồn hay vui',
        idSinger: [0,2,11,12,13],
        path: 'access/audio/y2mate.com - BUỒN HAY VUI  VSOUL x MCK x Obito x Ronboogz x Boyzed  Official Audio .mp3',
        image: 'access/image/img square/buonhayvui.jpg',
        view: 218765,
        love: true
    },
    {
        id: 1,
        name: 'Kiểu như tâm tình',
        idSinger: [1],
        path: '/access/audio/y2mate.com - NAMCOCAIN aka NamLee  KIỂU NHƯ TÂM TÌNH  PROD BOYZED   vy gieo đấy .mp3',
        image: '/access/image/img square/kieunhutamtinh.jpg',
        view: 6,
        love: false
    },
    {
        id: 2,
        name: 'Truy lùng',
        idSinger: [1],
        path: '/access/audio/y2mate.com - NAMCOCAIN aka NamLee  TRUY LÙNG  vy gieo đấy .mp3',
        image: '/access/image/img square/truylung.jpg',
        view: 0,
        love: false
    },
    {
        id: 3,
        name: 'Chỉ một đêm nữa thôi',
        idSinger: [2,14],
        path: 'access/audio/y2mate.com _ 06 Chỉ Một Đêm Nữa Thôi  RPT MCK  ft tlinh    99  the album.mp3',
        image: '/access/image/img square/chimotdemnuathoi.jpg ',
        view: 10,
        love: false
    },
    {
        id: 4,
        name: 'Chạy ngay đi',
        idSinger: [3],
        path: 'access/audio/y2mate.com _ Chạy Ngay Đi.mp3',
        image: '/access/image/img square/chayngaydi.jpg',
        view: 1,
        love: false
    },
    {
        id: 5,
        name: 'Chịu cách mình nói thua',
        idSinger: [4,7,15],
        path: 'access/audio/y2mate.com _ Chịu Cách Mình Nói Thua.mp3',
        image: 'access/image/img square/chiucachminhnoithua.jpg',
        view: 123456,
        love: false
    },
    {
        id: 6,
        name: 'Chờ em đến bao giờ',
        idSinger: [5],
        path: 'access/audio/y2mate.com _ Chờ Em Đến Bao Giờ Lofi Ver  Phong Max x Freak D.mp3',
        image: 'access/image/img square/choemdenbaogio.jpg',
        view: 98765,
        love: false
    },
    {
        id: 7,
        name: 'Chúng ta không thuộc về nhau',
        idSinger: [3],
        path: 'access/audio/y2mate.com _ Chúng Ta Không Thuộc Về Nhau.mp3',
        image: 'access/image/img square/chungtakhongthuocvenhau.jpg',
        view: 112,
        love: false
    },
    {
        id: 8,
        name: 'Có một nơi như thế',
        idSinger: [6],
        path: 'access/audio/y2mate.com _ Có Một Nơi Như Thế  Phan Mạnh Quỳnh  AUDIO LYRIC OFFICIAL.mp3',
        image: 'access/image/img square/comotnoinhuthe.jpg',
        view: 29,
        love: false
    },
    {
        id: 9,
        name: 'Sau cơn mưa',
        idSinger: [7,4],
        path: 'access/audio/y2mate.com _ CoolKid  Sau Cơn Mưa ft Rhyder.mp3',
        image: 'access/image/img square/sauconmua.jpg',
        view: 10000,
        love: false
    },
    {
        id: 10,
        name: 'Wish',
        idSinger: [8],
        path: 'access/audio/y2mate.com _ GDUCKY  WISH OFFICIAL MUSIC VIDEO.mp3',
        image: 'access/image/img square/wish.jpg',
        view: 10023,
        love: false
    },
    {
        id: 11,
        name: 'Không thể say',
        idSinger: [9],
        path: 'access/audio/y2mate.com _ HIEUTHUHAI  Không Thể Say prod by Kewtiie l Official Video.mp3',
        image: 'access/image/img square/khongthesay.jpg',
        view: 69,
        love: false
    },
    {
        id: 12,
        name: 'Một bước yêu vạn dặm đau',
        idSinger: [10],
        path: 'access/audio/y2mate.com _ Một Bước Yêu Vạn Dặm Đau Lyrics Video  Mr Siro.mp3',
        image: 'access/image/img square/motbuocyeuvandamdau.jpg',
        view: 59,
        love: false
    },
     {
        id: 13,
        name: 'Phóng Đổ Tim Em',
        idSinger: [16],
        path: 'access/audio/y2mate.com _ WREN EVANS  Phóng Đổ Tim Em  LOI CHOI The First Album.mp3',
        image: 'access/image/img square/loichoi.jpg',
        view: 79,
        love: false
    },
    {
        id: 14,
        name: 'Cầu Vĩnh Tuy',
        idSinger: [16],
        path: 'access/audio/y2mate.com - WREN EVANS  Cầu Vĩnh Tuy  LOI CHOI The First Album.mp3',
        image: 'access/image/img square/loichoi.jpg',
        view: 7198,
        love: false
    },
     {
        id: 15,
        name: 'Từng Quen',
        idSinger: [16],
        path: 'access/audio/y2mate.com - WREN EVANS  Từng Quen  LOI CHOI The First Album.mp3',
        image: 'access/image/img square/loichoi.jpg',
        view: 719,
        love: false
    },
     {
        id: 16,
        name: 'Bé Ơi Từ Từ',
        idSinger: [16],
        path: 'access/audio/y2mate.com - WREN EVANS  bé ơi từ từ  LOI CHOI The First Album.mp3',
        image: 'access/image/img square/loichoi.jpg',
        view: 7129,
        love: false
    },
    {
        id: 17,
        name: 'Tình Yêu Vĩ Mô',
        idSinger: [16],
        path: 'access/audio/y2mate.com - WREN EVANS  Tình Yêu Vĩ Mô  LOI CHOI The First Album.mp3',
        image: 'access/image/img square/loichoi.jpg',
        view: 7129,
        love: false
    },
     {
        id: 18,
        name: 'Lối Chơi',
        idSinger: [16],
        path: 'access/audio/y2mate.com - WREN EVANS  Lối Chơi  LOI CHOI The First Album.mp3',
        image: 'access/image/img square/loichoi.jpg',
        view: 7129,
        love: false
    },
    {
        id: 19,
        name: 'Việt Kiều',
        idSinger: [16],
        path: 'access/audio/y2mate.com - WREN EVANS  Việt Kiều  LOI CHOI The First Album.mp3',
        image: 'access/image/img square/loichoi.jpg',
        view: 7129,
        love: false
    },
    {
        id: 20,
        name: 'Quyền Anh',
        idSinger: [16],
        path: 'access/audio/y2mate.com - WREN EVANS  Quyền Anh  LOI CHOI The First Album.mp3',
        image: 'access/image/img square/loichoi.jpg',
        view: 7129,
        love: false
    },
    {
        id: 21,
        name: 'Tò Te Tí',
        idSinger: [16],
        path: 'access/audio/y2mate.com - WREN EVANS  Tò Te Tí  LOI CHOI The First Album.mp3',
        image: 'access/image/img square/loichoi.jpg',
        view: 7129,
        love: false
    },
     {
        id: 22,
        name: 'Loi Choi',
        idSinger: [16],
        path: 'access/audio/y2mate.com - WREN EVANS  LOI CHOI không điểm dừng  Full Album.mp3',
        image: 'access/image/img square/loichoi.jpg',
        view: 7129,
        love: false
    },
     {
        id: 23,
        name: 'Đ Đ Đ',
        idSinger: [16],
        path: 'access/audio/y2mate.com - WREN EVANS  ĐĐĐ  LOI CHOI The First Album.mp3',
        image: 'access/image/img square/loichoi.jpg',
        view: 7129,
        love: false
    },
    {
        id: 24,
        name: 'Chìm Sâu',
        idSinger: [2],
        path: 'access/audio/y2mate.com - 02 Chìm Sâu  RPT MCK  ft Trung Trần    99  the album.mp3',
        image: 'access/image/img square/99.jpg',
        view: 7129,
        love: false
    },
    {
        id: 25,
        name: 'Suit Tie',
        idSinger: [2],
        path: 'access/audio/y2mate.com - 03 Suit  Tie  RPT MCK  ft Hoàng Tôn    99  the album.mp3',
        image: 'access/image/img square/99.jpg',
        view: 7129,
        love: false
    },
    {
        id: 26,
        name: 'Va Vào Giai Điệu ',
        idSinger: [2],
        path: 'access/audio/y2mate.com - 04 Va Vào Giai Điệu Này  RPT MCK  99 the album.mp3',
        image: 'access/image/img square/99.jpg',
        view: 7129,
        love: false
    },
    {
        id: 27,
        name: 'Tối Nay Ta Đi Đâu Nhờ ',
        idSinger: [2],
        path: 'access/audio/y2mate.com - 05 Tối Nay Ta Đi Đâu Nhờ  RPT MCK Remix  99 the album.mp3',
        image: 'access/image/img square/99.jpg',
        view: 7129,
        love: false
    },
    {
        id: 28,
        name: 'Chỉ Một Đêm Nữa Thôi',
        idSinger: [2],
        path: 'access/audio/y2mate.com - 06 Chỉ Một Đêm Nữa Thôi  RPT MCK  ft tlinh    99  the album.mp3',
        image: 'access/image/img square/99.jpg',
        view: 7129,
        love: false
    },
     {
        id: 29,
        name: 'Thôi Em ĐỪng Đi',
        idSinger: [2],
        path: 'access/audio/y2mate.com - 07 Thôi Em Đừng Đi  RPT MCK  ft Trung Trần    99  the album.mp3',
        image: 'access/image/img square/99.jpg',
        view: 7129,
        love: false
    },
    {
        id: 30,
        name: 'Cuốn Cho Anh Một Điếu Nữa Đi',
        idSinger: [2],
        path: 'access/audio/y2mate.com - 09 Cuốn Cho Anh Một Điếu Nữa Đi  RPT MCK   99  the album.mp3',
        image: 'access/image/img square/99.jpg',
        view: 7129,
        love: false
    },
     {
        id: 31,
        name: '50/50(Interlude)',
        idSinger: [2],
        path: 'access/audio/y2mate.com - 08 Intelude RPT MCK  ft Trung Trần    99  the album.mp3',
        image: 'access/image/img square/99.jpg',
        view: 7129,
        love: false
    },
     {
        id: 32,
        name: 'Show Me Love',
        idSinger: [2],
        path: 'access/audio/y2mate.com - 10 Show Me Love  RPT MCK   99  the album.mp3',
        image: 'access/image/img square/99.jpg',
        view: 7129,
        love: false
    },
    {
        id: 33,
        name: 'Tại Vì Sao',
        idSinger: [2],
        path: 'access/audio/y2mate.com - 11 Tại Vì Sao  RPT MCK  99 the album.mp3',
        image: 'access/image/img square/99.jpg',
        view: 7129,
        love: false
    },
    {
        id: 34,
        name: 'Ai Cũng Phải Bắt Đầu Từ Đâu Đó',
        idSinger: [9],
        path: 'access/audio/y2mate.com - HIEUTHUHAI  Ai Cũng Phải Bắt Đầu Từ Đâu Đó prod by Kewtiie Official Lyric Video.mp3',
        image: 'access/image/img square/aicungphaibatdautudaudo.jpg',
        view: 7129,
        love: false
    },
    {
        id: 35,
        name: 'Giờ Thì Ai Cười',
        idSinger: [9],
        path: 'access/audio/y2mate.com - HIEUTHUHAI  Giờ Thì Ai Cười prod by Kewtiie Official Lyric Video.mp3',
        image: 'access/image/img square/aicungphaibatdautudaudo.jpg',
        view: 7129,
        love: false
    },
      {
        id: 36,
        name: 'Không Phải Gu',
        idSinger: [9],
        path: 'access/audio/y2mate.com - HIEUTHUHAI  Không Phải Gu prod by Kewtiie ft B Ray  Tage Official Lyric Video.mp3',
        image: 'access/image/img square/aicungphaibatdautudaudo.jpg',
        view: 7129,
        love: false
    },
     {
        id: 37,
        name: ' Siêu Sao prod ',
        idSinger: [9],
        path: 'access/audio/y2mate.com - HIEUTHUHAI  Siêu Sao prod by Kewtiie Official Lyric Video.mp3',
        image: 'access/image/img square/aicungphaibatdautudaudo.jpg',
        view: 7129,
        love: false
    },
     {
        id: 38,
        name: ' Xuất Phát Điểm ',
        idSinger: [11],
        path: 'access/audio/y2mate.com - youtube video aF1tJEPWjIM.mp3',
        image: 'access/image/img square/danhdoi.jpg',
        view: 7129,
        love: false
    },
    {
        id: 39,
        name: 'Đanh Đổi',
        idSinger: [11],
        path: 'access/audio/y2mate.com - Đánh Đổi video aF1tJEPWjIM.mp3',
        image: 'access/image/img square/danhdoi.jpg',
        view: 7129,
        love: false
    },
    {
        id: 40,
        name: 'CL5',
        idSinger: [11],
        path: 'access/audio/y2mate.com - Obito  CL5 Interlude.mp3',
        image: 'access/image/img square/danhdoi.jpg',
        view: 7129,
        love: false
    },
    {
        id: 41,
        name: 'Đầu Đường Xó Chợ',
        idSinger: [11],
        path: 'access/audio/y2mate.com - Obito  Đầu Đường Xó Chợ ft Lăng LD.mp3',
        image: 'access/image/img square/danhdoi.jpg',
        view: 7129,
        love: false
    },
     {
        id: 42,
        name: 'Biên Giới Long Bình',
        idSinger: [11],
        path: 'access/audio/Obito - Biên Giới Long Bình.mp3',
        image: 'access/image/img square/danhdoi.jpg',
        view: 7129,
        love: false
    },
     {
        id: 43,
        name: 'Sài Gòn Ơi',
        idSinger: [11],
        path: 'access/audio/Obito - Sài Gòn ơi.mp3',
        image: 'access/image/img square/danhdoi.jpg',
        view: 7129,
        love: false
    },
     {
        id: 44,
        name: 'Trốn Chạy',
        idSinger: [11],
        path: 'access/audio/Obito - Trốn Chạy.mp3',
        image: 'access/image/img square/danhdoi.jpg',
        view: 7129,
        love: false
    },
     {
        id: 45,
        name: 'Cất Cánh (Interlude)',
        idSinger: [11],
        path: 'access/audio/Obito - Cất Cánh (Interlude).mp3',
        image: 'access/image/img square/danhdoi.jpg',
        view: 7129,
        love: false
    },
    {
        id: 46,
        name: 'Hà Nội',
        idSinger: [11],
        path: 'access/audio/Obito - Hà Nội ft. VSTRA.mp3',
        image: 'access/image/img square/danhdoi.jpg',
        view: 7129,
        love: false
    },
      {
        id: 47,
        name: 'Cơn Mưa Ngang Qua',
        idSinger: [3],
        path: 'access/audio/ConMuaNgangQua SonTungMTP 2782444.mp3',
        image: 'access/image/img square/conmuangangqua.jpg',
        view: 7129,
        love: false
    },
    {
        id: 48,
        name: 'Bình Yên Nơi Đâu',
        idSinger: [3],
        path: 'access/audio/Bình Yên Nơi Đâu  Sơn Tùng M-TP.mp3',
        image: 'access/image/img square/binhyennoidau.jpg',
        view: 7129,
        love: false
    },
      {
        id: 49,
        name: 'Lạc Trôi',
        idSinger: [3],
        path: 'access/audio/LẠC TRÔI  OFFICIAL MUSIC VIDEO  SƠN TÙNG M-TP.mp3',
        image: 'access/image/img square/lactroi.jpg',
        view: 7129,
        love: false
    },
    {
        id: 50,
        name: 'Thái Bình Mồ Hôi Rơi',
        idSinger: [3],
        path: 'access/audio/TEbtV6UHufFKbEV7RueakBRVFp91fbmSjJ.mp3',
        image: 'access/image/img square/thaibinh.jpg',
        view: 7129,
        love: false
    },
     {
        id: 51,
        name: 'Một Năm Mới Bình An',
        idSinger: [3],
        path: 'access/audio/VIRAL CLIP - MỘT NĂM MỚI BÌNH AN  SƠN TÙNG M-TP.mp3',
        image: 'access/image/img square/nammoi.jpg',
        view: 7129,
        love: false
    },
    {
        id: 52,
        name: 'Nơi Này Có Anh',
        idSinger: [3],
        path: 'access/audio/NƠI NÀY CÓ ANH  OFFICIAL MUSIC VIDEO  SƠN TÙNG M-TP.mp3',
        image: 'access/image/img square/noinay.jpg',
        view: 7129,
        love: false
    },
     {
        id: 53,
        name: 'Anh Chỉ Là Người Thay Thế',
        idSinger: [17],
        path: 'access/audio/Thương Nhưng Không Còn Nhau  Những bài hát cho trái tim Từng Tổn Thương  Mr. Siro.mp3',
        image: 'access/image/img square/thaythe.jpg',
        view: 7129,
        love: false
    },
    {
        id: 54,
        name: 'Chẳng Ai Đến Thế Giới Này Để Cô Đơn',
        idSinger: [17],
        path: 'access/audio/Chẳng Ai Đến Thế Giới Này Để Cô Đơn - [Official Lyric]  Mr.Siro.mp3',
        image: 'access/image/img square/codon.jpg',
        view: 7129,
        love: false
    },
     {
        id: 55,
        name: 'Cung Bậc Sầu',
        idSinger: [17],
        path: 'access/audio/Cung Bậc Sầu - [Official Lyric]  Mr.Siro.mp3',
        image: 'access/image/img square/sau.jpg',
        view: 7129,
        love: false
    },
     {
        id: 56,
        name: 'Yêu Mấy Cũng Đừng Quay Lại',
        idSinger: [17],
        path: 'access/audio/Người Như Chúng Ta - [Official Lyric]  Mr. Siro.mp3',
        image: 'access/image/img square/yeu.jpg',
        view: 7129,
        love: false
    },
     {
        id: 57,
        name: 'Sory Bae',
        idSinger: [17],
        path: 'access/audio/MR. SIRO  Sorry Babe  Official Lyric.mp3',
        image: 'access/image/img square/sory.jpg',
        view: 7129,
        love: false
    },
]

const album = [
    {
        id: 0,
        image: 'access/image/img square/mtp.jpg',
        name: 'M-TP',
        idSinger: 3,
        like: 2000,
        day: '5/9/2013',
        idSong: [4,7,47,48,49,50,51,52]
    },
    {
        id: 1,
        image: 'access/image/img square/danhdoi.jpg',
        name: 'Đánh đổi',
        idSinger: 11,
        like: 2000,
        day: '29/12/2023',
        idSong: [38,39,40,41,42,43,44,45,46]
    },
    {
        id: 2,
        image: 'access/image/img square/siro.jpg',
        name: 'Nhạc Buồn',
        idSinger: 17,
        like: 3012022,
        day: '03/01/2022',
        idSong: [53,54,55,56,57]
    },
    {
        id: 3,
        image: 'access/image/img square/aicungphaibatdautudaudo.jpg',
        name: 'Ai cũng phải bắt đầu từ đâu đó',
        idSinger: 9,
        like: 2000,
        day: '02/9/2022',
        idSong: [34,35,36,37]
    },
    {
        id: 4,
        image: 'access/image/img square/99.jpg',
        name: '99%',
        idSinger: 2,
        like: 12102022,
        day: '12/10/2022',
        idSong: [24,25,26,27,28,29,30,31,32,33]
    },
    {
        id: 5,
        image: 'access/image/img square/loichoi.jpg',
        name: 'LOI CHOI',
        idSinger: 16,
        like: 2569,
        day: '5/9/2023',
        idSong: [13,14,15,16,17,18,19,20,21,22,23]
    },
   
    
]

const artist = [
    {
        id: 0,
        image: 'access/image/img square/vsoul.jpg',
        name: 'VSOUL',
    },
    {
        id: 1,
        image: 'access/image/img square/namcocain.jpg',
        name: 'Nam Cocain',
    },
    {
        id: 2,
        image: 'access/image/img square/mck.jpeg',
        name: 'MCK',
    },
    {
        id: 3,
        image: 'access/image/img square/makingmyway.jpg',
        name: 'Sơn Tùng MTP',
    },
    {
        id: 4,
        image: 'access/image/img square/rhyder.jpg',
        name: 'Rhyder',
    },
    {
        id: 5,
        image: 'access/image/img square/choemdenbaogio.jpg',
        name: 'Phong Max',
    },
    {
        id: 6,
        image: 'access/image/img square/phanmanhquynh.jpg',
        name: 'Phan Mạnh Quỳnh',
    },
    {
        id: 7,
        image: 'access/image/img square/coolkid.jpg',
        name: 'CoolKid',
    },
    {
        id: 8,
        image: 'access/image/img square/gducky.jpg',
        name: 'GDUCKY',
    },
    {
        id: 9,
        image: 'access/image/img square/khongthesay.jpg',
        name: 'HIEUTHUHAI',
    },
    {
        id: 10,
        image: 'access/image/img square/motbuocyeuvandamdau.jpg',
        name: 'Mr.Siro',
    },
    {
        id: 11,
        image: 'access/image/img square/danhdoi.jpg',
        name: 'Obito',
    },
    {
        id: 12,
        image: 'access/image/img square/ronboogz.jpg',
        name: 'Ronboogz',
    },
    {
        id: 13,
        image: 'access/image/img square/boyzed.jpg',
        name: 'Boyzed',
    },
    {
        id: 14,
        image: 'access/image/img square/tlinh.jpg',
        name: 'TLinh',
    },
    {
        id: 15,
        image: 'access/image/img square/ban.jpg',
        name: 'BAN',
    },
    {
        id: 16,
        image: 'access/image/img square/loichoi.jpg',
        name: 'Wren Evans',
    },
     {
        id: 17,
        image: 'access/image/img square/siro.jpg',
        name: 'MR Siro',
    },
]

const playlist = [
    {
        image: '/access/image/img retangle/baihatnoibat.jpg',
    },
    {
        image: '/access/image/img retangle/nhacgiangsinh.jpg',
    },
    {
        image: '/access/image/img retangle/nghesinoibat.jpg',
    },
    {
        image: '/access/image/img retangle/nhacmoimoituan.jpg',
    },
    {
        image: '/access/image/img retangle/traoluunhachot.jpg',
    },
    {
        image: '/access/image/img retangle/nhacgiangsinhbanron.jpg',
    },
]
