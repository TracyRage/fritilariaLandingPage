'use client';

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

import { motion } from "framer-motion";
import { useState } from "react";
import MacroTable from "../faq/MacrosTable";
import { sourceSerif } from "./fonts";

export default function RenderTermsListItem({ name, content }: { name: string, content: string }) {
  return (
    <div className="pb-4">
      <li className="pb-2 tracking-tight dark:text-md_theme_dark_primary text-md_theme_light_primary text-sm lg:text-base">
        {name}
      </li>
      <p className="lg:leading-relaxed indent-6 text-sm lg:text-base text-pretty lg:text-wrap">{content}</p>
    </div>
  )

}


export function RenderFAQListItem({ name, content }: { name: string, content: string }) {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const ChevronDown = ChevronDownIcon;
  const ChevronUp = ChevronUpIcon;

  return (
    <motion.div onClick={() => handleClick()}>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row w-3/3 md:w-3/4 justify-between items-center">
        {

          !isOpen ?  
          <h1 className={`${sourceSerif.className} text-primary text-sm md:text-lg`}>{name}</h1> : 
          <h1 className={`${sourceSerif.className} dark:text-md_theme_dark_primary text-md_theme_light_primary text-sm md:text-lg`}>{name}</h1>

        }
          {

            !isOpen ? <ChevronDown className="md:w-[34px] w-[24px]" /> : <ChevronUp className="md:w-[34px] w-[24px] text-md_theme_light_primary dark:text-md_theme_dark_primary" />

          }

        </div>
        {isOpen &&
          <motion.div className="w-3/3 md:w-3/4 text-sm md:text-base tracking-wide">
            {content}
          </motion.div>}
        {

          !isOpen ? <hr className="w-3/3 md:w-3/4 border-md_theme_light_onBackground opacity-25 dark:opacity-15 dark:border-md_theme_dark_onPrimaryContainer" /> : <hr className="w-3/3 md:w-3/4 opacity-50 border-md_theme_light_primary dark:border-md_theme_dark_primary" />

        }
      </div>
    </motion.div>
  )

}



export function RenderFAQListItem2({ name, content }: { name: string, content: string }) {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const ChevronDown = ChevronDownIcon;
  const ChevronUp = ChevronUpIcon;

  return (
    <motion.div onClick={() => handleClick()}>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row w-3/3 md:w-3/4 justify-between items-center">

        {

          !isOpen ?  
          <h1 className={`${sourceSerif.className} text-primary text-sm md:text-lg`}>{name}</h1> : 
          <h1 className={`${sourceSerif.className} dark:text-md_theme_dark_primary text-md_theme_light_primary text-sm md:text-lg`}>{name}</h1>

        }

          {

            !isOpen ? <ChevronDown onClick={() => handleClick()} className="md:w-[34px] w-[24px]" /> : <ChevronUp onClick={() => handleClick} className="md:w-[34px] w-[24px] dark:text-md_theme_dark_primary text-md_theme_light_primary" />

          }

        </div>
        {isOpen &&
          <motion.div className="flex flex-row text-sm md:text-base tracking-wide md:w-3/4 justify-center space-y-4">
            <div className="flex flex-col">
              <div className="pb-4">
              {content}
              </div>
              <div className="pb-4">
              <MacroTable />
              </div>
            </div>
          </motion.div>}
        {

          !isOpen ? <hr className="w-3/3 md:w-3/4 border-md_theme_light_onBackground opacity-25 dark:opacity-15 dark:border-md_theme_dark_onPrimaryContainer" /> : <hr className="w-3/3 md:w-3/4 opacity-50 border-md_theme_light_primary dark:border-md_theme_dark_primary" />

        }
      </div>
    </motion.div>
  )

}