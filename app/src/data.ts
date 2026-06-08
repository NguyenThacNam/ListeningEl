import type { Section, Test, ChoiceQ } from './types'

// Helper: tạo 3 đáp án A/B/C nhanh.
const abc = (a: string, b: string, c: string) => [
  { key: 'A', label: a },
  { key: 'B', label: b },
  { key: 'C', label: c },
]

// ===================== PART 1 — TRANH (PET, 5 câu/đề) =====================
const petTests: Test[] = [
  {
    id: 'pet-1', group: 'pet', title: 'Đề 1', images: ['pages/page_01.png', 'pages/page_02.png'],
    picture: {
      intro: 'Nghe 5 đoạn hội thoại ngắn, chọn tranh đúng (A/B/C).',
      questions: [
        { n: 1, prompt: 'What will they eat for dinner this evening?', options: abc('Món thịt', 'Cá', 'Pizza/mì'), answer: 'B' },
        { n: 2, prompt: 'What time is it?', options: abc('2:10', '2:20', '2:30'), answer: 'C' },
        { n: 3, prompt: "What's Michelle going to read?", options: abc('Quyển sách', 'Lá thư', 'Tờ báo'), answer: 'B' },
        { n: 4, prompt: 'How much did the tickets cost?', options: abc('$19', '$90', '$99'), answer: 'B' },
        { n: 5, prompt: "Where is the chemist's?", options: abc('Vị trí A', 'Vị trí B', 'Vị trí C'), answer: 'C' },
      ],
    },
  },
  {
    id: 'pet-2', group: 'pet', title: 'Đề 2', images: ['pages/page_03.png', 'pages/page_04.png'],
    picture: {
      intro: 'Nghe 5 đoạn hội thoại ngắn, chọn tranh đúng (A/B/C).',
      questions: [
        { n: 1, prompt: 'How will Mary travel to Scotland?', options: abc('Xe buýt', 'Ô tô', 'Tàu hỏa'), answer: 'B' },
        { n: 2, prompt: 'Where are the shoes?', options: abc('Cạnh cửa sổ', 'Gầm bàn', 'Trên ghế'), answer: 'A' },
        { n: 3, prompt: 'When will the football match start next week?', options: abc('11.45 a.m.', '12.15 p.m.', '2.00 p.m.'), answer: 'C' },
        { n: 4, prompt: 'Which box of chocolates do they buy?', options: abc('Hộp A', 'Hộp B', 'Hộp C'), answer: 'B' },
        { n: 5, prompt: "When's Wendy's birthday?", options: abc('16 May', '18 May', '21 May'), answer: 'B' },
      ],
    },
  },
  {
    id: 'pet-3', group: 'pet', title: 'Đề 3', images: ['pages/page_05.png', 'pages/page_06.png'],
    picture: {
      intro: 'Nghe 5 đoạn hội thoại ngắn, chọn tranh đúng (A/B/C).',
      questions: [
        { n: 1, prompt: "Where's the sports centre?", options: abc('Vị trí A', 'Vị trí B', 'Vị trí C'), answer: 'A' },
        { n: 2, prompt: 'How much petrol does the woman want?', options: abc('13 litres', '30 litres', '33 litres'), answer: 'B' },
        { n: 3, prompt: 'Which table do they buy?', options: abc('Bàn tròn (A)', 'Bàn tròn (B)', 'Bàn chữ nhật'), answer: 'C' },
        { n: 4, prompt: 'What time does the class start?', options: abc('Đồng hồ A', 'Đồng hồ B', 'Đồng hồ C'), answer: 'A' },
        { n: 5, prompt: "What was the weather like on Emma's holiday?", options: abc('Nắng', 'Nhiều mây', 'Mưa'), answer: 'C' },
      ],
    },
  },
  {
    id: 'pet-4', group: 'pet', title: 'Đề 4', images: ['pages/page_07.png', 'pages/page_08.png'],
    picture: {
      intro: 'Nghe 5 đoạn hội thoại ngắn, chọn tranh đúng (A/B/C).',
      questions: [
        { n: 1, prompt: 'What was the weather like on Wednesday?', options: abc('Tranh A', 'Tranh B', 'Tranh C'), answer: 'B' },
        { n: 2, prompt: "How much did Mark's pullover cost?", options: abc('£14.99', '£40.99', '£44.99'), answer: 'A' },
        { n: 3, prompt: 'What did Raquel buy today?', options: abc('Áo vest', 'Váy', 'Bốt'), answer: 'C' },
        { n: 4, prompt: 'How many students are there at the college?', options: abc('300', '600', '750'), answer: 'C' },
        { n: 5, prompt: 'What is David going to buy?', options: abc('Tranh A', 'Tranh B', 'Tranh C'), answer: 'A' },
      ],
    },
  },
  {
    id: 'pet-5', group: 'pet', title: 'Đề 5', images: ['pages/page_09.png', 'pages/page_10.png'],
    picture: {
      intro: 'Nghe 5 đoạn hội thoại ngắn, chọn tranh đúng (A/B/C).',
      questions: [
        { n: 1, prompt: 'When did Gary start his new job?', options: abc('March', 'April', 'May'), answer: 'C' },
        { n: 2, prompt: 'What time does the film start?', options: abc('4.30 & 7.00', '4.30 & 7.30', '4.00 & 7.30'), answer: 'A' },
        { n: 3, prompt: 'What was the weather like on Saturday?', options: abc('Tranh A', 'Tranh B', 'Tranh C'), answer: 'B' },
        { n: 4, prompt: 'Which motorway will they take?', options: abc('M1', 'M6', 'M62'), answer: 'B' },
        { n: 5, prompt: 'Which book does Lorna want?', options: abc('Tranh A', 'Tranh B', 'Tranh C'), answer: 'A' },
      ],
    },
  },
  {
    id: 'pet-6', group: 'pet', title: 'Đề 6', images: ['pages/page_11.png', 'pages/page_12.png'],
    picture: {
      intro: 'Nghe 5 đoạn hội thoại ngắn, chọn tranh đúng (A/B/C).',
      questions: [
        { n: 1, prompt: "What colour is Kathy's bedroom now?", options: abc('Pink', 'Green', 'Blue'), answer: 'C' },
        { n: 2, prompt: "Which platform does the woman's train leave from?", options: abc('Platform 2', 'Platform 6', 'Platform 10'), answer: 'A' },
        { n: 3, prompt: 'How is Susan going to get to the airport?', options: abc('Xe buýt', 'Taxi', 'Tàu hỏa'), answer: 'A' },
        { n: 4, prompt: "Which is Anna's family?", options: abc('Tranh A', 'Tranh B', 'Tranh C'), answer: 'B' },
        { n: 5, prompt: "When is Kim's birthday party?", options: abc('June 11', 'June 16', 'June 30'), answer: 'A' },
      ],
    },
  },
  {
    id: 'pet-7', group: 'pet', title: 'Đề 7', images: ['pages/page_13.png', 'pages/page_14.png'],
    picture: {
      intro: 'Nghe 5 đoạn hội thoại ngắn, chọn tranh đúng (A/B/C).',
      questions: [
        { n: 1, prompt: 'When will they go on holiday?', options: abc('June', 'July', 'September'), answer: 'A' },
        { n: 2, prompt: 'How is Patti going to travel?', options: abc('Tàu hỏa', 'Máy bay', 'Ô tô'), answer: 'C' },
        { n: 3, prompt: 'What will Sam do?', options: abc('Gọi điện', 'Viết thư', 'Ghi chú'), answer: 'B' },
        { n: 4, prompt: 'What was the weather like in Portugal?', options: abc('Nhiều mây', 'Mưa', 'Nắng'), answer: 'A' },
        { n: 5, prompt: 'What has the girl broken?', options: abc('Cái cốc', 'Cái chai', 'Bức tranh'), answer: 'B' },
      ],
    },
  },
  {
    id: 'pet-8', group: 'pet', title: 'Đề 8', images: ['pages/page_15.png', 'pages/page_16.png'],
    picture: {
      intro: 'Nghe 5 đoạn hội thoại ngắn, chọn tranh đúng (A/B/C).',
      questions: [
        { n: 1, prompt: "Which is Tom's mother?", options: abc('Tranh A', 'Tranh B', 'Tranh C'), answer: 'A' },
        { n: 2, prompt: 'Where will the beach party be?', options: abc('Vị trí A', 'Vị trí B', 'Vị trí C'), answer: 'C' },
        { n: 3, prompt: 'What will Fiona wear to the dance?', options: abc('Quần', 'Áo', 'Váy'), answer: 'B' },
        { n: 4, prompt: 'What homework is the girl doing now?', options: abc('Science', 'Maths', 'English'), answer: 'A' },
        { n: 5, prompt: "What's David going to buy?", options: abc('Táo', 'Cam', 'Nước ép'), answer: 'A' },
      ],
    },
  },
  {
    id: 'pet-9', group: 'pet', title: 'Đề 9', images: ['pages/page_17.png'],
    picture: {
      intro: 'Nghe 5 đoạn hội thoại ngắn, chọn tranh đúng (A/B/C).',
      questions: [
        { n: 1, prompt: 'What music will they have at the party?', options: abc('Guitar', 'Piano', 'Đĩa nhạc'), answer: 'C' },
        { n: 2, prompt: 'When will the man go on holiday?', options: abc('June', 'July', 'August'), answer: 'B' },
        { n: 3, prompt: 'What will the weather be like tomorrow?', options: abc('Nắng', 'Gió', 'Mưa'), answer: 'B' },
        { n: 4, prompt: "What colour is Mary's coat?", options: abc('Yellow', 'Blue', 'Brown'), answer: 'A' },
        { n: 5, prompt: 'What did the woman repair?', options: abc('Cái ghế', 'Tranh B', 'Cái bàn'), answer: 'B' },
      ],
    },
  },
  {
    id: 'pet-10', group: 'pet', title: 'Đề 10', images: ['pages/page_18.png'],
    picture: {
      intro: 'Nghe 5 đoạn hội thoại ngắn, chọn tranh đúng (A/B/C).',
      questions: [
        { n: 1, prompt: 'What are they going to buy for Pam?', options: abc('Quyển sách', 'Chậu cây', 'Tranh C'), answer: 'B' },
        { n: 2, prompt: "When is the man's appointment?", options: abc('Wednesday', 'Thursday', 'Friday'), answer: 'C' },
        { n: 3, prompt: "Which is the aunt's postcard?", options: abc('Tranh A', 'Tranh B', 'Tranh C'), answer: 'C' },
        { n: 4, prompt: 'What time will the plane to Milan leave?', options: abc('01:00', '07:15', '08:15'), answer: 'C' },
        { n: 5, prompt: "What does Joe's father do?", options: abc('Tranh A', 'Tranh B', 'Tranh C'), answer: 'A' },
      ],
    },
  },
  {
    id: 'pet-11', group: 'pet', title: 'Đề 11', images: ['pages/page_19.png'],
    picture: {
      intro: 'Nghe 5 đoạn hội thoại ngắn, chọn tranh đúng (A/B/C).',
      questions: [
        { n: 1, prompt: "What's George doing now?", options: abc('Tranh A', 'Tranh B', 'Tranh C'), answer: 'C' },
        { n: 2, prompt: 'Which room will the woman stay in?', options: abc('Phòng A', 'Phòng 20', 'Phòng C'), answer: 'B' },
        { n: 3, prompt: 'What will the boy wear in the race?', options: abc('Tranh A', 'Tranh B', 'Tranh C'), answer: 'C' },
        { n: 4, prompt: 'What colour will the room be?', options: abc('Yellow', 'Green', 'Orange'), answer: 'A' },
        { n: 5, prompt: 'Where did Minnie and Richard first meet?', options: abc('Tranh A', 'Tranh B', 'Tranh C'), answer: 'C' },
      ],
    },
  },
  {
    id: 'pet-12', group: 'pet', title: 'Đề 12', images: ['pages/page_20.png'],
    picture: {
      intro: 'Nghe 5 đoạn hội thoại ngắn, chọn tranh đúng (A/B/C).',
      questions: [
        { n: 1, prompt: 'How much is the car?', options: abc('£1000', '£2000', '£3000'), answer: 'C' },
        { n: 2, prompt: "What's Elena going to take to the party?", options: abc('Pizza', 'Tranh B', 'Tranh C'), answer: 'A' },
        { n: 3, prompt: 'Where will Susan buy her eggs?', options: abc('Tranh A', 'Tranh B', 'Tranh C'), answer: 'B' },
        { n: 4, prompt: 'What time does the film begin?', options: abc('Đồng hồ A', 'Đồng hồ B', 'Đồng hồ C'), answer: 'C' },
        { n: 5, prompt: 'How will the man travel to London?', options: abc('Xe buýt', 'Ô tô', 'Tranh C'), answer: 'A' },
      ],
    },
  },
]

