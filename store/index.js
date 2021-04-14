

export const state = () => ({
    workplaces : [
        'Baku', 'Sumgayit','Absheron','Barda', 'Agdam'
    ],

    services: [
        {
            slug: 'cleaning',
            name: 'Cleaning',
            img: 'https://www.culverdocs.co.uk/assets/images/commercial-cleaning.svg',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            slug: 'home-service',
            name: 'Home Services',
            img: 'https://jungleworks.com/wp-content/uploads/2018/11/banner-home-image.svg',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            slug: 'repair',
            name: 'Repair',
            img: 'https://www.creativefabrica.com/wp-content/uploads/2020/01/12/house-repairing-flat-icon-vector-Graphics-1.jpg',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            slug: 'furniture-movment',
            name: 'Furniture Movement',
            img: 'https://www.furniturevillage.co.uk/on/demandware.static/-/Library-Sites-library-fv-shared/default/dwf829dbde/campaign-landing-pages/how-to-move-a-sofa/images/section-four-illustration-a.svg',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
    ],


    workers: [
        {
            id: 1,
            name: 'Ruhin',
            surname: 'Shukurlu',
            birth_date: '12-02-2001',
            languages: ['Azerbaijan', 'English', 'Turkey'],
            experience: '2 year',
            work_places: ['Baku', 'Sumgayit'],
            profile_img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            bio: `mollitia voluptatibus quas optio corrupti veritatis aliquam obcaecati
                sequi neque? Sed in neque possimus corrupti sun`,
            skills: [
                {
                    name: 'cleaining',
                    price_per_hour: 20,
                    price_currency: 'AZN',
                    experience_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
                    task_count: 4
                },
                {
                    name: 'furniture-movment',
                    price_per_hour: 10,
                    price_currency: 'AZN',
                    experience_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
                    task_count: 4
                },
            ],
            rating: 4
        },
        {
            id: 2,
            name: 'Elchin',
            surname: 'Rahimli',
            birth_date: '12-02-2001',
            languages: ['Azerbaijan', 'English'],
            experience: '3 year',
            work_places: ['Baku', 'Sumgayit'],
            profile_img: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
            bio: ` mollitia voluptatibus quas optio corrupti veritatis aliquam obcaecati
                sequi neque? Sed in neque possimus corrupti sun`,
            skills: [
                {
                    name: 'repair',
                    price_per_hour: 15,
                    price_currency: 'AZN',
                    experience_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
                    task_count: 4
                },
                {
                    name: 'cleaning',
                    price_per_hour: 13,
                    price_currency: 'AZN',
                    experience_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
                    task_count: 10
                }
            ],
            rating: 7
        },
        {
            id: 3,
            name: 'Ferman',
            surname: 'Guliyev',
            birth_date: '12-02-2001',
            languages: ['Azerbaijan', 'English', 'Turkey'],
            experience: '2 year',
            work_places: ['Baku', 'Sumgayit'],
            profile_img: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id545262108?k=6&m=545262108&s=612x612&w=0&h=atYvV2j41NyaDjFZAPnUrkaes1DNwMzFeRIOY4XhpAo=',
            bio: ` mollitia voluptatibus quas optio corrupti veritatis aliquam obcaecati
                sequi neque? Sed in neque possimus corrupti sun`,
            skills: [
                {
                    name: 'home-service',
                    price_per_hour: 10,
                    price_currency: 'USD',
                    experience_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
                    task_count: 4
                },
                {
                    name: 'furniture-movment',
                    price_per_hour: 10,
                    price_currency: 'AZN',
                    experience_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
                    task_count: 4
                },
                {
                    name: 'cleaning',
                    price_per_hour: 15,
                    price_currency: 'AZN',
                    experience_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
                    task_count: 6
                }

            ],
            rating: 8
        },
        {
            id: 4,
            name: 'Aidan',
            surname: 'Atakishieva',
            birth_date: '12-04-2000',
            languages: ['Azerbaijan', 'English', 'Turkey', 'Russian'],
            experience: '1 year',
            work_places: ['Baku'],
            profile_img: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg',
            bio: ` mollitia voluptatibus quas optio corrupti veritatis aliquam obcaecati
                sequi neque? Sed in neque possimus corrupti sun`,
            skills: [
                {
                    name: 'cleaning',
                    price_per_hour: 30,
                    price_currency: 'TRY',
                    experience_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
                    task_count: 4
                }
            ],
            rating: 7
        },
        {
            id: 5,
            name: 'Azad',
            surname: 'Shahbazov',
            birth_date: '12-02-1997',
            languages: ['Azerbaijan', 'English', 'Turkey'],
            experience: '5+ year',
            work_places: ['Baku', 'Sumgayit', 'Absheron'],
            profile_img: 'https://expertphotography.com/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg',
            bio: ` mollitia voluptatibus quas optio corrupti veritatis aliquam obcaecati
                sequi neque? Sed in neque possimus corrupti sun`,
            skills: [
                {
                    name: 'cleaning',
                    price_per_hour: 20,
                    price_currency: 'AZN',
                    experience_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
                    task_count: 4
                },
                {
                    name: 'furniture-movment',
                    price_per_hour: 10,
                    price_currency: 'AZN',
                    experience_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
                    task_count: 4
                },
            ],
            rating: 9
        },
        {
            id: 6,
            name: 'Amir',
            surname: 'Namazov',
            birth_date: '12-02-1999',
            languages: ['Azerbaijan', 'English', 'Turkey'],
            experience: '2 year',
            work_places: ['Sumgayit'],
            profile_img: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png',
            bio: ` mollitia voluptatibus quas optio corrupti veritatis aliquam obcaecati
                sequi neque? Sed in neque possimus corrupti sun`,
            skills: [
                {
                    name: 'repair',
                    price_per_hour: 10,
                    price_currency: 'AZN',
                    experience_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
                    task_count: 4
                },
                {
                    name: 'home-service',
                    price_per_hour: 13,
                    price_currency: 'AZN',
                    experience_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
                    task_count: 4
                },
            ],
            rating: 5
        },

        {
            id: 7,
            name: 'Asgar',
            surname: 'Asgarov',
            birth_date: '12-02-2000',
            languages: ['Azerbaijan', 'English', 'Turkey'],
            experience: '3 year',
            work_places: ['Barda', 'Agdam'],
            profile_img: 'https://nugrowth.com/wp-content/uploads/2015/03/kyle-tillar2.png',
            bio: ` mollitia voluptatibus quas optio corrupti veritatis aliquam obcaecati
                sequi neque? Sed in neque possimus corrupti sun`,
            skills: [
                {
                    name: 'cleaning',
                    price_per_hour: 20,
                    price_currency: 'AZN',
                    experience_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
                    task_count: 4
                },
                {
                    name: 'repair',
                    price_per_hour: 10,
                    price_currency: 'AZN',
                    experience_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
                    task_count: 4
                },
                {
                    name: 'home-service',
                    price_per_hour: 13,
                    price_currency: 'AZN',
                    experience_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
                    task_count: 4
                },
            ],
            rating: 7
        },
        {
            id: 8,
            name: 'Murad',
            surname: 'Mammadli',
            birth_date: '12-02-2002',
            languages: ['Azerbaijan', 'English'],
            experience: '4 year',
            work_places: ['Baku'],
            profile_img: 'https://content1.getnarrativeapp.com/68f6039f-a2f9-4e15-9b91-4f7cebe2a378/img_ref/4e80a9d6-aef4-4875-ab94-5952b6926e07/Hamish-5_professional_headshots_photographer_headshot_750.jpg',
            bio: ` mollitia voluptatibus quas optio corrupti veritatis aliquam obcaecati
                sequi neque? Sed in neque possimus corrupti sun`,
            skills: [
                {
                    name: 'cleaning',
                    price_per_hour: 23,
                    price_currency: 'AZN',
                    experience_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
                    task_count: 4
                },
                {
                    name: 'repair',
                    price_per_hour: 12,
                    price_currency: 'AZN',
                    experience_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
                    task_count: 4
                }
            ],
            rating: 8
        },
        {
            id: 9,
            name: 'Vasif',
            surname: 'Abdullayev',
            birth_date: '12-02-2000',
            languages: ['Azerbaijan', 'English', 'Turkey'],
            experience: '3 year',
            work_places: ['Barda', 'Agdam'],
            profile_img: 'https://images.squarespace-cdn.com/content/v1/55bcbba5e4b09c9ffac5f9a3/1527566564346-K8WGUCQX7MLG0IQ33OMO/ke17ZwdGBToddI8pDm48kMFiMyT1nneRMhnmfuSfpxZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mlM0or4nqX7jrn5yWu0hA1QXedaIFqnAbw_tQShHbKg4-O_KAc44ak5jGzrnn7f3A/Al-004.jpg?format=2500w',
            bio: ` mollitia voluptatibus quas optio corrupti veritatis aliquam obcaecati
                sequi neque? Sed in neque possimus corrupti sun`,
            skills: [
                {
                    name: 'cleaning',
                    price_per_hour: 20,
                    price_currency: 'AZN',
                    experience_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
                    task_count: 4
                },
                {
                    name: 'home-service',
                    price_per_hour: 13,
                    price_currency: 'AZN',
                    experience_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
                    task_count: 4
                },
            ],
            rating: 9
        },
        {
            id: 10,
            name: 'Togrul',
            surname: 'Mammadov',
            birth_date: '18-01-2001',
            languages: ['Azerbaijan', 'English', 'Turkey'],
            experience: '2 years',
            work_places: ['Sumgayit'],
            profile_img: 'https://lh3.googleusercontent.com/proxy/3QXxlfnFNmF8oKimIufvhnaOJOzrk5bwq25JB7j1z6vNcmFFqu2t4QQ_dd4FtScXknDKtiiEPJxyMDC62_Q9Tl9uQr2iZ-nmC_cz_qchTcacfIfoiwGn1UwY6gPY5k19_Z-lUj0yMShexBdJcczFf_zjlP4',
            bio: ` mollitia voluptatibus quas optio corrupti veritatis aliquam obcaecati
                sequi neque? Sed in neque possimus corrupti sun`,
            skills: [
                {
                    name: 'car-washing',
                    price_per_hour: 20,
                    price_currency: 'AZN',
                    experience_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
                    task_count: 4
                },
                {
                    name: 'repair',
                    price_per_hour: 10,
                    price_currency: 'AZN',
                    experience_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
                    task_count: 4
                }
            ],
            rating: 6
        }       
    ]


})