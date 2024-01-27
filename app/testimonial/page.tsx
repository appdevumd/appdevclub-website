"use client";

import Header from "@/components/Header";
import Card from "@/components/Card";
import { useState } from "react";
import { api } from "@/utils/api";
import { useEffect } from "react";

interface SuccessMessageProps {
    show: boolean;
  }
  
  function SuccessMessage({ show }: SuccessMessageProps) {
    const [isVisible, setIsVisible] = useState(show);
  
    useEffect(() => {
      setIsVisible(show);
      if (show) {
        const timer = setTimeout(() => {
          setIsVisible(false);
        }, 3000);
    
        return () => clearTimeout(timer);
      }
    }, [show]);
    
  
    const messageStyles: React.CSSProperties = {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      padding: '10px 20px',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 0.3s ease-in-out',
      zIndex: 10000,
    };
  
    return (
      <div style={messageStyles} className={`success-message ${isVisible ? 'visible' : ''}`}>
        Thanks for leaving a testimonial!
      </div>
    );
  }

export default function Page() {
    const [name, setName] = useState("");
    const [testimonial, setTestimonial] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const submitForm = () => api.get(`?target=create_testimonial&name=${encodeURIComponent(name)}&testimonial=${encodeURIComponent(testimonial)}`)
            .text()
            .then((t) => {
                setSubmitted(true);
                setName('');
                setTestimonial('');
            });

    return (
        <main>
            <Header title="Write a testimonial" subtitle={`Let us know what you think!`} />

            <Card title="Testimonial Form">
                <form id="testimonial_form" onSubmit={e => {
                    e.preventDefault();
                    submitForm();
                }}>
                    <h4>Your Name</h4>
                    <input 
                        type="text" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required 
                        placeholder="Type your name here." 
                    />
                    <br /><br />
                    <h4>Testimonial (max 250 chars.)</h4>
                    <textarea 
                        required 
                        maxLength={250}
                        value={testimonial}
                        onChange={e => setTestimonial(e.target.value)}
                        placeholder="Write your thoughts here.">
                    </textarea>

                    <br /><br />

                    <button type="submit" className="btn" disabled={name.trim() === "" || testimonial.trim() === ""}>
                        Submit!
                    </button>
                </form>
                <SuccessMessage show={submitted} />
            </Card>   
        </main>
    );
}