// ===================== PART 1 — TRANH (KET, 7 câu/đề) =====================
const ketPic = (n: number, prompt: string, answer: string): ChoiceQ => ({
  n, prompt, options: abc('Tranh A', 'Tranh B', 'Tranh C'), answer,
})

const ketTests: Test[] = [
  {
    id: 'ket-1', group: 'ket', title: 'Đề KET 1', images: ['pages/page_21.png'],
    picture: {
      intro: 'Nghe 7 đoạn ngắn, chọn tranh đúng (A/B/C).',
      questions: [
        ketPic(1, "What was in the woman's bag?", 'B'),
        ketPic(2, 'Which film is the man talking about?', 'B'),
        ketPic(3, 'What should the woman do first?', 'C'),
        ketPic(4, 'What is David going to do this weekend?', 'B'),
        ketPic(5, 'How did the man get to work today?', 'B'),
        ketPic(6, 'Which tie does the man choose?', 'C'),
        ketPic(7, 'What time is the appointment?', 'C'),
      ],
    },
  },
  {
    id: 'ket-2', group: 'ket', title: 'Đề KET 2', images: ['pages/page_22.png'],
    picture: {
      intro: 'Nghe 7 đoạn ngắn, chọn tranh đúng (A/B/C).',
      questions: [
        ketPic(1, 'How did the film end?', 'B'),
        ketPic(2, 'What time does the train to Rome leave?', 'C'),
        ketPic(3, 'What is broken?', 'A'),
        ketPic(4, "Where are the man's shoes?", 'C'),
        ketPic(5, 'What will Paul get at the shop?', 'C'),
        ketPic(6, 'How were they told to do their homework?', 'A'),
        ketPic(7, 'What did Helen buy?', 'B'),
      ],
    },
  },
  {
    id: 'ket-3', group: 'ket', title: 'Đề KET 3', images: ['pages/page_23.png'],
    picture: {
      intro: 'Nghe 7 đoạn ngắn, chọn tranh đúng (A/B/C).',
      questions: [
        ketPic(1, 'How did the woman get to work today?', 'B'),
        ketPic(2, 'Where does the pollution come from?', 'C'),
        ketPic(3, 'When must the boys get on the coach?', 'A'),
        ketPic(4, 'What fruit do they take?', 'C'),
        ketPic(5, 'Which present has the man bought?', 'A'),
        ketPic(6, 'Where are the photographs?', 'C'),
        ketPic(7, 'What did Ben break?', 'C'),
      ],
    },
  },
  {
    id: 'ket-4', group: 'ket', title: 'Đề KET 4', images: ['pages/page_24.png'],
    picture: {
      intro: 'Nghe 7 đoạn ngắn, chọn tranh đúng (A/B/C).',
      questions: [
        ketPic(1, 'What time will the flight leave?', 'B'),
        ketPic(2, "Which is the photo of the girl's father?", 'B'),
        ketPic(3, 'What must the woman wear at work?', 'C'),
        ketPic(4, 'Where will they sit in the theatre?', 'C'),
        ketPic(5, 'How did the woman cook the onions?', 'C'),
        ketPic(6, 'What will the man buy?', 'A'),
        ketPic(7, 'How will they travel to Edinburgh?', 'B'),
      ],
    },
  },
]

