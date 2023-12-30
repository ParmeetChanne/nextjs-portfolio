"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
      title: "Programming",
      id: "programming",
      content: (
        <ul className="list-disc pl-2 text-gray-600 dark:text-gray-400">
          <li>Python</li>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>NextJs</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>SQL & MySQL</li>
          <li>MongoDb</li>
          <li>Git & Github</li>
          <li>Data Science</li>
          <li>Ethical Hacking</li>
          <li>UX Research & Design - Figma & Adobe XD</li>
        </ul>
      ),
    },
    {
      title: "Professional Skills",
      id: "professional",
      content: (
        <ul className="list-disc pl-2 text-gray-600 dark:text-gray-400">
          <li>Leadership</li>
          <li>Entrepreneurship</li>
          <li>Problem-Solving</li>
          <li>Effective Communication and Collaboration</li>
          <li>Project Management & Organization</li>
          <li>Analytical Thinking</li>
          <li>Fast Learner</li>
          <li>Ability to Work Independantly</li>
          <li>Multilingual</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2 text-gray-600 dark:text-gray-400">
          <li>IBM Data Science Professional Certificate</li>
          <li>Google IT Support Professional Certificate</li>
          <li>Google UX Design Professional Certificate</li>
          <li>Google Digital Marketing & E-commerce Professional Certificate</li>
          <li>React Developer Certificate</li>
          <li>Complete Ethical Hacking Certificate</li>
          <li></li>
        </ul>
      ),
    },
    {
        title: "Extra Curriculars",
        id: "extracurriculars",
        content: (
          <ul className="list-disc pl-2">
            <li></li>
          </ul>
        ),
      },
  ];
  

const SkillsSection = () => {
    const [tab, setTab] = useState("programming");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
        setTab(id);
        });
    };

    return (
        <>
          <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-8 md:mb-12">
          <h3 className="mb-2 md:mb-4 text-2xl font-bold tracking-tight text-dark-200 md:text-4xl dark:text-light-white">
                  Skills
          </h3>
                <div className="flex flex-col md:flex-row text-gray-600 dark:text-gray-400 underline underline-offset-4 decoration-dark-200">
                    <div className="mr-4 mb-1 md:mb-0">
                        <TabButton
                        selectTab={() => handleTabChange("programming")}
                        active={tab === "programming"}
                        >
                        {" "}
                        Programming{" "}
                        </TabButton>
                    </div>
                    <div className="mr-4 mb-1 md:mb-0">
                        <TabButton
                        selectTab={() => handleTabChange("professional")}
                        active={tab === "professional"}
                        >
                        {" "}
                        Professional Skills{" "}
                        </TabButton>
                    </div>
                    <div className="mr-4">
                        <TabButton
                        selectTab={() => handleTabChange("certifications")}
                        active={tab === "certifications"}
                        >
                        {" "}
                        Certifications{" "}
                        </TabButton>    
                    </div>
                    {/*<div className="mr-4">
                        <TabButton
                        selectTab={() => handleTabChange("extracurriculars")}
                        active={tab === "extracurriculars"}
                        >
                        {" "}
                        Extra Curriculars{" "}
                        </TabButton>    
                    </div>
    */}
                </div>
                <div className="mt-4">
                    {TAB_DATA.find((t) => t.id === tab)?.content}
                </div>
          </div>
        </>
      );
}

export default SkillsSection