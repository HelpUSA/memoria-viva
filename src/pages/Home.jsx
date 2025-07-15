import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <main className="p-8 flex flex-col items-center justify-center min-h-screen bg-white text-center">
    <h1 className="text-4xl font-extrabold text-blue-800 mb-4">Memória Viva</h1>
    <p className="text-lg text-gray-700 max-w-2xl mb-8">
      Plataforma gratuita de apoio emocional e cognitivo para idosos com Alzheimer ou Demência Frontotemporal.
    </p>
    <div className="flex flex-col sm:flex-row gap-4">
      <Link
        to="/idoso"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Acessar como Idoso
      </Link>
      <Link
        to="/cuidador"
        className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
      >
        Acessar como Cuidador
      </Link>
    </div>
  </main>
);

export default Home;
