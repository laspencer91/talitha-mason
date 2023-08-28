"use client"

import {HorizontalSeparator} from "@/app/components/horizontal-separator";
import {Header} from "@/app/components/header";
import {AtSign, Phone, User, Home as HomeIcon, Download} from "react-feather";
import {JobExperience} from "@/app/components/job-experience";
import {ProgressBar} from "@/app/components/progress-bar";
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';
import {jobExperiences} from "../data/experiences";
import {HeaderIconWithInfo} from "./components/header-icon-with-info";

export default function Home() {

  function toImage() {
    const resumeContainer = document.getElementById('resume-container');
    if (!resumeContainer) {
      throw new Error('Could not find the resume container element.')
    }
    htmlToImage.toPng(resumeContainer, { quality: 1, canvasWidth: 2160, canvasHeight: 3840 })
      .then(function (dataUrl) {
        download(dataUrl, 'Talitha Mason Resume.png');
      });
  }

  return (
    <main className='flex justify-center font-infant'>
      <div className='absolute start-1 top-1 justify-start'>
        <button className='background-2 rounded-full p-2' onClick={toImage}>
          <Download color='white' />
        </button>
      </div>
      <div className='w-[1080px] h-[1920px] bg-white flex' id='resume-container'>
        <div className={`h-full w-[70px] background-2`} />
        <div className='w-full flex flex-col gap-5 py-8 px-20 items-center header-2'>
          <div className='text-8xl font-bold header-1 font-allison'>Talitha Mason</div>
          <div className='flex flex-row gap-6 text-black'>
            <HeaderIconWithInfo info='Talitha Mason'>
              <User color='white' />
            </HeaderIconWithInfo>
            <HeaderIconWithInfo info='4501 Boardwalk Ave. Moore, OK'>
              <HomeIcon color='white' />
            </HeaderIconWithInfo>
            <HeaderIconWithInfo info='405-885-5398'>
              <Phone color='white' />
            </HeaderIconWithInfo>
            <HeaderIconWithInfo info='talithamason@ymail.com'>
              <AtSign  color='white' />
            </HeaderIconWithInfo>
          </div>
          <HorizontalSeparator />
          <div className='w-full flex flex-col gap-5 items-start'>
            <Header>MY SUMMARY</Header>
            <div className='text-black'>I am passionate and creative with a track record of enhancing visual experiences and creating comfortable and engaging environments. I am excited for the opportunity to learn a new skill set and apply my strengths in customer service, styling, and love of people to excel as a Preschool Photographer at Lifetouch!</div>
          </div>
          <HorizontalSeparator />
          <div className='w-full flex flex-col gap-5 items-start'>
            <Header>EXPERIENCE & EMPLOYMENT</Header>
            {jobExperiences.map((experience, expIndex) => (
              <JobExperience key={expIndex} position={experience.position} company={experience.company} lengthOfTime={experience.lengthOfTime}>
                <ul>
                  {experience.listItems?.map((item, index) => (<li key={index}>{item}</li>))}
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
            <div className='text-black'>Customer service & interpersonal skills</div>
            <ProgressBar percentage={94} />
            <div className='text-black'>Creative problem-solving</div>
            <ProgressBar percentage={90} />
            <div className='text-black'>Visual Merchandising & Display Creation</div>
            <ProgressBar percentage={80} />
            <div className='text-black'>Photography & artistic creativity</div>
            <ProgressBar percentage={76} />
          </div>
        </div>
      </div>
    </main>
  )
}
