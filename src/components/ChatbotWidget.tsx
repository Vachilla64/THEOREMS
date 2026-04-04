import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
if (!apiKey) {
  console.error("Gemini API Key is missing! Check your .env file.");
}

const genAI = new GoogleGenerativeAI(apiKey || "");
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: `You are the official Digital Assistant for Theorems Groups.

    CORE IDENTITY & MISSION:
    - You specialize in supplying high-quality "Made in India" production machines and raw materials.
    - Your primary markets are East and West African countries, and the Middle East.
    - Your mission is to create sustainable impact, improve living standards, and generate local employment in Africa.

    CATALOG & MACHINERY:
    - Plastics & Packaging: PET bottle making, disposable food containers, PVC pipes, automated injection molding.
    - Food & Beverage: Water/juice purification and filling lines, bakery equipment, rice and oil extraction mills, cassava starch lines.
    - Agriculture: Heavy-duty cultivators, disc harrows, diesel and EV tractors.
    - Hygiene: Sanitary pad machines, soap making, toothpick making.
    - Industrial: Hollow block machines, drilling rigs, paint mixers.

    SERVICES (YOUR UNIQUE SELLING POINTS):
    - End-to-end setup based on client budget.
    - Virgin raw materials supply (sometimes on credit agreement).
    - Free local installation, operator training, and maintenance training.
    - Third-party quality/quantity inspections by SGS, TUV, or COTECNA.
    - 10-Year Warranty (excluding electrical parts & wear-and-tear items).

    GLOBAL OFFICES & CONTACTS:
    - Dubai (Headquarters): +971 56 358 7400 | management@theoremsgroups.com
    - India (Impex Hub, Mumbai): +91 91674 30249
    - Nigeria (Abuja): +234 817 202 3940 | eofili@theorems.com
    - South Africa (Johannesburg): +27 (0) 11 236 8676 | mtichareva@NatStandard.co.za
    - Sierra Leone (Freetown): +232 78585656

    YOUR PERSONALITY & RULES:
    - Be highly professional, concise, and helpful. You are a B2B sales assistant.
    - NEVER invent products or prices. If a user asks for the price of a machine, tell them prices vary based on capacity and custom requirements, and guide them to "Request a Quote".
    - If a user asks a question outside the scope of machinery, manufacturing, or Theorems Groups, politely decline to answer and steer the conversation back to production setups.`,
});

type Message = {
  id: number;
  text: string;
  sender: "bot" | "user";
};

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null); // NEW: Ref to focus the input

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm the Theorems Digital Assistant. How can I help you scale your production today?",
      sender: "bot",
    },
  ]);

  const quickActions = [
    "Request a Quote",
    "Browse Machinery",
    "Speak to a Human",
  ];

  // --- NEW: The External Trigger Listener ---
  useEffect(() => {
    const handleOpenChat = () => {
      setIsOpen(true);
      // Slight delay to allow the animation to finish before focusing
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    };

    // Listen for the custom event from anywhere in the app
    window.addEventListener("open-chat", handleOpenChat);
    return () => window.removeEventListener("open-chat", handleOpenChat);
  }, []);
  // ------------------------------------------

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isTyping) return;

    const newUserMsg: Message = { id: Date.now(), text, sender: "user" };
    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue("");
    setIsTyping(true);

    try {
      const history = messages
        .filter((msg) => msg.id !== 1)
        .map((msg) => ({
          role: msg.sender === "user" ? "user" : "model",
          parts: [{ text: msg.text }],
        }));

      const chat = model.startChat({ history });
      const result = await chat.sendMessage(text);
      const responseText = result.response.text();

      const botResponse: Message = {
        id: Date.now() + 1,
        text: responseText,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error("Chat API Error:", error);
      const errorMsg: Message = {
        id: Date.now() + 1,
        text: "I'm having trouble connecting to my servers right now. Please try again later or email our team directly.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
      // Refocus input after bot replies
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  return (
    <>
      {/* The Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8">
        {/* Subtle glowing pulse behind the button */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-cgreen/40 blur-xl animate-pulse" />
        )}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative glass flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow-2xl transition-transform hover:scale-110 border border-gray-100"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.svg
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </motion.svg>
            ) : (
              <motion.img
                key="logo"
                src="/LOGO/clogo.png"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                className="hover:animate-spin h-9 w-9 object-contain drop-shadow-md"
              />
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* The Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut", type: "spring", damping: 25 }}
            // UPGRADED GLASSMORPHISM STYLING
            className="fixed bottom-28 right-4 z-50 flex h-[25.5rem] w-[calc(100vw-1.5rem)] max-w-sm flex-col overflow-hidden rounded-[2rem] border-0 glass border-white/40 bg-white/80 shadow-[0_8px_40px_rgba(0,0,0,0.15)] backdrop-blur-xl md:right-8"
          >
            {/* Header - Modern Gradient */}
            <div className="flex items-center gap-4 bg-gradient-to-r from-charcoal to-gray-800 p-5 text-white shadow-md z-10">
              
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 border border-white/5 backdrop-blur-sm">
                
                {/*<svg className="h-6 w-6 text-cgreen drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73A2 2 0 1 1 12 2z" />
                </svg>*/}
                <img src="/LOGO/clogo.png" className="size-6 animate-" />
                
                {/* Glowing Online Indicator */}
                <div className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-charcoal bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
              </div>
              <div>
                <h3 className="text-lg font-extrabold tracking-tight">
                  Theorems Export
                </h3>
                <p className="text-xs font-medium text-cgreen/90 tracking-wide">Theorems Groups • Online</p>
              </div>
            </div>

            {/* Messages Area - Subtle Pattern Background */}
            <div className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-50/50 to-white/50 p-5">
              <div className="flex flex-col gap-5">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[85%] rounded-2xl px-5 py-3.5 text-sm leading-relaxed shadow-sm ${
                        msg.sender === "user"
                          ? "rounded-br-sm bg-gradient-to-br from-cgreen to-green-700 text-white font-medium"
                          : "rounded-bl-sm bg-white text-gray-800 border border-gray-100"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {/* Loading Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-white px-5 py-4 text-sm shadow-sm border border-gray-100 flex gap-1.5 items-center">
                      <span className="w-2 h-2 bg-cgreen/60 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-cgreen/60 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                      <span className="w-2 h-2 bg-cgreen/60 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
                    </div>
                  </div>
                )}

                {/* Quick Actions */}
                {!isTyping && messages[messages.length - 1].sender === "bot" && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {quickActions.map((action) => (
                      <button
                        key={action}
                        onClick={() => handleSend(action)}
                        className="rounded-full border border-cgreen/20 bg-white px-4 py-2 text-xs font-bold text-cgreen shadow-sm transition-all hover:bg-cgreen hover:text-white hover:shadow-md"
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Form */}
            <div className="bg-white/90 border-t border-gray-100 p-4 backdrop-blur-md">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(inputValue);
                }}
                className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50/50 px-2 py-2 pr-2 shadow-inner transition-all focus-within:border-cgreen/50 focus-within:bg-white focus-within:ring-4 focus-within:ring-cgreen/10"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled={isTyping}
                  placeholder={isTyping ? "Assistant is typing..." : "Type your message..."}
                  className="w-full bg-transparent px-4 text-sm text-gray-800 outline-none disabled:opacity-50 placeholder-gray-400"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cgreen text-white transition-all hover:bg-black hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                >
                  <svg className="h-4 w-4 ml-0.5 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