// ===================== PART 2 (nối) + PART 3 (trắc nghiệm) =====================
const convTests: Test[] = [
  {
    id: 'conv-1', group: 'conv', title: 'Hội thoại · Đề 1',
    images: ['pages/page_25.png', 'pages/page_26.png', 'pages/page_27.png'],
    match: {
      intro: 'Amy & James lên kế hoạch tổ chức sinh nhật. Mỗi người làm việc gì? (Nối A–H)',
      bank: [
        { key: 'A', label: 'book the room (đặt phòng)' },
        { key: 'B', label: 'buy a present (mua quà)' },
        { key: 'C', label: 'buy party food (mua đồ ăn)' },
        { key: 'D', label: 'get drinks (lo đồ uống)' },
        { key: 'E', label: 'invite guests (mời khách)' },
        { key: 'F', label: 'make cake (làm bánh)' },
        { key: 'G', label: 'plan the music (chọn nhạc)' },
        { key: 'H', label: 'put up balloons (treo bóng)' },
      ],
      example: { name: 'Chris', answer: 'F' },
      pairs: [
        { n: 6, name: 'Amy', answer: 'A' },
        { n: 7, name: 'James', answer: 'E' },
        { n: 8, name: 'Claire', answer: 'G' },
        { n: 9, name: 'Tom', answer: 'D' },
        { n: 10, name: 'Jane', answer: 'B' },
      ],
      note: 'Đặt phòng – mời khách – chọn nhạc – đồ uống – tặng quà.',
    },
    mcq: {
      intro: 'Jessica nói chuyện với Frank về một lớp khiêu vũ (dance class).',
      example: { n: 0, prompt: 'What time does the class start?', options: abc('7.30 p.m.', '8 p.m.', '9 p.m.'), answer: 'B' },
      questions: [
        { n: 11, prompt: 'The class takes…', options: abc('half an hour', 'three quarters of an hour', 'an hour'), answer: 'B' },
        { n: 12, prompt: "What doesn't Frank need to take?", options: abc('trainers', 'sports clothes', 'drink'), answer: 'A' },
        { n: 13, prompt: 'The teacher needs to know…', options: abc('if people are beginners', 'how fit people are', "people's age"), answer: 'A' },
        { n: 14, prompt: 'The normal price of classes is…', options: abc('£5', '£6', '£8'), answer: 'B' },
        { n: 15, prompt: 'They will meet…', options: abc("at Jessica's house", 'at college', 'in the café'), answer: 'C' },
      ],
      note: '45 phút (3/4 tiếng) – không cần mang trainers – nói là người mới bắt đầu – giá 6 – hẹn gặp ở quán cafe.',
    },
  },
  {
    id: 'conv-2', group: 'conv', title: 'Hội thoại · Đề 2',
    images: ['pages/page_28.png', 'pages/page_29.png', 'pages/page_30.png'],
    match: {
      intro: 'Emily & John nói về hoạt động cuối tuần trước. Mỗi người làm gì? (Nối A–H)',
      bank: [
        { key: 'A', label: 'basketball (bóng rổ)' },
        { key: 'B', label: 'cycling (đạp xe)' },
        { key: 'C', label: 'fishing (câu cá)' },
        { key: 'D', label: 'football (đá bóng)' },
        { key: 'E', label: 'skateboarding (trượt ván)' },
        { key: 'F', label: 'swimming (bơi)' },
        { key: 'G', label: 'table-tennis (bóng bàn)' },
        { key: 'H', label: 'tennis (quần vợt)' },
      ],
      example: { name: 'John', answer: 'C' },
      pairs: [
        { n: 6, name: 'Pete', answer: 'B' },
        { n: 7, name: 'Emily', answer: 'H' },
        { n: 8, name: 'Jenny', answer: 'E' },
        { n: 9, name: 'Joe', answer: 'D' },
        { n: 10, name: 'Andy', answer: 'G' },
      ],
      note: 'Đạp xe – chơi tennis – trượt ván – đá bóng – bóng bàn.',
    },
    mcq: {
      intro: 'Suzy nói với bạn về một cửa hàng mới (new shop).',
      example: { n: 0, prompt: 'When did the new shop open?', options: abc('today', 'yesterday', 'last week'), answer: 'C' },
      questions: [
        { n: 11, prompt: 'Where is the new shop?', options: abc('near the college', 'outside the town centre', "opposite the newsagent's"), answer: 'C' },
        { n: 12, prompt: 'In the shop you cannot buy…', options: abc('clothes', 'bags', 'boots'), answer: 'B' },
        { n: 13, prompt: 'What time does the shop close on a Thursday?', options: abc('6 p.m.', '8 p.m.', '10 p.m.'), answer: 'B' },
        { n: 14, prompt: 'What days does the shop open?', options: abc('Tuesday to Sunday', 'every day', 'Monday to Friday'), answer: 'A' },
        { n: 15, prompt: "What should Suzy's friend do if she wants a job?", options: abc('phone the manager', 'go to the shop', 'write a letter'), answer: 'B' },
      ],
      note: 'Đối diện sạp báo – không mua được cặp sách – đóng cửa 8h – mở T3→CN – muốn xin việc thì đến thẳng cửa hàng.',
    },
  },
  {
    id: 'conv-3', group: 'conv', title: 'Hội thoại · Đề 3',
    images: ['pages/page_31.png', 'pages/page_32.png', 'pages/page_33.png'],
    match: {
      intro: 'Sally & bố nói về khoá học máy tính. Mỗi ngày còn trống bao nhiêu chỗ? (Nối A–H)',
      bank: [
        { key: 'A', label: 'none (0)' },
        { key: 'B', label: 'one (1)' },
        { key: 'C', label: 'two (2)' },
        { key: 'D', label: 'three (3)' },
        { key: 'E', label: 'four (4)' },
        { key: 'F', label: 'five (5)' },
        { key: 'G', label: 'six (6)' },
        { key: 'H', label: 'seven (7)' },
      ],
      example: { name: 'Monday', answer: 'D' },
      pairs: [
        { n: 6, name: 'Tuesday', answer: 'A' },
        { n: 7, name: 'Wednesday', answer: 'F' },
        { n: 8, name: 'Thursday', answer: 'B' },
        { n: 9, name: 'Friday', answer: 'C' },
        { n: 10, name: 'Saturday', answer: 'E' },
      ],
      note: 'Số chỗ trống: 0 – 5 – 1 – 2 – 4.',
    },
    mcq: {
      intro: 'Stephen nói với Jenny về cách nấu súp (soup).',
      example: { n: 0, prompt: 'To make the soup, Jenny uses…', options: abc('roast tomatoes', 'fresh tomatoes', 'a can of tomatoes'), answer: 'C' },
      questions: [
        { n: 11, prompt: 'Jenny was shown how to make the soup by…', options: abc('her aunt', 'her friend', 'her mother'), answer: 'C' },
        { n: 12, prompt: 'How has Jenny improved the soup?', options: abc('She adds less water', 'She makes it thinner', 'She uses bigger cups'), answer: 'A' },
        { n: 13, prompt: 'To make it really good, Jenny adds…', options: abc('milk', 'butter', 'cream'), answer: 'A' },
        { n: 14, prompt: 'How long does the soup take to make?', options: abc('about 5 minutes', 'about 10 minutes', 'about 20 minutes'), answer: 'C' },
        { n: 15, prompt: 'What will they eat next?', options: abc('fruit cake', 'pasta', 'lemon chicken'), answer: 'B' },
      ],
      note: 'Mẹ dạy – giảm nước – thêm sữa – nấu 20 phút – ăn pasta.',
    },
  },
  {
    id: 'conv-4', group: 'conv', title: 'Hội thoại · Đề 4',
    images: ['pages/page_34.png', 'pages/page_35.png', 'pages/page_36.png'],
    match: {
      intro: 'Gemma kể về các nước đã đến. Cô thích nhất điều gì ở mỗi nước? (Nối A–H)',
      bank: [
        { key: 'A', label: 'animals (động vật)' },
        { key: 'B', label: 'beach (bãi biển)' },
        { key: 'C', label: 'countryside (vùng quê)' },
        { key: 'D', label: 'food (đồ ăn)' },
        { key: 'E', label: 'hotel (khách sạn)' },
        { key: 'F', label: 'shops (mua sắm)' },
        { key: 'G', label: 'sport (thể thao)' },
        { key: 'H', label: 'weather (thời tiết)' },
      ],
      example: { name: 'France', answer: 'H' },
      pairs: [
        { n: 6, name: 'Italy', answer: 'F' },
        { n: 7, name: 'Mexico', answer: 'D' },
        { n: 8, name: 'India', answer: 'C' },
        { n: 9, name: 'Australia', answer: 'A' },
        { n: 10, name: 'Canada', answer: 'E' },
      ],
      note: 'Ý: mua sắm – Mexico: đồ ăn – Ấn Độ: ngồi đất (vùng quê) – Úc: động vật – Canada: khách sạn.',
    },
    mcq: {
      intro: 'Tony nói với Lisa về cuộc thi của câu lạc bộ khoa học (science club competition).',
      example: { n: 0, prompt: 'Tony says the competition is on…', options: abc('Monday', 'Tuesday', 'Wednesday'), answer: 'C' },
      questions: [
        { n: 11, prompt: 'Which building will the competition be in?', options: abc('the school', 'the town hall', 'the university'), answer: 'C' },
        { n: 12, prompt: 'How has the team decided to get there?', options: abc('They will catch a bus', 'They will walk', 'They will go on the underground'), answer: 'A' },
        { n: 13, prompt: 'The total number of questions in the quiz will be…', options: abc('five', 'fifteen', 'twenty-five'), answer: 'C' },
        { n: 14, prompt: "Tony's favourite area of science is…", options: abc('biology', 'chemistry', 'physics'), answer: 'C' },
        { n: 15, prompt: 'Winners of the competition get…', options: abc('T-shirts', 'cinema tickets', 'a box of chocolates'), answer: 'B' },
      ],
      note: 'Đại học – đi bằng bus – 25 câu – thích vật lý – thưởng vé xem phim.',
    },
  },
]

