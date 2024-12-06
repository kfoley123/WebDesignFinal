import {useState} from 'react';

export default function FAQ(){

    const FAQlist = [
        {
          question: "How many days notice do I need for a custom order?",
          answer: "We recommend at least 3-5 days notice for custom orders to ensure availability."
        },
        {
          question: "How much advanced notice to make an order?",
          answer: "For standard orders, we require at least 48 hours notice."
        },
        {
          question: "Where do you deliver?",
          answer: "We deliver within the Greater Toronto Area and select nearby regions."
        },
        {
          question: "How does payment work?",
          answer: "Payment is completed online during checkout or in-person at our shop."
        },
        {
          question: "What credit cards do you accept?",
          answer: "We accept Visa, MasterCard, and American Express."
        },
        {
          question: "Do you have gluten-free cupcakes?",
          answer: "Yes, we offer a variety of gluten-free options. Check our menu for details."
        },
        {
          question: "Do you use preservatives?",
          answer: "No, all our cupcakes are made fresh daily without any preservatives."
        },
        {
          question: "Toronto Cupcake Allergen Alert",
          answer: "Our cupcakes are made in a facility that handles nuts, dairy, and wheat. Please notify us of any allergies."
        },
        {
          question: "What is the smallest order I can make?",
          answer: "The smallest order is a single cupcake, available for pickup only."
        },
        {
          question: "What if no one is home when my delivery arrives?",
          answer: "Our driver will leave the package in a safe location or return it to the shop for pickup."
        },
        {
          question: "What times do you offer delivery?",
          answer: "Delivery is available between 10 AM and 6 PM daily."
        },
        {
          question: "Can I pick up instead of delivery?",
          answer: "Yes, you can choose the 'Pickup' option at checkout and collect your order from our store."
        },
        {
          question: "What are the delivery fees?",
          answer: "Delivery fees start at $5 and vary depending on your location."
        },
        {
          question: "Do you offer corporate event services?",
          answer: "Yes, we provide custom cupcakes and dessert setups for corporate events."
        },
        {
          question: "Do you offer custom cupcakes?",
          answer: "Absolutely! We can create custom designs, flavors, and decorations for any occasion."
        },
        {
          question: "How do I store my cupcakes?",
          answer: "Store cupcakes in a cool, dry place and avoid refrigeration to maintain freshness."
        }
      ];
    
      const [visibleText, setVisibleText] = useState(null);

    return (
        <div
        className="min-h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/sprinkles.jpg')" }}
      >
       
        <h1 className="font-bold text-white text-center drop-shadow-md text-5xl md:text-6xl py-8">
          FAQ
        </h1>
      
       
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 pb-5">
        
          {FAQlist.map((question, index) => (
            <div
              key={index}
              className="bg-white text-pink-500 p-4 rounded shadow-lg text-center text-sm font-medium hover:bg-blue-200"
              onClick={() => setVisibleText(visibleText === index ? null : index)}
            >
              {visibleText === index ? question.answer : question.question}
            </div>
          ))}
        </div>
      </div>
    )
}