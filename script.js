// Lấy tham chiếu đến các phần tử HTML
const noBtn = document.getElementById('noBtn'); // Nút "Không"
const yesBtn = document.getElementById('yesBtn'); // Nút "Có"
const sound = document.getElementById('sound'); // Phần tử audio
const sound1 = document.getElementById('sound1'); // Phần tử audio
const question = document.getElementById('question'); // Tiêu đề câu hỏi
const image = document.getElementById('image'); // Hình ảnh chính
const buttons = document.getElementById('buttons'); // Container các nút
const answer = document.getElementById('answer'); // Container đáp án
const answerImage = document.getElementById('answerImage'); // Hình ảnh đáp án
const answerText = document.getElementById('answerText'); // Văn bản đáp án

// Mảng chứa các câu hỏi ngẫu nhiên
const questions = [
    'CHẤP NHẬN SỰ THẬT ĐI !',
    'THÔI ĐỪNG CỐ CHẤP =)))',
    'ANH BIẾT MÀY NGU MÀ !',
    'KIÊN TRÌ THẾ ẤY CHỨ !',
    'CHỌN LẠI ĐI EM'
];

// Mảng chứa các URL ảnh ngẫu nhiên cho câu hỏi
const images = [
    'Anh/B1.png',
    'Anh/B2.webp',
    'Anh/B3.webp',
    'Anh/B4.png',
    'Anh/B5.png'
];

// Mảng chứa các đáp án và ảnh khi nhấn "Có"
const answers = [
    { text: 'Ồ HÓA RA MÀY CŨNG TỰ BIẾT À =)))', image: 'Anh/A1.png' },
    { text: 'ĐÚNG RỒI MÀY NGU VÃI LỒN', image: 'Anh/A2.webp' },
    { text: 'TỰ BIẾT MÌNH NGU LUÔN HAY ĐẤY', image: 'Anh/A3.png' }
];

// Biến lưu trữ mức độ phóng to của nút "Có"
let yesBtnScale = 1;
// Biến lưu trữ khoảng cách dịch chuyển của câu hỏi và hình ảnh (âm để dịch lên trên)
let verticalOffset = 0;
// Biến lưu trữ khoảng cách dịch chuyển của nút "Không"
let noBtnOffset = 0;

// Hàm chọn ngẫu nhiên một phần tử từ mảng
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Thêm sự kiện click cho nút "Không"
noBtn.addEventListener('click', () => {
    // Thêm class "shake" để kích hoạt hiệu ứng rung và phóng to
    noBtn.classList.add('shake');
    // Phát tệp âm thanh
    sound.play();
    // Tăng kích thước nút "Có" thêm 10%
    yesBtnScale += 0.1;
    yesBtn.style.transform = `scale(${yesBtnScale})`;
    // Dịch câu hỏi và hình ảnh lên trên 20px (giá trị âm)
    verticalOffset -= 2;
    question.style.transform = `translateY(${verticalOffset}px)`;
    image.style.transform = `translateY(${verticalOffset}px)`;
    // Dịch nút "Không" sang phải 10px
    noBtnOffset += 5;
    noBtn.style.transform = `translateX(${noBtnOffset}px)`;
    // Thay đổi câu hỏi ngẫu nhiên
    question.textContent = getRandomItem(questions);
    // Thay đổi hình ảnh ngẫu nhiên
    image.src = getRandomItem(images);
    // Xóa class "shake" sau 0.5 giây để kết thúc hiệu ứng
});

yesBtn.addEventListener('click', () =>{
    sound1.play();
}

)

// Thêm sự kiện click cho nút "Có"
yesBtn.addEventListener('click', () => {
    // Ẩn hình ảnh chính và câu hỏi
    image.style.display = 'none';
    question.style.display = 'none';
    // Ẩn container các nút
    buttons.style.display = 'none';
    // Hiển thị container đáp án
    answer.style.display = 'block';
    // Chọn ngẫu nhiên một đáp án
    const selectedAnswer = getRandomItem(answers);
    // Cập nhật hình ảnh và văn bản đáp án
    answerImage.src = selectedAnswer.image;
    answerText.textContent = selectedAnswer.text;
});