import { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import eliraPhoto from "@/assets/elira-profile.png";

const HolographicIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Play voiceover
    const speakIntro = () => {
      if (!isMuted && 'speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance("Meet Elira, your executive partner in productivity.");
        const voices = speechSynthesis.getVoices();
        const britishVoice = voices.find(voice => 
          voice.lang.includes('en-GB') || voice.name.includes('British')
        );
        if (britishVoice) {
          utterance.voice = britishVoice;
        }
        utterance.rate = 0.9;
        utterance.pitch = 1.1;
        speechSynthesis.speak(utterance);
      }
    };

    // Delay to ensure voices are loaded
    setTimeout(speakIntro, 1000);

    // Auto-complete intro after 4 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800);
    }, 4000);

    return () => {
      clearTimeout(timer);
      speechSynthesis.cancel();
    };
  }, [onComplete, isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (!isMuted) {
      speechSynthesis.cancel();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background holographic-intro">
      {/* Particle Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Holographic Elira */}
      <div className="relative">
        <div className="absolute -inset-8 bg-gradient-hologram rounded-full blur-3xl animate-pulse glow-intense"></div>
        <div className="relative hologram-container">
          <img
            src={eliraPhoto}
            alt="Elira hologram"
            className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full hologram-effect"
          />
          <div className="absolute inset-0 bg-gradient-hologram rounded-full mix-blend-screen animate-pulse"></div>
        </div>
        
        {/* Tagline */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-2xl lg:text-3xl font-light text-primary glow-text">
            Meet Elira
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Your executive partner in productivity
          </p>
        </div>
      </div>

      {/* Mute Button */}
      <button
        onClick={toggleMute}
        className="fixed top-6 right-6 p-3 rounded-full glass-card hover:scale-110 transition-transform"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-muted-foreground" />
        ) : (
          <Volume2 className="w-5 h-5 text-secondary" />
        )}
      </button>

      {/* Skip Button */}
      <button
        onClick={() => {
          setIsVisible(false);
          setTimeout(onComplete, 300);
        }}
        className="fixed bottom-6 right-6 px-4 py-2 rounded-xl glass-card text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        Skip intro
      </button>
    </div>
  );
};

export default HolographicIntro;