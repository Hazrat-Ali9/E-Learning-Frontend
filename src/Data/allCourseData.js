export const allCourseData = [
    {
        id: 1,
        title: "Web Development Masterclass",
        short_desc: "Learn HTML, CSS, JavaScript, and more to become a web developer.",
        rating: 4.7,
        regular_price: 1500,
        discounted_price: 750,
        promo_code: "WEBDEV50",
        thumbnail_url: "https://cdn.10minuteschool.com/images/thumbnails/BCS_Preli_Recorded_Course_Thumbnail.jpg?w=272&h=152",
        intro_video_url: "https://www.youtube.com/embed/AmI7PHx_iRY?si=9vM9Q26gFf8Kq-H6",
        category: "Web Development",
        isOnCart: false,
        instructor: {
            instructor_profile_url: "https://www.example.com/instructors/john-doe",
            name: "John Doe",
            education: "BSc in Computer Science, MIT"
        },
        course_modules: {
            enrolled: 1200,
            watch_time: 40,
            total_video: 100,
            video_lectures: 105,
            total_quize: 15,
            total_notes: 80
        },
        modules: [
            {
                id: 1,
                module_title: 'Title 1',
                videos: [
                    {
                        video_id: 1,
                        video_title: 'Video Title 1',
                        video_url: 'https://www.youtube.com/embed/NWnBxQjssvQ?si=InmCdUKGHB9IyYRe'
                    },
                    {
                        video_id: 2,
                        video_title: 'Video Title 2',
                        video_url: 'https://www.youtube.com/embed/01l0s1iR_ZI?si=A37clGK1oVOR13AW'
                    },
                ]
            },
            {
                id: 2,
                module_title: 'Title 2',
                videos: [
                    {
                        video_id: 1,
                        video_title: 'Video Title 1',
                        video_url: 'https://www.youtube.com/embed/NWnBxQjssvQ?si=InmCdUKGHB9IyYRe'
                    },
                    {
                        video_id: 2,
                        video_title: 'Video Title 2',
                        video_url: 'https://www.youtube.com/embed/01l0s1iR_ZI?si=A37clGK1oVOR13AW'
                    },
                    {
                        video_id: 3,
                        video_title: 'Video Title 3',
                        video_url: 'https://www.youtube.com/embed/JUwePydwbUI?si=fTjoDBhdm9QY85oZ'
                    },
                ]
            },
        ],
        content_preview: [
            {
                title: "Introduction to HTML",
                video_url: "https://www.example.com/html_intro"
            }
        ]
    },
    {
        id: 2,
        title: "Data Science Essentials",
        short_desc: "Master data analysis, visualization, and machine learning basics.",
        rating: 4.8,
        regular_price: 1800,
        discounted_price: 900,
        promo_code: "DATA50",
        thumbnail_url: "https://cdn.10minuteschool.com/images/skills/Updated_Thumbnail_v3/shorkari_chakri_prostuti_rac.jpg?w=272&h=152",
        intro_video_url: "https://www.youtube.com/embed/vlnay6Mkp30",
        category: "Data Science",
        isOnCart: false,
        instructor: {
            instructor_profile_url: "https://www.example.com/instructors/jane-smith",
            name: "Jane Smith",
            education: "PhD in Statistics, Stanford"
        },
        course_modules: {
            enrolled: 2200,
            watch_time: 60,
            total_video: 80,
            video_lectures: 85,
            total_quize: 20,
            total_notes: 100
        },
        modules: [
            {
                id: 1,
                module_title: 'Data Analysis Basics',
                videos: [
                    {
                        video_id: 1,
                        video_title: 'Understanding Data',
                        video_url: 'https://www.youtube.com/embed/xjUm58aZ0T0'
                    },
                    {
                        video_id: 2,
                        video_title: 'Data Cleaning Techniques',
                        video_url: 'https://www.youtube.com/embed/cdAf0sdawf8'
                    },
                ]
            },
            {
                id: 2,
                module_title: 'Visualization',
                videos: [
                    {
                        video_id: 1,
                        video_title: 'Creating Graphs',
                        video_url: 'https://www.youtube.com/embed/W1Xy3KzRB1o'
                    },
                    {
                        video_id: 2,
                        video_title: 'Using Matplotlib',
                        video_url: 'https://www.youtube.com/embed/AmI7PHx_iRY'
                    },
                ]
            },
        ],
        content_preview: [
            {
                title: "Introduction to Data Science",
                video_url: "https://www.example.com/data_science_intro"
            }
        ]
    },
    {
        id: 3,
        title: "Digital Marketing Mastery",
        short_desc: "Learn SEO, content marketing, social media strategies, and more.",
        rating: 4.9,
        regular_price: 1300,
        discounted_price: 650,
        promo_code: "DIGIMKT50",
        thumbnail_url: "https://cdn.10minuteschool.com/images/thumbnails/bank_jobs_question_solve_course_model_test.jpg?w=272&h=152",
        intro_video_url: "https://www.youtube.com/embed/kC6C5hPhMmg",
        category: "Digital Marketing",
        isOnCart: false,
        instructor: {
            instructor_profile_url: "https://www.example.com/instructors/sarah-lee",
            name: "Sarah Lee",
            education: "MBA in Marketing, Harvard Business School"
        },
        course_modules: {
            enrolled: 1500,
            watch_time: 35,
            total_video: 70,
            video_lectures: 75,
            total_quize: 10,
            total_notes: 50
        },
        modules: [
            {
                id: 1,
                module_title: 'SEO Fundamentals',
                videos: [
                    {
                        video_id: 1,
                        video_title: 'Keyword Research',
                        video_url: 'https://www.youtube.com/embed/psT6R70KjcU'
                    },
                    {
                        video_id: 2,
                        video_title: 'On-page Optimization',
                        video_url: 'https://www.youtube.com/embed/Q88IW11r2S8'
                    },
                ]
            },
            {
                id: 2,
                module_title: 'Social Media Marketing',
                videos: [
                    {
                        video_id: 1,
                        video_title: 'Facebook Marketing',
                        video_url: 'https://www.youtube.com/embed/TXfKxB3fEKo'
                    },
                    {
                        video_id: 2,
                        video_title: 'Instagram Ads',
                        video_url: 'https://www.youtube.com/embed/QWqzd6Br7mo'
                    },
                ]
            },
        ],
        content_preview: [
            {
                title: "Overview of Digital Marketing",
                video_url: "https://www.example.com/digital_marketing_intro"
            }
        ]
    }
];
