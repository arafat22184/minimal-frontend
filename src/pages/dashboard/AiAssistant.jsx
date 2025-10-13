import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import SendMessageSVG from "../../components/SVG/DashboardSvg/AiAssistant/SendMessageSVG";
import MicrophoneSVG from "../../components/SVG/DashboardSvg/AiAssistant/MicrophoneSVG";

const socket = io("http://localhost:5000");

const AiAssistant = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi there 👋! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null); // Ref to scroll to bottom

  useEffect(() => {
    socket.on("botReply", (msg) => {
      setMessages((prev) => [...prev, { sender: "bot", text: msg }]);
      setIsTyping(false);
    });

    return () => {
      socket.off("botReply");
    };
  }, []);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setIsTyping(true);
    socket.emit("userMessage", input);
    setInput("");
  };

  return (
    <div className="p-10 flex flex-col h-[82vh] bg-white rounded-2xl shadow-md">
      {/* Messages container */}
      <div className="flex-1 overflow-y-auto space-y-2">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${
              m.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-[75%] ${
                m.sender === "user"
                  ? "bg-[#2094F3] text-white rounded-br-none"
                  : "bg-[#F4F6F8] text-black rounded-bl-none"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}

        {/* Bot typing indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-[#F4F6F8] px-4 py-2 rounded-2xl rounded-bl-none flex items-center gap-1 max-w-[10%] animate-pulse">
              <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-75"></span>
              <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150"></span>
              <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-300"></span>
            </div>
          </div>
        )}

        {/* Dummy div to scroll into view */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="flex gap-10 mt-4 relative">
        <input
          type="text"
          className="flex-1 border pl-6 pr-18 py-2 rounded-full drop-shadow-md drop-shadow-[#2094F338]"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type your question here..."
        />
        <button
          onClick={handleSend}
          className="text-[#919EAB] rounded-full hover:text-blue-400 absolute right-34 top-1/3 cursor-pointer"
        >
          <SendMessageSVG />
        </button>
        <button className="bg-white p-4.5 drop-shadow-md drop-shadow-[#2094F338] rounded-full hover:bg-blue-200 cursor-pointer">
          <MicrophoneSVG />
        </button>
      </div>
    </div>
  );
};

export default AiAssistant;
