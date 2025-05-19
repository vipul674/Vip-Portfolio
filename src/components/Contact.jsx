function Contact() {
  return (
    <section id="contact" className="p-10 bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-xl shadow-lg my-10 mx-auto max-w-4xl">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-purple-700 tracking-wide drop-shadow">Contact</h2>
      <ul className="space-y-4 text-lg text-gray-700 font-medium text-center">
        <li className="bg-white rounded-lg shadow p-4">Email: <a href="mailto:vipulponugoti@gmail.com" className="text-blue-700 underline">vipulponugoti@gmail.com</a></li>
        <li className="bg-white rounded-lg shadow p-4">LinkedIn: <a href="https://www.linkedin.com/in/vipul-ponugoti-3a731928b/" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">vipul-ponugoti-3a731928b</a></li>
        <li className="bg-white rounded-lg shadow p-4">Location: Vadodara, Gujarat, India</li>
      </ul>
    </section>
  );
}

export default Contact;