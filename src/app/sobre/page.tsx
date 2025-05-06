import React from 'react';
import Image from 'next/image';

const SobreNosPage: React.FC = () => {
    return (
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-3xl font-semibold text-center mb-6">Sobre Nós</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                        <Image
                            src="/images/investment-5241253_1280.jpg"
                            alt="Nossa equipe trabalhando em projetos criativos"
                            layout="responsive"
                            width={800}
                            height={600}
                            objectFit="contain"
                            className="rounded-lg"
                            priority
                        />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Nossa História</h2>
                    <p className="text-gray-700 mb-4">

                        ANGRO-FLOR nasceu da paixão por transformar espaços em verdadeiros oásis urbanos.
                        Começamos como uma pequena equipa de apaixonados por natureza, determinados a levar beleza, harmonia e sustentabilidade para jardins e áreas exteriores de Luanda.
                        Ao longo dos anos, cultivamos não apenas plantas, mas também relações duradouras com nossos clientes, tornando-nos referência em projetos de paisagismo e manutenção de jardins
                        Nossa equipa é composta por especialistas certificados em jardinagem ornamental, paisagismo sustentável e sistemas de irrigação inteligente.
                        Combinamos sensibilidade artística com conhecimento técnico para criar ambientes que encantam os sentidos e respeitam o ecossistema.

                       <br/><br/>  <h2 className="text-xl font-semibold mb-2">O que nos diferencia:</h2>

                        Design personalizado: Cada projeto é único, criado para refletir sua personalidade e estilo de vida
                        Plantas selecionadas: Trabalhamos com espécies adaptadas ao clima local e de baixa manutenção
                        Sustentabilidade: Implementamos sistemas de reaproveitamento de água e jardins ecológicos
                        Manutenção especializada: Cuidamos do seu jardim como se fosse nosso, com técnicas profissionais
                        Da concepção à execução, cultivamos sonhos verdes que florescem ano após ano
                    </p>
                </div>
                <div>
                    <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                        <Image
                            src="/images/ailerons-1929403_1280.jpg"
                            alt="Nossos valores e princípios"
                            layout="responsive"
                            width={800}
                            height={600}
                            objectFit="contain"
                            className="rounded-lg"
                            priority
                        />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Nossos Valores</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li><span className="font-medium">Excelência:</span> Entregamos apenas o melhor, superando expectativas em cada projeto.</li>
                        <li><span className="font-medium">Inovação:</span> Pioneiros em adoptar novas tecnologias e abordagens criativas.</li>
                        <li><span className="font-medium">Parceria:</span> Nosso sucesso é medido pelo crescimento dos nossos clientes.</li>
                        <li><span className="font-medium">Transparência:</span> Relatórios claros e comunicação honesta em todas as etapas.</li>
                    </ul>
                    <h2 className="text-xl font-semibold mt-6 mb-2">Nossa Missão</h2>
                    <p className="text-gray-700">
                        Transformar espaços externos em refúgios naturais de harmonia e beleza. Através de projetos personalizados
                        e cuidados especializados, ajudamos nossos clientes a cultivar ambientes que renovam a conexão com a natureza,
                        elevam o valor de seus imóveis e promovem o bem-estar através do contato com o verde.
                    </p>
                </div>
            </div>

       
            <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-6 text-center">Conheça Nosso Time</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="relative w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-blue-100">
                            <Image
                                src="/images/IMG_20230604_064623.jpg"
                                alt="Antunes Chacuma"
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                            />
                        </div>
                        <h3 className="text-lg font-semibold">Antunes Chacuma</h3>
                        <p className="text-sm text-gray-500 mb-2">Desenvolvedor web e Gestor de marketing</p>
                        <p className="text-sm text-gray-600">Especialista em criar experiências digitais que convertem visitantes em clientes.</p>
                    </div>
                    <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="relative w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-blue-100">
                            <Image
                                src="/images/Gemini_Generated_Image_p82uqwp82uqwp82u.jpeg"
                                alt="Joana Domingos"
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                            />
                        </div>
                        <h3 className="text-lg font-semibold">Joana Domingos</h3>
                        <p className="text-sm text-gray-500 mb-2">Gerente de Atendimento</p>
                        <p className="text-sm text-gray-600">Garante que cada cliente receba atenção personalizada e soluções sob medida.</p>
                    </div>
                    <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="relative w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-blue-100">
                            <Image
                                src="/images/WhatsApp Image 2025-05-06 at 15.04.00.jpeg"
                                alt="Carlos Zanganha"
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                            />
                        </div>
                        <h3 className="text-lg font-semibold">Alberto Jacinto</h3>
                        <p className="text-sm text-gray-500 mb-2">Director Executivo</p>
                        <p className="text-sm text-gray-600">Visão estratégica para guiar nossa Plataforma e nossos clientes rumo ao sucesso.</p>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default SobreNosPage;