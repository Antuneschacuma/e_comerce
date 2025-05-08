import React from 'react';
import Image from 'next/image';

const SobreNosPage: React.FC = () => {
    return (
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-3xl font-semibold text-center mb-8">Sobre Nós</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Seção Nossa História */}
                <div>
                    <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                        <Image
                            src="/images/investment-5241253_1280.jpg"
                            alt="Nossa equipe trabalhando em projetos criativos"
                            layout="responsive"
                            width={800}
                            height={600}
                            objectFit="cover"
                            className="rounded-lg"
                            priority
                        />
                    </div>
                    <h2 className="text-2xl font-semibold mb-4">Nossa História</h2>
                    <p className="text-gray-700 mb-6">
                        ANGRO-FLOR nasceu da paixão por transformar espaços em verdadeiros oásis urbanos.
                        Começamos como uma pequena equipa de apaixonados por natureza, determinados a levar beleza, harmonia e sustentabilidade para jardins e áreas exteriores de Luanda.
                    </p>
                    <p className="text-gray-700 mb-6">
                        Ao longo dos anos, cultivamos não apenas plantas, mas também relações duradouras com nossos clientes, tornando-nos referência em projetos de paisagismo e manutenção de jardins.
                        Nossa equipa é composta por especialistas certificados em jardinagem ornamental, paisagismo sustentável e sistemas de irrigação inteligente.
                        Combinamos sensibilidade artística com conhecimento técnico para criar ambientes que encantam os sentidos e respeitam o ecossistema.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">O que nos diferencia:</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li><span className="font-medium">Design personalizado:</span> Cada projeto é único, criado para refletir sua personalidade e estilo de vida.</li>
                        <li><span className="font-medium">Plantas selecionadas:</span> Trabalhamos com espécies adaptadas ao clima local e de baixa manutenção.</li>
                        <li><span className="font-medium">Sustentabilidade:</span> Implementamos sistemas de reaproveitamento de água e jardins ecológicos.</li>
                        <li><span className="font-medium">Manutenção especializada:</span> Cuidamos do seu jardim como se fosse nosso, com técnicas profissionais.</li>
                        <li><span className="font-medium">Compromisso:</span> Da concepção à execução, cultivamos sonhos verdes que florescem ano após ano.</li>
                    </ul>
                </div>

                {/* Seção Nossos Valores e Missão */}
                <div>
                    <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                        <Image
                            src="/images/ailerons-1929403_1280.jpg"
                            alt="Nossos valores e princípios"
                            layout="responsive"
                            width={800}
                            height={600}
                            objectFit="cover"
                            className="rounded-lg"
                            priority
                        />
                    </div>
                    <h2 className="text-2xl font-semibold mb-4">Nossos Valores</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li><span className="font-medium">Excelência:</span> Entregamos apenas o melhor, superando expectativas em cada projeto.</li>
                        <li><span className="font-medium">Inovação:</span> Pioneiros em adoptar novas tecnologias e abordagens criativas.</li>
                        <li><span className="font-medium">Parceria:</span> Nosso sucesso é medido pelo crescimento dos nossos clientes.</li>
                        <li><span className="font-medium">Transparência:</span> Relatórios claros e comunicação honesta em todas as etapas.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">Nossa Missão</h2>
                    <p className="text-gray-700">
                        Transformar espaços externos em refúgios naturais de harmonia e beleza. Através de projetos personalizados
                        e cuidados especializados, ajudamos nossos clientes a cultivar ambientes que renovam a conexão com a natureza,
                        elevam o valor de seus imóveis e promovem o bem-estar através do contato com o verde.
                    </p>
                </div>
            </div>

            {/* Seção Conheça Nosso Time */}
            <div className="mt-16">
                <h2 className="text-2xl font-semibold mb-8 text-center">Conheça Nosso Time</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    <div className="text-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="relative w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-blue-100">
                            <Image
                                src="/images/IMG_20230604_064623.jpg"
                                alt="Antunes Chacuma"
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                            />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Antunes Chacuma</h3>
                        <p className="text-sm text-gray-500 mb-2">Desenvolvedor web e Gestor de marketing</p>
                        <p className="text-sm text-gray-600">Especialista em criar experiências digitais que convertem visitantes em clientes.</p>
                    </div>
                    <div className="text-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="relative w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-blue-100">
                            <Image
                                src="/images/WhatsApp Image 2025-05-06 at 15.04.00.jpeg"
                                alt="Alberto Jacinto"
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                            />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Alberto Jacinto</h3>
                        <p className="text-sm text-gray-500 mb-2">Director Executivo</p>
                        <p className="text-sm text-gray-600">Visão estratégica para guiar nossa Plataforma e nossos clientes rumo ao sucesso.</p>
                    </div>
                    {/* Adicione mais membros da equipe aqui */}
                </div>
            </div>
        </div>
    );
};

export default SobreNosPage;