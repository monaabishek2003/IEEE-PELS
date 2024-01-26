import { event_1,event_2,event_3,event_4 } from "../assets/images";
import { instagram,linkedin,gmail } from "../assets/icons";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    // { href: "#team", label: "Team" },
    { href: "#events", label: "Events" },
    { href: "#feedback", label: "Contact Us" },
];

export const events = [
    { imgURL:event_1, title:"Pixel Perfect Pitch"},
    { imgURL:event_2, title:"Converter Simulation"},
    { imgURL:event_3, title:"AI Workshop"},
    { imgURL:event_4, title:"Ideate"}
]

export const feedbacks = [
    {content:"“Engaging workshops! Amplified my understanding of power electronics. Exceptional hands-on experience. Invaluable learning opportunity.”",name:"Sanjay M , 2nd yr EEE"},
    {content:"“Innovative projects galore! Collaborative spirit, challenging tasks. Boosted creativity and problem-solving skills. A memorable experience.”",name:"Manasa , 3rd yr EEE"},
    {content:"“Connected with industry pros. Insightful talks and great networking opportunities. Enhanced my career prospects.”",name:"Rithvika , 2nd yr EEE"},
]

export const socialMedia = [
    { src: gmail, alt: "gmail logo",href:"mailto:ieeepels@ssn.edu.in" },
    { src: linkedin, alt: "linkedin logo",href:"https://www.linkedin.com/company/ssn-ieee-power-electronics-society/" },
    { src: instagram, alt: "instagram logo",href:"https://www.instagram.com/ssn_ieee_pels?igsh=dTB4YXBtNDRoejI4" },
];