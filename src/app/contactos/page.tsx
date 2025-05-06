import React from 'react';

const ContactosPage: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold text-center mb-6">Contactos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Informações de Contacto</h2>
          <p className="text-gray-700 mb-2">
            Estamos aqui para ajudar! Entre em contacto connosco através dos seguintes meios:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li><strong>Morada:</strong>edificio 445 b/MuculaNgola</li>
            <li><strong>Telefone:</strong> +244 948 53 11 87</li>
            <li><strong>Email:</strong>angroflor6@gmail.com.</li>
            {/* Adicione outras formas de contacto */}
          </ul>
          <h2 className="text-xl font-semibold mb-2">Horário de Atendimento</h2>
          <p className="text-gray-700">
            De segunda a sexta: 9h00 - 18h00
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Formulário de Contacto</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
              <input
                type="text"
                id="nome"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Seu Nome"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Seu Email"
              />
            </div>
            <div>
              <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700">Mensagem</label>
              <textarea
                id="mensagem"
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Sua Mensagem"
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactosPage;