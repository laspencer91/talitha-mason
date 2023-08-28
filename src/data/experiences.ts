type Expierience = { position: string; company: string, lengthOfTime?: string; listItems?: Array<string | undefined> }

export const jobExperiences: Array<Expierience> = [
    {
        position: 'Personal Care Assistant',
        company: 'Elara Caring',
        lengthOfTime: 'SEP 2022 - Present',
        listItems: [
            'Provide compassionate assistance to elderly individuals, offering companionship and support.',
            'Run daily errands, perform basic housekeeping, and prepare meals.',
            'Demonstrate empathy and help create a comfortable atmosphere for clients.',
        ]
    },
    {
        position: 'Library Aide',
        company: 'Northwest Metro Library',
        lengthOfTime: 'OCT 2019 - AUG 2023',
        listItems: [
            'Managed book drops, sorting, shelving, and inventory tasks efficiently.',
            'Assisted guests in locating materials and provided excellent customer service.',
            'Set up rooms for community events, ensuring a comfortable environment.',
            'Skillfully arranged public book displays to engage and enhance visitor experience.',
        ]
    },
    {
        position: 'Sales Associate & Visual Team Member',
        company: 'Forever 21',
        lengthOfTime: 'JUL 2017 - AUG 2018',
        listItems: [
            'Progressed from Sales Associate to Visual Team member for exceptional work ethic and dedication.',
            'Collaborated with a visual team to create captivating in-store displays.',
            'Contributed to product placement and distribution, enhancing visual experiences.',
            'Maintained high standards in visual appearance and conducted effective customer interactions.',
        ]
    },
    {
        position: 'Dress Specialist',
        company: 'Davids Bridal',
        lengthOfTime:'AUG 2018 - FEB 2019',
        listItems: [
            'Provided styling and dressing expertise for various occasions, including proms and weddings.',
            'Assisted brides with preparations for their ceremonies, ensuring a memorable experience.',
            'Offered exceptional customer service, earning recognition for strong work ethic.',
        ]
    },
    {
        position: 'Sales Associate',
        company: 'Express',
        lengthOfTime: 'MAR 2019 - OCT 2019',
        listItems: [
            'Demonstrated excellent customer service and provided style advice to customers.',
            'Maintained store appearance and conducted pre-opening cleaning tasks.',,
            'Assisted in cash register operations and upheld high standards of conduct.',
        ],
    }
]