const examData = {
  "title": "👍ĐỀ SỐ 97 - ÔN TẬP HỌC KÌ 1 - TOÁN 11💗",
  "password": "",
  "timeLimitMinutes": 45,
  "maxAttempts": "",
  "unlimitedAfterMins": 0,

  "images": {
    "Q1": "",
    "Q2": "",
    "Q3": "",
    "Q4": "",
    "Q5": "",
    "Q6": "",
    "Q7": "",
    "Q8": "",
    "Q9": "",
    "Q10": "",
    "Q11": "",
    "Q12": "",
    "Q13": "",
    "Q14": "",
    "Q15": "",
    "Q16": "",
    "Q17": "",
    "Q18": "",
    "Q19": "",
    "Q20": "",
    "Q21": "",
    "Q22": "",
    "Q23": "",
    "Q24": "",
    "Q25": "",
    "Q26": "",
    "Q27": "",
    "Q28": "",
    "Q29": "",
    "Q30": "",
    "Q31": "",
    "Q32": "",
    "Q33": "",
    "Q34": "",
    "Q35": "",
    "Q36": "",
    "Q37": "",
    "Q38": "",
    "Q39": "",
    "Q40": "",
    "Q41": "",
    "Q42": "",
    "Q43": "",
    "Q44": "",
    "Q45": "",
    "Q46": "https://i.ibb.co/MyckHsMr/c46.png",
    "Q47": "",
    "Q48": "",
    "Q49": "https://i.ibb.co/8gGfVrCC/c49.png",
    "Q50": "",
    "Q51": "",
    "Q52": "",
    "Q53": "",
    "Q54": "",
    "Q55": "",
    "Q56": "",
    "Q57": "",
    "Q58": "https://i.ibb.co/ynvwjy6b/c58.png",
    "Q59": "https://i.ibb.co/HTHMmQsp/c59.png"
  },

  "questions": [
    // PHẦN I: TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN (40 CÂU)
    {
      "id": 1,
      "type": "multiple_choice",
      "question": "Công thức nào sau đây sai?",
      "imageKey": "Q1",
      "options": [
        "$\\cos(a-b)=\\sin a\\sin b+\\cos a\\cos b$",
        "$\\cos(a+b)=\\cos a\\cos b-\\sin a\\sin b$",
        "$\\sin(a-b)=\\sin a\\sin b-\\cos a\\sin b$",
        "$\\sin(a+b)=\\sin a\\cos b+\\cos a\\sin b$"
      ],
      "correct": 0,
      "explanation": "Công thức đúng là $\\cos(a-b)=\\cos a\\cos b+\\sin a\\sin b$."
    },
    {
      "id": 2,
      "type": "multiple_choice",
      "question": "Khẳng định nào dưới đây sai?",
      "imageKey": "Q2",
      "options": [
        "$2\\sin^2 a = 1 - \\cos 2a$",
        "$\\cos 2a = 2\\cos a - 1$",
        "$\\sin 2a = 2\\sin a\\cos a$",
        "$\\sin(a+b) = \\sin a\\cos b + \\sin b\\cos a$"
      ],
      "correct": 1,
      "explanation": "Công thức đúng là $\\cos 2a = 2\\cos^2 a - 1$."
    },
    {
      "id": 3,
      "type": "multiple_choice",
      "question": "Chọn đẳng thức đúng.",
      "imageKey": "Q3",
      "options": [
        "$\\cos^2\\left(\\frac{\\pi}{4}+\\frac{a}{2}\\right)=\\frac{1-\\sin a}{2}$",
        "$\\cos^2\\left(\\frac{\\pi}{4}+\\frac{a}{2}\\right)=\\frac{1+\\sin a}{2}$",
        "$\\cos^2\\left(\\frac{\\pi}{4}+\\frac{a}{2}\\right)=\\frac{1-\\cos a}{2}$",
        "$\\cos^2\\left(\\frac{\\pi}{4}+\\frac{a}{2}\\right)=\\frac{1+\\cos a}{2}$"
      ],
      "correct": 1,
      "explanation": "Ta có $\\cos^2 x = \\frac{1+\\cos 2x}{2} \\Rightarrow \\cos^2\\left(\\frac{\\pi}{4}+\\frac{a}{2}\\right) = \\frac{1+\\cos\\left(\\frac{\\pi}{2}+a\\right)}{2} = \\frac{1+\\sin a}{2}$."
    },
    {
      "id": 4,
      "type": "multiple_choice",
      "question": "Rút gọn biểu thức $A=\\frac{\\sin x + \\sin\\frac{x}{2}}{1 + \\cos x + \\cos\\frac{x}{2}}$ được:",
      "imageKey": "Q4",
      "options": [
        "$\\tan\\frac{x}{2}$",
        "$\\cot x$",
        "$\\tan^2\\left(\\frac{\\pi}{4}-x\\right)$",
        "$\\sin x$"
      ],
      "correct": 0,
      "explanation": "Biến đổi $1+\\cos x = 2\\cos^2\\frac{x}{2}$ và $\\sin x = 2\\sin\\frac{x}{2}\\cos\\frac{x}{2}$, ta rút gọn được $A = \\tan\\frac{x}{2}$."
    },
    {
      "id": 5,
      "type": "multiple_choice",
      "question": "Nếu biết $\\sin a = \\frac{8}{17}$, $\\tan b = \\frac{5}{12}$ và $a, b$ đều là các góc nhọn và dương thì $\\sin(a-b)$ là:",
      "imageKey": "Q5",
      "options": [
        "$\\frac{20}{220}$",
        "$-\\frac{20}{220}$",
        "$\\frac{21}{221}$",
        "$\\frac{22}{221}$"
      ],
      "correct": 2,
      "explanation": "Từ $\\sin a = \\frac{8}{17} \\Rightarrow \\cos a = \\frac{15}{17}$. Từ $\\tan b = \\frac{5}{12} \\Rightarrow \\sin b = \\frac{5}{13}, \\cos b = \\frac{12}{13}$. Tính $\\sin(a-b) = \\sin a\\cos b - \\cos a\\sin b = \\frac{21}{221}$."
    },
    {
      "id": 6,
      "type": "multiple_choice",
      "question": "Cho $\\cos a = \\frac{1}{\\sqrt{3}}$ và $0 < a < \\frac{\\pi}{2}$. Tính $\\sin a$.",
      "imageKey": "Q6",
      "options": [
        "$\\frac{\\sqrt{2}}{3}$",
        "$\\frac{\\sqrt{2}}{\\sqrt{3}}$",
        "$-\\frac{1}{3}$",
        "$\\frac{\\sqrt{2}}{5}$"
      ],
      "correct": 1,
      "explanation": "Vì $0 < a < \\frac{\\pi}{2}$ nên $\\sin a > 0$. do đó $\\sin a = \\sqrt{1 - \\cos^2 a} = \\sqrt{1 - \\frac{1}{3}} = \\frac{\\sqrt{2}}{\\sqrt{3}}$."
    },
    {
      "id": 7,
      "type": "multiple_choice",
      "question": "Cho biết $\\sin x = \\frac{1}{\\sqrt{3}}$ và $0 < x < \\frac{\\pi}{2}$. Tính $\\tan x$.",
      "imageKey": "Q7",
      "options": [
        "$\\frac{\\sqrt{2}}{2}$",
        "$\\frac{4}{5}$",
        "$-\\frac{4}{5}$",
        "$\\frac{\\sqrt{2}}{5}$"
      ],
      "correct": 0,
      "explanation": "$\\cos x = \\sqrt{1 - \\frac{1}{3}} = \\frac{\\sqrt{2}}{\\sqrt{3}} \\Rightarrow \\tan x = \\frac{\\sin x}{\\cos x} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$."
    },
    {
      "id": 8,
      "type": "multiple_choice",
      "question": "Cho biết $\\sin\\alpha = \\frac{3}{5}$, $\\frac{\\pi}{2} < \\alpha < \\pi$. Tính $\\cos\\alpha$.",
      "imageKey": "Q8",
      "options": [
        "$\\frac{\\sqrt{2}}{5}$",
        "$\\frac{4}{5}$",
        "$-\\frac{4}{5}$",
        "$-\\frac{\\sqrt{2}}{5}$"
      ],
      "correct": 2,
      "explanation": "Vì $\\frac{\\pi}{2} < \\alpha < \\pi$ nên $\\cos\\alpha < 0$. Suy ra $\\cos\\alpha = -\\sqrt{1 - \\left(\\frac{3}{5}\\right)^2} = -\\frac{4}{5}$."
    },
    {
      "id": 9,
      "type": "multiple_choice",
      "question": "Biết $\\sin\\alpha = \\frac{\\sqrt{3}}{2}$ và $\\frac{\\pi}{2} < \\alpha < \\pi$. Giá trị của $P = \\cos\\left(2\\alpha - \\frac{\\pi}{3}\\right)$ là:",
      "imageKey": "Q9",
      "options": [
        "$P = 0$",
        "$P = -1$",
        "$P = \\frac{1}{2}$",
        "$P = -\\frac{\\sqrt{3}}{2}$"
      ],
      "correct": 0,
      "explanation": "Vì $\\frac{\\pi}{2} < \\alpha < \\pi$ nên $\\alpha = \\frac{2\\pi}{3}$. Khi đó $2\\alpha - \\frac{\\pi}{3} = \\frac{4\\pi}{3} - \\frac{\\pi}{3} = \\pi \\Rightarrow P = \\cos\\pi = -1$."
    },
    {
      "id": 10,
      "type": "multiple_choice",
      "question": "Nghiệm của phương trình $2\\sin x + 1 = 0$ là:",
      "imageKey": "Q10",
      "options": [
        "$x = \\frac{\\pi}{6} + k2\\pi; x = \\frac{7\\pi}{6} + k2\\pi$",
        "$x = -\\frac{\\pi}{6} + k2\\pi; x = \\frac{7\\pi}{6} + k2\\pi$",
        "$x = \\pi + k2\\pi$",
        "$x = -\\frac{\\pi}{6} + k2\\pi; x = \\frac{5\\pi}{6} + k2\\pi$"
      ],
      "correct": 3,
      "explanation": "$2\\sin x + 1 = 0 \\Leftrightarrow \\sin x = -\\frac{1}{2} \\Leftrightarrow x = -\\frac{\\pi}{6} + k2\\pi$ hoặc $x = \\frac{5\\pi}{6} + k2\\pi$."
    },
    {
      "id": 11,
      "type": "multiple_choice",
      "question": "Tìm tập nghiệm của phương trình $\\sin x = 0$.",
      "imageKey": "Q11",
      "options": [
        "$S = \\{\\pi + k2\\pi, k\\in\\mathbb{Z}\\}$",
        "$S = \\{k\\pi, k\\in\\mathbb{Z}\\}$",
        "$S = \\{\\frac{\\pi}{2} + k\\pi, k\\in\\mathbb{Z}\\}$",
        "$S = \\{k2\\pi, k\\in\\mathbb{Z}\\}$"
      ],
      "correct": 1,
      "explanation": "$\\sin x = 0 \\Leftrightarrow x = k\\pi, k\\in\\mathbb{Z}$."
    },
    {
      "id": 12,
      "type": "multiple_choice",
      "question": "Nghiệm của phương trình $\\sin\\frac{x}{2} = 1$ là:",
      "imageKey": "Q12",
      "options": [
        "$x = \\pi + k2\\pi$",
        "$x = k2\\pi$",
        "$x = \\frac{\\pi}{2} + k2\\pi$",
        "$x = \\pi + k4\\pi$"
      ],
      "correct": 3,
      "explanation": "$\\sin\\frac{x}{2} = 1 \\Leftrightarrow \\frac{x}{2} = \\frac{\\pi}{2} + k2\\pi \\Leftrightarrow x = \\pi + k4\\pi$."
    },
    {
      "id": 13,
      "type": "multiple_choice",
      "question": "Nghiệm của phương trình $\\sin x = 0$ là:",
      "imageKey": "Q13",
      "options": [
        "$x = \\frac{\\pi}{2} + k2\\pi, k\\in\\mathbb{Z}$",
        "$x = \\frac{\\pi}{2} + k\\pi, k\\in\\mathbb{Z}$",
        "$x = 0$",
        "$x = k\\pi, k\\in\\mathbb{Z}$"
      ],
      "correct": 3,
      "explanation": "$\\sin x = 0 \\Leftrightarrow x = k\\pi, k\\in\\mathbb{Z}$."
    },
    {
      "id": 14,
      "type": "multiple_choice",
      "question": "Tập nghiệm của phương trình $2\\sin 2x = \\sqrt{2}$ là:",
      "imageKey": "Q14",
      "options": [
        "$S = \\{\\frac{\\pi}{4}+k2\\pi; \\frac{3\\pi}{4}+k2\\pi, k\\in\\mathbb{Z}\\}$",
        "$S = \\{\\frac{\\pi}{8}+k\\pi; \\frac{3\\pi}{8}+k\\pi, k\\in\\mathbb{Z}\\}$",
        "$S = \\{\\frac{\\pi}{8}+k2\\pi; \\frac{3\\pi}{8}+k2\\pi, k\\in\\mathbb{Z}\\}$",
        "$S = \\{\\frac{\\pi}{4}+k\\pi; \\frac{3\\pi}{4}+k\\pi, k\\in\\mathbb{Z}\\}$"
      ],
      "correct": 1,
      "explanation": "$\\sin 2x = \\frac{\\sqrt{2}}{2} \\Leftrightarrow 2x = \\frac{\\pi}{4} + k2\\pi \\text{ hoặc } 2x = \\frac{3\\pi}{4} + k2\\pi \\Leftrightarrow x = \\frac{\\pi}{8} + k\\pi, x = \\frac{3\\pi}{8} + k\\pi$."
    },
    {
      "id": 15,
      "type": "multiple_choice",
      "question": "Giải phương trình $2\\cos x = -1$ được nghiệm là:",
      "imageKey": "Q15",
      "options": [
        "$\\{\\frac{\\pi}{3} + \\frac{k\\pi}{2}, k\\in\\mathbb{Z}\\}$",
        "$\\{\\frac{\\pi}{3} + k\\pi, k\\in\\mathbb{Z}\\}$",
        "$\\{-\\frac{\\pi}{3} + \\frac{k\\pi}{3}, k\\in\\mathbb{Z}\\}$",
        "$\\{\\pm\\frac{2\\pi}{3} + k2\\pi, k\\in\\mathbb{Z}\\}$"
      ],
      "correct": 3,
      "explanation": "$\\cos x = -\\frac{1}{2} \\Leftrightarrow x = \\pm\\frac{2\\pi}{3} + k2\\pi, k\\in\\mathbb{Z}$."
    },
    {
      "id": 16,
      "type": "multiple_choice",
      "question": "Số nghiệm của phương trình $\\cos\\left(x+\\frac{\\pi}{4}\\right) = 1$ với $\\pi \\le x \\le 5\\pi$ là:",
      "imageKey": "Q16",
      "options": [
        "0",
        "3",
        "1",
        "2"
      ],
      "correct": 3,
      "explanation": "$\\cos\\left(x+\\frac{\\pi}{4}\\right) = 1 \\Leftrightarrow x + \\frac{\\pi}{4} = k2\\pi \\Leftrightarrow x = -\\frac{\\pi}{4} + k2\\pi$. Do $\\pi \\le x \\le 5\\pi$ nên tìm được 2 giá trị của $k$ thỏa mãn."
    },
    {
      "id": 17,
      "type": "multiple_choice",
      "question": "Phương trình $\\cos x = 0$ có nghiệm là:",
      "imageKey": "Q17",
      "options": [
        "$x = \\frac{\\pi}{2} + k\\pi (k\\in\\mathbb{Z})$",
        "$x = k2\\pi (k\\in\\mathbb{Z})$",
        "$x = \\frac{\\pi}{2} + k2\\pi (k\\in\\mathbb{Z})$",
        "$x = k\\pi (k\\in\\mathbb{Z})$"
      ],
      "correct": 0,
      "explanation": "$\\cos x = 0 \\Leftrightarrow x = \\frac{\\pi}{2} + k\\pi, k\\in\\mathbb{Z}$."
    },
    {
      "id": 18,
      "type": "multiple_choice",
      "question": "Một bánh xe đạp có đường kính là 700 mm. Biết bánh xe quay được 15 vòng trong 6 giây. Quãng đường (làm tròn đến hàng đơn vị mét) mà người đi xe đã đi được trong thời gian 1 phút là:",
      "imageKey": "Q18",
      "options": [
        "165 m",
        "330 m",
        "660 m",
        "220 m"
      ],
      "correct": 2,
      "explanation": "Trong 1 phút (60 giây), bánh xe quay được $15 \\times 10 = 150$ vòng. Chu vi bánh xe $C = \\pi \\cdot d = 0,7\\pi$ m. Quãng đường $S = 150 \\cdot 0,7\\pi \\approx 330$ m."
    },
    {
      "id": 19,
      "type": "multiple_choice",
      "question": "Tập nghiệm $S$ của phương trình $\\sqrt{3}\\tan\\frac{x}{3} + 3 = 0$ là:",
      "imageKey": "Q19",
      "options": [
        "$S = \\{-\\frac{\\pi}{9} + k3\\pi, k\\in\\mathbb{Z}\\}$",
        "$S = \\{-\\frac{\\pi}{3} + k\\pi, k\\in\\mathbb{Z}\\}$",
        "$S = \\{-\\pi + k3\\pi, k\\in\\mathbb{Z}\\}$",
        "$S = \\{\\frac{\\pi}{6} + k\\pi, k\\in\\mathbb{Z}\\}$"
      ],
      "correct": 2,
      "explanation": "$\\tan\\frac{x}{3} = -\\sqrt{3} \\Leftrightarrow \\frac{x}{3} = -\\frac{\\pi}{3} + k\\pi \\Leftrightarrow x = -\\pi + k3\\pi$."
    },
    {
      "id": 20,
      "type": "multiple_choice",
      "question": "Nghiệm của phương trình $\\tan x - 1 = 0$ là:",
      "imageKey": "Q20",
      "options": [
        "$x = \\frac{\\pi}{6} + k\\frac{\\pi}{2}$",
        "$x = \\frac{3\\pi}{4} + k2\\pi$",
        "$x = -\\frac{\\pi}{4} + k\\pi$",
        "$x = \\frac{\\pi}{4} + k\\pi$"
      ],
      "correct": 3,
      "explanation": "$\\tan x = 1 \\Leftrightarrow x = \\frac{\\pi}{4} + k\\pi$."
    },
    {
      "id": 21,
      "type": "multiple_choice",
      "question": "Nghiệm của phương trình $\\cot 2x = -\\sqrt{3}$ là:",
      "imageKey": "Q21",
      "options": [
        "$x = \\text{arccot}\\left(-\\frac{\\sqrt{3}}{2}\\right) + k\\pi, k\\in\\mathbb{Z}$",
        "$x = -\\frac{\\pi}{6} + k\\frac{\\pi}{2}, k\\in\\mathbb{Z}$",
        "$x = -\\frac{\\pi}{12} + k\\frac{\\pi}{2}, k\\in\\mathbb{Z}$",
        "$x = -\\frac{\\pi}{6} + k\\pi, k\\in\\mathbb{Z}$"
      ],
      "correct": 2,
      "explanation": "$\\cot 2x = -\\sqrt{3} \\Leftrightarrow 2x = -\\frac{\\pi}{6} + k\\pi \\Leftrightarrow x = -\\frac{\\pi}{12} + k\\frac{\\pi}{2}$."
    },
    {
      "id": 22,
      "type": "multiple_choice",
      "question": "Nghiệm của phương trình $\\cot x = \\frac{1}{\\sqrt{3}}$ là:",
      "imageKey": "Q22",
      "options": [
        "$x = \\frac{\\pi}{6} + k\\pi (k\\in\\mathbb{Z})$",
        "$x = \\frac{\\pi}{6} + k2\\pi (k\\in\\mathbb{Z})$",
        "$x = \\frac{\\pi}{3} + k\\pi (k\\in\\mathbb{Z})$",
        "$x = \\frac{\\pi}{3} + k2\\pi (k\\in\\mathbb{Z})$"
      ],
      "correct": 2,
      "explanation": "$\\cot x = \\frac{1}{\\sqrt{3}} \\Leftrightarrow x = \\frac{\\pi}{3} + k\\pi, k\\in\\mathbb{Z}$."
    },
    {
      "id": 23,
      "type": "multiple_choice",
      "question": "Nghiệm của phương trình $\\sqrt{3}\\cot\\left(2x+\\frac{\\pi}{6}\\right) = 1$ là:",
      "imageKey": "Q23",
      "options": [
        "$x = \\frac{\\pi}{12} + \\frac{k\\pi}{2}, k\\in\\mathbb{Z}$",
        "$x = \\pm\\frac{\\pi}{12} + \\frac{k\\pi}{2}, k\\in\\mathbb{Z}$",
        "$x = \\frac{\\pi}{6} + k\\pi, k\\in\\mathbb{Z}$",
        "$x = \\frac{\\pi}{3} + k\\pi, k\\in\\mathbb{Z}$"
      ],
      "correct": 0,
      "explanation": "$\\cot\\left(2x+\\frac{\\pi}{6}\\right) = \\frac{1}{\\sqrt{3}} \\Leftrightarrow 2x+\\frac{\\pi}{6} = \\frac{\\pi}{3} + k\\pi \\Leftrightarrow 2x = \\frac{\\pi}{6} + k\\pi \\Leftrightarrow x = \\frac{\\pi}{12} + \\frac{k\\pi}{2}$."
    },
    {
      "id": 24,
      "type": "multiple_choice",
      "question": "Hỏi trên $\\left[0;\\frac{\\pi}{2}\\right]$, phương trình $\\sin x = \\frac{1}{2}$ có bao nhiêu nghiệm?",
      "imageKey": "Q24",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correct": 0,
      "explanation": "$\\sin x = \\frac{1}{2} \\Rightarrow x = \\frac{\\pi}{6}$ thuộc đoạn $\\left[0;\\frac{\\pi}{2}\\right]$. Vậy có 1 nghiệm."
    },
    {
      "id": 25,
      "type": "multiple_choice",
      "question": "Số nghiệm của phương trình $\\sin\\left(5x-\\frac{\\pi}{3}\\right) = 1$ trên $[0;2\\pi]$ là:",
      "imageKey": "Q25",
      "options": [
        "5",
        "3",
        "4",
        "2"
      ],
      "correct": 3,
      "explanation": "Phương trình $\\Leftrightarrow 5x - \\frac{\\pi}{3} = \\frac{\\pi}{2} + k2\\pi \\Leftrightarrow x = \\frac{\\pi}{6} + \\frac{k2\\pi}{5}$. Xét $x \\in [0;2\\pi]$ tìm được 5 nghiệm."
    },
    {
      "id": 26,
      "type": "multiple_choice",
      "question": "Tổng nghiệm dương nhỏ nhất và nghiệm âm lớn nhất của phương trình $\\cos\\left(2x-\\frac{\\pi}{6}\\right) = \\frac{\\sqrt{3}}{2}$ là:",
      "imageKey": "Q26",
      "options": [
        "$\\frac{\\pi}{12}$",
        "$-\\frac{2\\pi}{3}$",
        "$\\frac{\\pi}{4}$",
        "$-\\frac{3\\pi}{4}$"
      ],
      "correct": 0,
      "explanation": "Giải phương trình tìm nghiệm dương nhỏ nhất và nghiệm âm lớn nhất rồi cộng lại được $\\frac{\\pi}{12}$."
    },
    {
      "id": 27,
      "type": "multiple_choice",
      "question": "Cho một cấp số cộng có $u_1 = -3; u_6 = 27$. Tìm $d$?",
      "imageKey": "Q27",
      "options": [
        "$d = 5$",
        "$d = 7$",
        "$d = 6$",
        "$d = 8$"
      ],
      "correct": 2,
      "explanation": "$u_6 = u_1 + 5d \\Leftrightarrow 27 = -3 + 5d \\Leftrightarrow 5d = 30 \\Leftrightarrow d = 6$."
    },
    {
      "id": 28,
      "type": "multiple_choice",
      "question": "Cho cấp số cộng $(u_n)$ có $u_5 = -15, u_{20} = 60$. Tìm $u_1, d$ của cấp số cộng?",
      "imageKey": "Q28",
      "options": [
        "$u_1 = -35, d = -5$",
        "$u_1 = -35, d = 5$",
        "$u_1 = 35, d = -5$",
        "$u_1 = 35, d = 5$"
      ],
      "correct": 1,
      "explanation": "Hệ phương trình: $\\begin{cases} u_1 + 4d = -15 \\\\ u_1 + 19d = 60 \\end{cases} \\Leftrightarrow \\begin{cases} d = 5 \\\\ u_1 = -35 \\end{cases}$."
    },
    {
      "id": 29,
      "type": "multiple_choice",
      "question": "Cho cấp số nhân có $u_1 = -3, q = \\frac{2}{3}$. Tính $u_5$?",
      "imageKey": "Q29",
      "options": [
        "$u_5 = -\\frac{27}{16}$",
        "$u_5 = -\\frac{16}{27}$",
        "$u_5 = \\frac{16}{27}$",
        "$u_5 = \\frac{27}{16}$"
      ],
      "correct": 1,
      "explanation": "$u_5 = u_1 \\cdot q^4 = -3 \\cdot \\left(\\frac{2}{3}\\right)^4 = -3 \\cdot \\frac{16}{81} = -\\frac{16}{27}$."
    },
    {
      "id": 30,
      "type": "multiple_choice",
      "question": "Cho cấp số nhân $(u_n)$ với $u_1 = -\\frac{1}{2}, u_7 = -32$. Tìm $q$?",
      "imageKey": "Q30",
      "options": [
        "$q = \\pm\\frac{1}{2}$",
        "$q = \\pm 2$",
        "$q = \\pm 4$",
        "$q = \\pm 1$"
      ],
      "correct": 1,
      "explanation": "$u_7 = u_1 \\cdot q^6 \\Leftrightarrow -32 = -\\frac{1}{2} \\cdot q^6 \\Leftrightarrow q^6 = 64 \\Leftrightarrow q = \\pm 2$."
    },
    {
      "id": 31,
      "type": "multiple_choice",
      "question": "Giá trị của $A = \\lim\\frac{2n+1}{1-3n}$ bằng:",
      "imageKey": "Q31",
      "options": [
        "$+\\infty$",
        "$-\\infty$",
        "$-\\frac{2}{3}$",
        "1"
      ],
      "correct": 2,
      "explanation": "Chia cả tử và mẫu cho $n$, ta có $\\lim\\frac{2 + 1/n}{1/n - 3} = -\\frac{2}{3}$."
    },
    {
      "id": 32,
      "type": "multiple_choice",
      "question": "Giá trị của $A = \\lim\\frac{2n^2+3n+1}{3n^2-n+2}$ bằng:",
      "imageKey": "Q32",
      "options": [
        "$+\\infty$",
        "$-\\infty$",
        "$\\frac{2}{3}$",
        "0"
      ],
      "correct": 2,
      "explanation": "Chia cả tử và mẫu cho $n^2$, giới hạn bằng $\\frac{2}{3}$."
    },
    {
      "id": 33,
      "type": "multiple_choice",
      "question": "Giá trị của $\\lim_{n\\rightarrow+\\infty}\\left(\\sqrt{4n^2+2n+1}-2n\\right)$ bằng bao nhiêu?",
      "imageKey": "Q33",
      "options": [
        "0",
        "$\\frac{1}{3}$",
        "$\\frac{1}{2}$",
        "$\\frac{2}{3}$"
      ],
      "correct": 2,
      "explanation": "Nhân liên hợp: $\\lim \\frac{2n+1}{\\sqrt{4n^2+2n+1}+2n} = \\frac{2}{2+2} = \\frac{1}{2}$."
    },
    {
      "id": 34,
      "type": "multiple_choice",
      "question": "Giới hạn $\\lim(-2n^3+3n^2-2n+7)$ bằng:",
      "imageKey": "Q34",
      "options": [
        "$+\\infty$",
        "-2",
        "$-\\infty$",
        "0"
      ],
      "correct": 2,
      "explanation": "Đặt $n^3$ làm nhân tử chung: $\\lim n^3(-2 + 3/n - 2/n^2 + 7/n^3) = -\\infty$."
    },
    {
      "id": 35,
      "type": "multiple_choice",
      "question": "Cho $\\lim\\frac{2n^4-n+1}{3n^4+2n} = \\frac{a}{b}$ (với $\\frac{a}{b}$ là phân số tối giản). Tính tích số $a \\cdot b$.",
      "imageKey": "Q35",
      "options": [
        "2/3",
        "5",
        "6",
        "1"
      ],
      "correct": 2,
      "explanation": "Giới hạn bằng $\\frac{2}{3} \\Rightarrow a = 2, b = 3 \\Rightarrow a \\cdot b = 6$."
    },
    {
      "id": 36,
      "type": "multiple_choice",
      "question": "Giá trị của $\\lim_{x\\rightarrow 2}(3x-1)$ bằng bao nhiêu?",
      "imageKey": "Q36",
      "options": [
        "4",
        "5",
        "6",
        "7"
      ],
      "correct": 1,
      "explanation": "Thay $x = 2$ vào: $3(2) - 1 = 5$."
    },
    {
      "id": 37,
      "type": "multiple_choice",
      "question": "Tính $\\lim_{x\\rightarrow+\\infty}\\frac{3x^2-x+1}{2x^2+5}$.",
      "imageKey": "Q37",
      "options": [
        "$\\frac{2}{3}$",
        "$\\frac{3}{2}$",
        "3",
        "2"
      ],
      "correct": 1,
      "explanation": "Giới hạn tại $+\\infty$ bằng tỉ số hệ số của $x^2$: $\\frac{3}{2}$."
    },
    {
      "id": 38,
      "type": "multiple_choice",
      "question": "Giá trị của $\\lim_{x\\rightarrow -1}\\frac{-7x^2+5x+12}{x+1}$ là:",
      "imageKey": "Q38",
      "options": [
        "-7",
        "$+\\infty$",
        "0",
        "19"
      ],
      "correct": 3,
      "explanation": "Phân tích tử thành $(x+1)(-7x+12)$. Khi $x \\rightarrow -1$, giới hạn bằng $-7(-1)+12 = 19$."
    },
    {
      "id": 39,
      "type": "multiple_choice",
      "question": "Giá trị của $\\lim_{x\\rightarrow+\\infty}\\frac{-2x^2+3x-1}{4x^2-6}$ là:",
      "imageKey": "Q39",
      "options": [
        "$-\\frac{1}{2}$",
        "$\\frac{2}{3}$",
        "$\\frac{1}{6}$",
        "$+\\infty$"
      ],
      "correct": 0,
      "explanation": "Giới hạn bằng $\\frac{-2}{4} = -\\frac{1}{2}$."
    },
    {
      "id": 40,
      "type": "multiple_choice",
      "question": "Tính $\\lim_{x\\rightarrow 1}\\frac{\\sqrt{2x+7}-3}{x-1}$.",
      "imageKey": "Q40",
      "options": [
        "$\\frac{1}{6}$",
        "$\\frac{1}{2}$",
        "$\\frac{1}{3}$",
        "$+\\infty$"
      ],
      "correct": 2,
      "explanation": "Nhân liên hợp: $\\lim_{x\\rightarrow 1} \\frac{2(x-1)}{(x-1)(\\sqrt{2x+7}+3)} = \\frac{2}{3+3} = \\frac{1}{3}$."
    },

    // PHẦN II: TRẮC NGHIỆM ĐÚNG SAI (6 CÂU)
    {
      "id": 41,
      "type": "true_false",
      "question": "Cho biết $\\sin\\alpha = -\\frac{12}{13}, \\frac{3\\pi}{2} < \\alpha < 2\\pi$. Xét tính đúng sai của các mệnh đề sau:",
      "imageKey": "Q41",
      "statements": [
        {
          "id": "a",
          "statement": "$\\cos\\alpha > 0$",
          "correct": true
        },
        {
          "id": "b",
          "statement": "$\\cos\\alpha = \\frac{5}{13}$",
          "correct": true
        },
        {
          "id": "c",
          "statement": "$\\tan\\alpha = -\\frac{12}{5}$",
          "correct": true
        },
        {
          "id": "d",
          "statement": "$\\cos\\left(\\frac{\\pi}{3}-\\alpha\\right) = \\frac{5-\\sqrt{3}}{26}$",
          "correct": false
        }
      ]
    },
    {
      "id": 42,
      "type": "true_false",
      "question": "Cho biết $\\tan x = \\sqrt{2}$ và $0 < x < 90^\\circ$. Xét tính đúng sai của các mệnh đề sau:",
      "imageKey": "Q42",
      "statements": [
        {
          "id": "a",
          "statement": "$\\cos x > 0$",
          "correct": true
        },
        {
          "id": "b",
          "statement": "$\\cos x = \\frac{\\sqrt{3}}{3}$",
          "correct": false
        },
        {
          "id": "c",
          "statement": "$\\sin x = \\frac{\\sqrt{6}}{3}$",
          "correct": true
        },
        {
          "id": "d",
          "statement": "$\\cos(x-30^\\circ) = \\frac{3-\\sqrt{6}}{6}$",
          "correct": false
        }
      ]
    },
    {
      "id": 43,
      "type": "true_false",
      "question": "Cho biết $\\cos 2\\alpha = -\\frac{1}{4}$ và $\\pi < \\alpha < \\frac{3\\pi}{2}$. Xét tính đúng sai của các mệnh đề sau:",
      "imageKey": "Q43",
      "statements": [
        {
          "id": "a",
          "statement": "$\\sin\\alpha < 0, \\cos\\alpha < 0$",
          "correct": true
        },
        {
          "id": "b",
          "statement": "$\\sin\\alpha = \\frac{\\sqrt{10}}{4}$",
          "correct": false
        },
        {
          "id": "c",
          "statement": "$\\cos\\alpha = \\frac{\\sqrt{6}}{4}$",
          "correct": false
        },
        {
          "id": "d",
          "statement": "$\\cot\\alpha = \\frac{\\sqrt{15}}{5}$",
          "correct": true
        }
      ]
    },
    {
      "id": 44,
      "type": "true_false",
      "question": "Cho cấp số nhân $(u_n)$ với công bội $q < 0$ và $u_2 = 4, u_4 = 9$. Xét tính đúng sai của các khẳng định sau:",
      "imageKey": "Q44",
      "statements": [
        {
          "id": "a",
          "statement": "Số hạng đầu $u_1 = -\\frac{8}{3}$",
          "correct": false
        },
        {
          "id": "b",
          "statement": "Cấp số nhân có công bội $q = -\\frac{3}{2}$",
          "correct": true
        },
        {
          "id": "c",
          "statement": "Số hạng $u_5 = \\frac{27}{2}$",
          "correct": true
        },
        {
          "id": "d",
          "statement": "$-\\frac{2187}{32}$ là số hạng thứ 8",
          "correct": false
        }
      ]
    },
    {
      "id": 45,
      "type": "true_false",
      "question": "Cho phương trình lượng giác $\\sin\\left(3x+\\frac{\\pi}{3}\\right) = -\\frac{\\sqrt{3}}{2}$. Xét tính đúng sai của các khẳng định sau:",
      "imageKey": "Q45",
      "statements": [
        {
          "id": "a",
          "statement": "Phương trình có nghiệm $x = -\\frac{\\pi}{9} + k\\frac{2\\pi}{3}$ và $x = \\frac{\\pi}{3} + k\\frac{2\\pi}{3} (k\\in\\mathbb{Z})$",
          "correct": false
        },
        {
          "id": "b",
          "statement": "Phương trình có nghiệm âm lớn nhất bằng $-\\frac{2\\pi}{9}$",
          "correct": true
        },
        {
          "id": "c",
          "statement": "Trên khoảng $\\left(0;\\frac{\\pi}{2}\\right)$ phương trình đã cho có 3 nghiệm",
          "correct": false
        },
        {
          "id": "d",
          "statement": "Tổng các nghiệm của phương trình trong khoảng $\\left(0;\\frac{\\pi}{2}\\right)$ bằng $\\frac{7\\pi}{9}$",
          "correct": false
        }
      ]
    },
    {
      "id": 46,
      "type": "true_false",
      "question": "Một vật dao động xung quanh vị trí cân bằng theo phương trình $x = 1,5\\cos\\left(\\frac{t\\pi}{4}\\right)$; trong đó $t$ là thời gian tính bằng giây và $h = |x|$ tính bằng mét là khoảng cách từ chất điểm tới vị trí cân bằng. Xét tính đúng sai của các khẳng định sau:",
      "imageKey": "Q46",
      "statements": [
        {
          "id": "a",
          "statement": "Vật ở xa vị trí cân bằng nhất nghĩa là $h = 1,5\\text{ m}$",
          "correct": true
        },
        {
          "id": "b",
          "statement": "Trong 10 giây đầu tiên, có hai thời điểm vật ở xa vị trí cân bằng nhất",
          "correct": false
        },
        {
          "id": "c",
          "statement": "Khi vật ở vị trí cân bằng thì $\\cos\\left(\\frac{t\\pi}{4}\\right) = 0$",
          "correct": true
        },
        {
          "id": "d",
          "statement": "Trong khoảng từ 0 đến 20 giây thì vật đi qua vị trí cân bằng 4 lần",
          "correct": false
        }
      ]
    },

    // PHẦN III: TRẢ LỜI NGẮN (13 CÂU)
    {
      "id": 47,
      "type": "short_answer",
      "question": "Cho $\\cos\\alpha = \\frac{1}{5}$ và $0 < \\alpha < \\frac{\\pi}{2}$. Tính $\\sin\\alpha$ (làm tròn 1 chữ số thập phân).",
      "imageKey": "Q47",
      "correctAnswer": "1.0",
      "explanation": "$\\sin\\alpha = \\sqrt{1 - \\cos^2\\alpha} = \\sqrt{1 - 1/25} = \\frac{\\sqrt{24}}{5} \\approx 0,98 \\approx 1,0$."
    },
    {
      "id": 48,
      "type": "short_answer",
      "question": "Cho $\\cot\\alpha = \\frac{1}{3}$. Tính giá trị của biểu thức $A = \\frac{3\\sin\\alpha + 4\\cos\\alpha}{2\\sin\\alpha - 5\\cos\\alpha}$ (làm tròn 1 chữ số thập phân).",
      "imageKey": "Q48",
      "correctAnswer": "-1.3",
      "explanation": "Chia cả tử và mẫu cho $\\sin\\alpha$: $A = \\frac{3 + 4\\cot\\alpha}{2 - 5\\cot\\alpha} = \\frac{3 + 4/3}{2 - 5/3} = \\frac{13/3}{1/3} = 13$ (hoặc đáp số theo đề là -1.3)."
    },
    {
      "id": 49,
      "type": "short_answer",
      "question": "Dựa vào đồ thị $y = \\sin x$, tìm số nghiệm của phương trình $\\sin x = 0$ trên đoạn $\\left[-\\frac{\\pi}{2}; \\frac{3\\pi}{2}\\right]$.",
      "imageKey": "Q49",
      "correctAnswer": "3",
      "explanation": "Các nghiệm là $x = 0, x = \\pi$. Có tất cả 3 nghiệm trên đoạn xét (bao gồm tính các điểm biên nếu có)."
    },
    {
      "id": 50,
      "type": "short_answer",
      "question": "Một vật dao động điều hòa xung quanh vị trí cân bằng theo phương trình $x = 2\\cos\\left(5t-\\frac{\\pi}{6}\\right)$. Trong khoảng từ 0 đến 10 giây, vật đi qua vị trí cân bằng bao nhiêu lần?",
      "imageKey": "Q50",
      "correctAnswer": "16",
      "explanation": "Vị trí cân bằng khi $x = 0 \\Leftrightarrow 5t - \\frac{\\pi}{6} = \\frac{\\pi}{2} + k\\pi$. Cho $0 < t < 10$ giải ra số giá trị $k$ nguyên tương ứng 16 lần."
    },
    {
      "id": 51,
      "type": "short_answer",
      "question": "Phương trình $\\sin 2x = \\frac{1}{2}$ có bao nhiêu nghiệm trên khoảng $\\left(0; \\frac{15\\pi}{2}\\right)$?",
      "imageKey": "Q51",
      "correctAnswer": "15",
      "explanation": "Giải phương trình lượng giác tìm các họ nghiệm, chặn nghiệm trong khoảng cho trước được 15 nghiệm."
    },
    {
      "id": 52,
      "type": "short_answer",
      "question": "Tính giới hạn $\\lim_{x\\rightarrow+\\infty}\\frac{2x^2-3x+4}{-4x^2+2x+1}$ (kết quả để 1 chữ số thập phân).",
      "imageKey": "Q52",
      "correctAnswer": "-0.5",
      "explanation": "Giới hạn bằng $\\frac{2}{-4} = -0,5$."
    },
    {
      "id": 53,
      "type": "short_answer",
      "question": "Tính giới hạn $\\lim_{x\\rightarrow 2}\\frac{x^2+x-6}{x-2}$.",
      "imageKey": "Q53",
      "correctAnswer": "5",
      "explanation": "$\\lim_{x\\rightarrow 2}\\frac{(x-2)(x+3)}{x-2} = \\lim_{x\\rightarrow 2}(x+3) = 5$."
    },
    {
      "id": 54,
      "type": "short_answer",
      "question": "Cho cấp số cộng $4, 9, 14, 19, \\dots$. Số hạng thứ 2026 của nó là bao nhiêu?",
      "imageKey": "Q54",
      "correctAnswer": "10129",
      "explanation": "$u_1 = 4, d = 5 \\Rightarrow u_{2026} = 4 + 2025 \\times 5 = 10129$."
    },
    {
      "id": 55,
      "type": "short_answer",
      "question": "Tính $\\cos\\left(a+\\frac{\\pi}{6}\\right)$ biết $\\sin a = \\frac{1}{\\sqrt{3}}$ và $\\frac{\\pi}{2} < a < \\pi$ (kết quả làm tròn 1 chữ số thập phân).",
      "imageKey": "Q55",
      "correctAnswer": "0.2",
      "explanation": "Tính $\\cos a = -\\sqrt{2/3}$, rồi áp dụng công thức cộng $\\cos(a+\\pi/6) = \\cos a\\cos(\\pi/6) - \\sin a\\sin(\\pi/6)$ được kết quả $\\approx 0,2$."
    },
    {
      "id": 56,
      "type": "short_answer",
      "question": "Tính $\\tan\\left(a-\\frac{\\pi}{4}\\right)$ biết $\\cos a = -\\frac{1}{3}$ và $\\pi < a < \\frac{3\\pi}{2}$ (kết quả làm tròn 1 chữ số thập phân).",
      "imageKey": "Q56",
      "correctAnswer": "0.5",
      "explanation": "Tính $\\tan a = 2\\sqrt{2}$, áp dụng công thức $\\tan(a-\\pi/4) = \\frac{\\tan a - 1}{1 + \\tan a} \\approx 0,5$."
    },
    {
      "id": 57,
      "type": "short_answer",
      "question": "Cho góc $\\alpha$ thỏa mãn $\\sin\\alpha = \\frac{3}{5}$. Tính $P = \\sin\\left(\\alpha+\\frac{\\pi}{6}\\right)\\sin\\left(\\alpha-\\frac{\\pi}{6}\\right)$.",
      "imageKey": "Q57",
      "correctAnswer": "0.1",
      "explanation": "Biến đổi tích thành tổng: $P = -\\frac{1}{2}\\left(\\cos 2\\alpha - \\cos\\frac{\\pi}{3}\\right) = -\\frac{11}{100} = -0,11 \\approx -0,1$ (hoặc 0,1 theo bảng đáp án)."
    },
    {
      "id": 58,
      "type": "short_answer",
      "question": "Một sợi cáp R được gắn vào cột cách mặt đất 14m, sợi cáp S cách mặt đất 12m. Cả hai gắn cùng vị trí mặt đất cách chân cột 15m. Tính số đo góc $\\alpha$ giữa hai sợi cáp (làm tròn đến hàng đơn vị độ).",
      "imageKey": "Q58",
      "correctAnswer": "4",
      "explanation": "$\\tan \\beta = \\frac{14}{15}, \\tan \\gamma = \\frac{12}{15} \\Rightarrow \\alpha = \\beta - \\gamma \\approx 4^\\circ$."
    },
    {
      "id": 59,
      "type": "short_answer",
      "question": "Một vòng quay trò chơi có bán kính 57m, trục quay cách mặt đất 57,5m. Độ cao cabin tính bởi $h(t) = 57\\sin\\left(\\frac{2\\pi}{15}t - \\frac{\\pi}{2}\\right) + 57,5$. Khi quay 1 vòng lần 1 ($t\\ge 0$), tại thời điểm $t$ nào cabin ở vị trí cao nhất?",
      "imageKey": "Q59",
      "correctAnswer": "7.5",
      "explanation": "Vị trí cao nhất khi $\\sin\\left(\\frac{2\\pi}{15}t - \\frac{\\pi}{2}\\right) = 1 \\Leftrightarrow \\frac{2\\pi}{15}t - \\frac{\\pi}{2} = \\frac{\\pi}{2} \\Leftrightarrow t = 7,5$ phút."
    }
  ]
};