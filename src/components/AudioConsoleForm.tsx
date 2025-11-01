import { useState, useEffect } from 'react';
import { Send, Mic } from 'lucide-react';
import Button from './Button';

export default function AudioConsoleForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [messageLevel, setMessageLevel] = useState(0);
  const [isRecording, setIsRecording] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Calculate message level based on character count
    if (name === 'message') {
      const level = Math.min((value.length / 500) * 100, 100);
      setMessageLevel(level);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRecording(true);
    
    // Simulate recording animation
    setTimeout(() => {
      const subject = encodeURIComponent('Project Inquiry');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:srishtishastri@gmail.com?subject=${subject}&body=${body}`;
      setIsRecording(false);
    }, 800);
  };

  return (
    <div className="audio-console-container">
      {/* Console Panel Header */}
      <div className="console-header glass-card rounded-t-2xl p-4 border-b-2 border-[#8FB3F5]/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" aria-hidden="true"></div>
            <span className="text-[#8FB3F5] font-bold text-sm tracking-wider">CHANNEL 01 // PROJECT INQUIRY</span>
          </div>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-[#8FB3F5]" aria-hidden="true"></div>
            <div className="w-2 h-2 rounded-full bg-[#8FB3F5]" aria-hidden="true"></div>
            <div className="w-2 h-2 rounded-full bg-[#8FB3F5]" aria-hidden="true"></div>
          </div>
        </div>
      </div>

      {/* Console Body */}
      <form onSubmit={handleSubmit} className="glass-card rounded-b-2xl p-6 space-y-6">
        {/* Input Channels */}
        <div className="space-y-4">
          {/* Channel 1: Name */}
          <div className="console-channel">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="name" className="text-xs font-bold text-[#8FB3F5] tracking-wider uppercase">
                CH1 // Name Input
              </label>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-3 rounded-sm transition-all ${
                      formData.name.length > i * 3
                        ? 'bg-gradient-to-t from-green-500 to-green-400'
                        : 'bg-[#1f2738]'
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-[#8FB3F5]/30 glass-card text-[#e8f0f8] focus:border-[#8FB3F5] focus:outline-none transition-colors font-mono text-sm"
              placeholder="Enter your name..."
            />
          </div>

          {/* Channel 2: Email */}
          <div className="console-channel">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="email" className="text-xs font-bold text-[#8FB3F5] tracking-wider uppercase">
                CH2 // Email Input
              </label>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-3 rounded-sm transition-all ${
                      formData.email.length > i * 4
                        ? 'bg-gradient-to-t from-blue-500 to-blue-400'
                        : 'bg-[#1f2738]'
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-[#8FB3F5]/30 glass-card text-[#e8f0f8] focus:border-[#8FB3F5] focus:outline-none transition-colors font-mono text-sm"
              placeholder="your.email@domain.com"
            />
          </div>

          {/* Channel 3: Message */}
          <div className="console-channel">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="message" className="text-xs font-bold text-[#8FB3F5] tracking-wider uppercase">
                CH3 // Message Buffer
              </label>
              {/* VU Meter for message length */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#a8bcd4]">{formData.message.length}/500</span>
                <div className="flex gap-[2px]">
                  {[...Array(10)].map((_, i) => {
                    const threshold = (i + 1) * 10;
                    let colorClass = 'bg-green-500';
                    if (threshold > 70) colorClass = 'bg-yellow-500';
                    if (threshold > 90) colorClass = 'bg-red-500';
                    
                    return (
                      <div
                        key={i}
                        className={`w-1 h-4 rounded-sm transition-all ${
                          messageLevel >= threshold ? colorClass : 'bg-[#1f2738]'
                        }`}
                        aria-hidden="true"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              maxLength={500}
              className="w-full px-4 py-3 rounded-lg border-2 border-[#8FB3F5]/30 glass-card text-[#e8f0f8] focus:border-[#8FB3F5] focus:outline-none transition-colors resize-none font-mono text-sm leading-relaxed"
              placeholder="Describe your project, requirements, timeline..."
            />
          </div>
        </div>

        {/* Console Controls */}
        <div className="glass-card rounded-lg p-4 border border-[#8FB3F5]/20">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Mic className={`w-5 h-5 ${isRecording ? 'text-red-500 animate-pulse' : 'text-[#8FB3F5]'}`} aria-hidden="true" />
              <span className="text-xs text-[#a8bcd4] font-mono">
                {isRecording ? 'TRANSMITTING...' : 'READY TO TRANSMIT'}
              </span>
            </div>
            <div className="flex gap-1">
              <div className={`w-2 h-2 rounded-full ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-[#8FB3F5]'}`} aria-hidden="true"></div>
              <div className={`w-2 h-2 rounded-full ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-[#8FB3F5]/50'}`} aria-hidden="true"></div>
            </div>
          </div>

          {/* Submit Button styled as Record button */}
          <button
            type="submit"
            disabled={isRecording}
            className={`w-full py-4 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-3 ${
              isRecording
                ? 'bg-red-600 text-white animate-pulse'
                : 'bg-gradient-to-r from-[#6B8DD6] via-[#8FB3F5] to-[#9BC8FF] text-[#0e1320] hover:shadow-xl hover:scale-105'
            }`}
            aria-label={isRecording ? 'Sending message' : 'Send message'}
          >
            {isRecording ? (
              <>
                <div className="w-3 h-3 rounded-full bg-white animate-pulse" aria-hidden="true"></div>
                <span>TRANSMITTING</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" aria-hidden="true" />
                <span>Transmit Message</span>
              </>
            )}
          </button>
        </div>

        {/* Technical Specs Footer */}
        <div className="text-xs text-[#a8bcd4] font-mono text-center space-y-1">
          <p>SAMPLE RATE: 48kHz // BIT DEPTH: 24-bit // LATENCY: &lt;2ms</p>
          <p className="text-[#8FB3F5]">Direct line to: srishtishastri@gmail.com</p>
        </div>
      </form>
    </div>
  );
}
