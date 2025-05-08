import React from 'react';

const ContactosPage: React.FC = () => {
  return (
    <div className="w-full px-4 sm:px-6 py-8 sm:py-12 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-3">
            Contacte-nos
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos aqui para ajudar! Entre em contacto através dos seguintes meios:
          </p>
        </div>

        {/* Conteúdo principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Informações de contacto */}
          <div className="bg-indigo-50 p-6 sm:p-8 rounded-xl shadow-sm">
            <h2 className="text-xl sm:text-2xl font-semibold text-green-900 mb-4 pb-2 border-b border-green-200">
              Informações
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-green-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Morada</h3>
                  <p className="text-gray-600">Edifício 445 b/MuculaNgola, Luanda</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4 text-green-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Telefone</h3>
                  <p className="text-gray-600">+244 948 53 11 87</p>
                  <p className="text-gray-600">+244 924 00 65 89</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4 text-green-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <a href="mailto:angroflor6@gmail.com" className="text-green-600 hover:text-green-800">
                    angroflor6@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-green-200">
              <h3 className="font-semibold text-green-900 mb-3">Horário de Atendimento</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span>9h00 - 18h00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado:</span>
                  <span>9h00 - 13h00</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-semibold text-green-900 mb-6">
              Envie-nos uma mensagem
            </h2>
            
            <form className="space-y-5">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                  placeholder="Seu nome"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone (Opcional)
                </label>
                <input
                  type="tel"
                  id="telefone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                  placeholder="+244 ..."
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                  placeholder="Como podemos ajudar?"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg shadow-md transition duration-300"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactosPage;