// Skills.jsx
function Skills() {
  return (
    <section id="skills" className="p-10 bg-gradient-to-br from-blue-50 to-purple-100 rounded-xl shadow-lg my-10 mx-auto max-w-4xl">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-purple-700 tracking-wide drop-shadow">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 text-lg font-medium text-gray-700">
        <li className="bg-white rounded-lg shadow p-4 hover:bg-purple-50 transition">Python (Scikit-learn, Pandas, Matplotlib)</li>
        <li className="bg-white rounded-lg shadow p-4 hover:bg-purple-50 transition">Data Science</li>
        <li className="bg-white rounded-lg shadow p-4 hover:bg-purple-50 transition">Machine Learning</li>
        <li className="bg-white rounded-lg shadow p-4 hover:bg-purple-50 transition">Regression & Classification</li>
        <li className="bg-white rounded-lg shadow p-4 hover:bg-purple-50 transition">Data Preprocessing</li>
        <li className="bg-white rounded-lg shadow p-4 hover:bg-purple-50 transition">Feature Engineering</li>
        <li className="bg-white rounded-lg shadow p-4 hover:bg-purple-50 transition">Model Evaluation</li>
        <li className="bg-white rounded-lg shadow p-4 hover:bg-purple-50 transition">API Development (Flask)</li>
      </ul>
    </section>
  );
}

export default Skills;