// Gán ảnh cắt riêng cho từng câu Part 1 dạng PET (file trong public/q/).
petTests.forEach((t) => {
  t.picture?.questions.forEach((q) => {
    q.img = `q/${t.id}_${q.n}.png`
  })
})

// Tạo đường dẫn ảnh "sạch" (đã xoá nét bút) cho mọi đề; gán ảnh cho Part 2 & 3.
;[...petTests, ...ketTests, ...convTests].forEach((t) => {
  t.cleanImages = t.images.map((p) => p.replace('pages/', 'pages_clean/'))
  if (t.match && t.mcq) {
    t.match.img = t.cleanImages[0]
    t.mcq.imgs = t.cleanImages.slice(1)
  }
})

export const sections: Section[] = [
  { group: 'pet', title: 'Part 1 · Tranh (PET)', subtitle: '12 đề × 5 câu — nghe & chọn tranh', tests: petTests },
  { group: 'ket', title: 'Part 1 · Tranh (KET)', subtitle: '4 đề × 7 câu — nghe & chọn tranh', tests: ketTests },
  { group: 'conv', title: 'Part 2 & 3 · Hội thoại', subtitle: '4 đề — nối (Part 2) + trắc nghiệm (Part 3)', tests: convTests },
]

export const allTests: Test[] = [...petTests, ...ketTests, ...convTests]

/** Tổng số câu hỏi có chấm điểm trong một đề. */
export function countQuestions(t: Test): number {
  let c = 0
  if (t.picture) c += t.picture.questions.length
  if (t.match) c += t.match.pairs.length
  if (t.mcq) c += t.mcq.questions.length
  return c
}
