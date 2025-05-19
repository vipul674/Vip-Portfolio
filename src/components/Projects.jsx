function Projects() {
  return (
    <section id="projects" className="p-10 bg-gradient-to-br from-blue-50 to-purple-100 rounded-xl shadow-lg my-10 mx-auto max-w-4xl">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-purple-700 tracking-wide drop-shadow">Projects</h2>
      <ul className="space-y-6">
        <li className="bg-white rounded-lg shadow p-6 hover:bg-purple-50 transition">
          <span className="font-bold text-lg">Supervised Machine Learning: Regression and Classification</span><br/>
          <span className="text-gray-600">Certification project from DeepLearning.AI, Stanford University</span>
        </li>
        <li className="bg-white rounded-lg shadow p-6 hover:bg-purple-50 transition">
          <span className="font-bold text-lg">Data Structures and Algorithms Handwritten Notes</span><br/>
          <span className="text-gray-600">A curated collection of handwritten notes to help visualize and remember key concepts.</span>
        </li>
      </ul>
    </section>
  );
}

export default Projects;