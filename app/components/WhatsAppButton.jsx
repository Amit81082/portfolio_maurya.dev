import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918108256345?text=Hi%20Amit,%20I%20saw%20your%20portfolio.%20Can%20we%20discuss%20a%20project%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}
