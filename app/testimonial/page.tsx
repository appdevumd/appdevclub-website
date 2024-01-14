"use client";

import Header from "@/components/Header";
import Card from "@/components/Card";
import { useState } from "react";
import { api } from "@/utils/api";

export default function Page() {
    const [name, setName] = useState("");
    const [testimonial, setTestimonial] = useState("");

    const submitForm = () => api.post("", {
        name,
        testimonial
    })
        .text()
        .then(t => alert(t));

    return (
        <main>
            <Header title="Write a testimonial" subtitle={`Let us know what you think!`} />

            <Card title="Testimonial Form">
                <form onSubmit={e => {
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
            </Card>   
        </main>
    );
}