// Nuances Landing Page - v1

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function NuancesLanding() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-center mb-4"
      >
        Nuances
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.4 }}
        className="text-lg md:text-xl text-center max-w-2xl mb-8"
      >
        Create your digital self. Capture your voice, memories, and mindset — and evolve your AI avatar over time.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.6 }}
        className="w-full max-w-md"
      >
        <Card className="bg-white/5 backdrop-blur-md border-white/10 border">
          <CardContent className="p-6 flex flex-col gap-4">
            <p className="text-white text-center text-lg font-medium">Be the first to try Nuances</p>
            <Input placeholder="Your email" className="bg-white/10 text-white placeholder-white/50" />
            <Button className="bg-white text-black hover:bg-gray-200">Join the Waitlist</Button>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 1 }}
        className="mt-12 w-full max-w-3xl"
      >
        <Card className="bg-white/5 backdrop-blur-md border-white/10 border p-4">
          <p className="text-white text-lg font-semibold mb-2">🧠 Chat with Digital Milen</p>
          <p className="text-white/70 text-sm mb-4">Get a taste of what Nuances will offer by talking to one of the earliest digital avatars.</p>
          <iframe 
            src="https://t.me/milen_mind_bot" 
            className="w-full h-96 rounded-xl border-none"
            title="Chat with Digital Milen"
          />
        </Card>
      </motion.div>
    </div>
  );
}
