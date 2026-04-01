
const form = document.getElementById('lesson-form');
const lessonPlan = document.getElementById('lesson-plan');
const savePdfButton = document.getElementById('save-pdf');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const klass = document.getElementById('class').value;
    const subject = document.getElementById('subject').value;
    const topic = document.getElementById('topic').value;
    const duration = document.getElementById('duration').value;
    const date = document.getElementById('date').value;
    const language = document.getElementById('language').value;

    if (!klass || !subject || !topic || !duration || !date || !language) {
        alert('Please fill all the fields');
        return;
    }

    lessonPlan.innerHTML = '<p>Generating lesson plan.....</p>';

    setTimeout(() => {
        let lessonPlanHTML;

        if (language === 'en') {
            lessonPlanHTML = `
                <h2>Lesson Plan</h2>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Class:</strong> ${klass}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Topic:</strong> ${topic}</p>
                <p><strong>Duration:</strong> ${duration}</p>
                <p><strong>Language:</strong> English</p>

                <h3>Learning Objectives</h3>
                <p>By the end of this lesson, students will be able to understand the core concepts of ${topic}.</p>

                <h3>Teaching Activities</h3>
                <p>1. Introduction to the topic (10 minutes)</p>
                <p>2. In-depth explanation with examples (20 minutes)</p>
                <p>3. Q&A session (10 minutes)</p>

                <h3>Teaching Aids</h3>
                <p>Whiteboard, markers, and relevant textbooks.</p>

                <h3>Assessment</h3>
                <p>A short quiz will be conducted at the end of the class.</p>

                <h3>Homework</h3>
                <p>Read the next chapter and answer the first three questions.</p>
            `;
        } else {
            lessonPlanHTML = `
                <div dir="rtl">
                    <h2>سبق کا منصوبہ</h2>
                    <p><strong>تاریخ:</strong> ${date}</p>
                    <p><strong>کلاس:</strong> ${klass}</p>
                    <p><strong>مضمون:</strong> ${subject}</p>
                    <p><strong>موضوع:</strong> ${topic}</p>
                    <p><strong>دورانیہ:</strong> ${duration}</p>
                    <p><strong>زبان:</strong> اردو</p>

                    <h3>سیکھنے کے مقاصد</h3>
                    <p>اس سبق کے اختتام تک، طلباء ${topic} کے بنیادی تصورات کو سمجھ سکیں گے۔</p>

                    <h3>تدریسی سرگرمیاں</h3>
                    <p>1. موضوع کا تعارف (10 منٹ)</p>
                    <p>2. مثالوں کے ساتھ گہرائی میں وضاحت (20 منٹ)</p>
                    <p>3. سوال و جواب کا سیشن (10 منٹ)</p>

                    <h3>تدریسی معاونات</h3>
                    <p>وائٹ بورڈ، مارکر، اور متعلقہ درسی کتب۔</p>

                    <h3>تشخیص</h3>
                    <p>کلاس کے آخر میں ایک مختصر کوئز لیا جائے گا۔</p>

                    <h3>گھر کا کام</h3>
                    <p>اگلا باب پڑھیں اور پہلے تین سوالات کے جواب دیں۔</p>
                </div>
            `;
        }

        lessonPlan.innerHTML = lessonPlanHTML;
        savePdfButton.style.display = 'block';
    }, 1000);
});

savePdfButton.addEventListener('click', () => {
    const lessonPlanElement = document.getElementById('lesson-plan-container');
    const opt = {
        margin:       1,
        filename:     'lesson-plan.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(lessonPlanElement).set(opt).save();
});
