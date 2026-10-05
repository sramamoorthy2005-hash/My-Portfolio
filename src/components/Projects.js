import ecommerce from '../assets/project/ecommerce.jpg'
import cyber from '../assets/project/cybersecurity.jpg'
import reduxecommerce from '../assets/project/reduxCommerce.png'

const Projects = [
    {
        id:1,
        name:'E-Commerce',
        img:ecommerce,
        stack:"MongoDB | Express.js | React.js | Node.js | JWT",
        des1:"Built an end-to-end e-commerce web platform featuring secure JWT authentication and dynamic cart workflows.",
        des2:"Implemented a multi-step checkout pipeline with Cash on Delivery (COD) and real-time MongoDB inventory decrement logic.",
        des3:"Engineered high-performance RESTful APIs in Express.js with clean separation of concerns and protected route handlers."
    },
    {
        id:2,
        name:'Redux E-commerce',
        img:reduxecommerce,
        stack:"React.js | Redux Toolkit | React Router | Tailwind CSS",
        des1:"Built an interactive e-commerce web client utilizing Redux Toolkit for unified global state management across cart workflows and user wishlists.",
        des2:"Engineered dynamic stock validation and inventory sync logic that automatically adjusts quantities.",
        des3:"Designed a responsive UI with Tailwind CSS featuring client-side multi-page routing, real-time cart badge counters, and instant product availability indicators."
    },
    {
        id:3,
        name:'Blockchain-Based Secure Digital Forensics',
        img:cyber,
        stack:"Python | Blockchain | MySQL | IPFS | SHA-256",
        des1:"Developed a blockchain-based digital evidence management system ensuring integrity using SHA-256 hashing and smart contracts",
        des2:"Integrated IPFS for decentralized storage, storing CID and hash on blockchain for tamper-proof verification.",
        des3:"Implemented backend APIs and chain-of-custody logging for secure evidence upload, tracking, and validation."
    }
]




export default Projects