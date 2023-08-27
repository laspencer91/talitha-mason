"use client"

import {HorizontalSeparator} from "@/app/components/horizontal-separator";
import {Header} from "@/app/components/header";
import {AtSign, Phone, User, Home as HomeIcon } from "react-feather";
import {JobExperience} from "@/app/components/job-experience";
import {ProgressBar} from "@/app/components/progress-bar";
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import {useRef} from "react";
import { jsPDF } from "jspdf";
import download from 'downloadjs';

const jobExperiences = [
  {
    position: 'Personal Care Assistant',
    company: 'Elara Caring | September 2022 - Present',
    listItems: [
      'Provide compassionate assistance to elderly individuals, offering companionship and support.',
      'Run daily errands, perform basic housekeeping, and prepare meals.',
      'Demonstrate empathy and help create a comfortable atmosphere for clients.',
    ]
  },
  {
    position: 'Library Aide',
    company: 'Northwest Metro Library | October 2019 - August 2023',
    listItems: [
      'Managed book drops, sorting, shelving, and inventory tasks efficiently.',
      'Assisted guests in locating materials and provided excellent customer service.',
      'Set up rooms for community events, ensuring a comfortable environment.',
      'Skillfully arranged public book displays to engage and enhance visitor experience.',
    ]
  },
  {
    position: 'Sales Associate & Visual Team Member',
    company: 'Forever 21 | July 2017 - August 2018',
    listItems: [
      'Progressed from Sales Associate to Visual Team member for exceptional work ethic and dedication.',
      'Collaborated with a visual team to create captivating in-store displays.',
      'Contributed to product placement and distribution, enhancing visual experiences.',
      'Maintained high standards in visual appearance and conducted effective customer interactions.',
    ]
  },
  {
    position: 'Dress Specialist',
    company: 'Davids Bridal | August 2018 - February 2019',
    listItems: [
      'Provided styling and dressing expertise for various occasions, including proms and weddings.',
      'Assisted brides with preparations for their ceremonies, ensuring a memorable experience.',
      'Offered exceptional customer service, earning recognition for strong work ethic.',
    ]
  },
  {
    position: 'Sales Associate',
    company: 'Express | March 2019 - October 2019',
    listItems: [
      'Demonstrated excellent customer service and provided style advice to customers.',
      'Maintained store appearance and conducted pre-opening cleaning tasks.',,
      'Assisted in cash register operations and upheld high standards of conduct.',
    ],
  }
]

export default function Home() {

  function toImage() {
    htmlToImage.toPng(document.getElementById('resume-container'), { quality: 0.95 })
      .then(function (dataUrl) {
        download(dataUrl, 'resume-image.png');
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(dataUrl);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        console.log(pdfWidth);
        console.log(pdfHeight);
        pdf.addImage(dataUrl, 'PNG', 0, 0,pdfWidth, pdfHeight);
        pdf.save("download.pdf");
      });
  }

  return (
    <main className='flex justify-center font-infant'>
      <div className='h-full justify-start'><button onClick={toImage}>PDF</button></div>
      <div className='w-[1080px] h-[1920px] bg-zinc-100 flex' id='resume-container'>
        <div className={`h-full w-[70px] background-2`}></div>
        <div className='w-full flex flex-col gap-5 py-8 px-20 items-center header-2'>
          <div className='text-8xl font-bold header-1 font-allison'>Talitha Mason</div>
          <div className='flex flex-row gap-6 text-black'>
            <div className='flex flex-row gap-2'>
              <div className='w-7 h-7 p-[6px] rounded-full bg-purple-400 flex justify-center items-center'><User color='white' /></div>Talitha Mason
            </div>
            <div className='flex flex-row gap-2'>
              <div className='w-7 h-7 p-[6px] rounded-full bg-purple-400 flex justify-center items-center'><HomeIcon color='white' /></div>4501 Boardwalk Ave. Moore, OK
            </div>
            <div className='flex flex-row gap-2'>
              <div className='w-7 h-7 p-[6px] rounded-full bg-purple-400 flex justify-center items-center'><Phone color='white' /></div>405-885-5398
            </div>
            <div className='flex flex-row gap-2'>
              <div className='w-7 h-7 p-[6px] rounded-full bg-purple-400 flex justify-center items-center'><AtSign  color='white' /></div>talithamason@ymail.com
            </div>
          </div>
          <HorizontalSeparator />
          <div className='w-full flex flex-col gap-5 items-start'>
            <Header>MY SUMMARY</Header>
            <div className='text-purple-400'>I am passionate and creative with a track record of enhancing visual experiences and creating comfortable and engaging environments. I am excited for the opportunity to learn a new skill set and apply my strengths in customer service, styling, and love of people to excel as a Preschool Photographer at Lifetouch!</div>
          </div>
          <HorizontalSeparator />
          <div className='w-full flex flex-col gap-5 items-start'>
            <Header>EXPERIENCE & EMPLOYMENT</Header>
            {jobExperiences.map((experience, expIndex) => (
              <JobExperience key={expIndex} position={experience.position} company={experience.company}>
                <ul>
                  {experience.listItems.map((item, index) => (<li key={index}>{item}</li>))}
                </ul>
              </JobExperience>
              )
            )}
          </div>
          <HorizontalSeparator />
          <div className='w-full flex flex-col gap-5 items-start'>
            <Header>EDUCATION</Header>
            <JobExperience position={'YUKON HIGH SCHOOL'} company={'High School Diploma, 2012'} />
          </div>
          <HorizontalSeparator />
          <div className='w-full flex flex-col gap-5 items-start'>
            <Header>SKILLS</Header>
            <div className='header-2'>Customer service & interpersonal skills</div>
            <ProgressBar percentage={94} />
            <div className='header-2'>Creative problem-solving</div>
            <ProgressBar percentage={90} />
            <div className='header-2'>Visual Merchandising & Display Creation</div>
            <ProgressBar percentage={80} />
            <div className='header-2'>Photography & artistic creativity</div>
            <ProgressBar percentage={76} />
          </div>
        </div>
      </div>
    </main>
  )
}
