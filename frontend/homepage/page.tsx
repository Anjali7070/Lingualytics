"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from '../components/ui/lamp';
import { TypewriterEffectSmooth } from '../components/ui/typewriter-effect';
import { Textarea } from "@/components/ui/textarea"
import axios from 'axios';


export function Homepage() {
    const words = [
        {
          text: "Predict",
        },
        {
          text: "Age",
        },
        {
          text: "and",
        },
        {
          text: "Gender",
        },
        {
          text: "with",
        },
        {
          text: "Lingualytics",
          className: "text-blue-600",
        },
      ];

      const [peepoo, setPeepoo] = React.useState([{text: 'submit'}]);
      const predict = async () => {
        const text = document.querySelector('textarea').value;
        const res = await axios.post('http://192.168.209.52:5000/predict', {text});
        console.log(res);
        setPeepoo([{text: res.data.gender, className: 'text-blue-600'}, {text : ","}, {text: String(res.data.age)}]);
      }
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-6 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        
      </motion.h1>
      <TypewriterEffectSmooth words={words} />

      <div className="w-full flex flex-col items-center">
        <Textarea placeholder="Enter you phrase here" />
        <button onClick={predict} className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-200">
            <TypewriterEffectSmooth words={peepoo} />
        </button>
        <p></p>
      </div>
      
    </LampContainer>
  );
}
