import React from 'react';
import { useState, useEffect } from 'react';

const removeFloating = () => {

  document.querySelectorAll('[style="position: fixed"][style="bottom: 1rem"][style="right: 1rem"][style="z-index: 2147483647"]').forEach(el => el.remove());

};



// executa já no load

removeFloating();



// observa mudanças no DOM

const observer = new MutationObserver(removeFloating);

observer.observe(document.body, { childList: true, subtree: true });
    

import { CheckCircle, Star, Shield, Clock, Heart, Gift, CreditCard, Smartphone } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState(9 * 60 + 59); // 9:59 em segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleCTAClick = () => {
    window.open('https://pay.cakto.com.br/k9smfbw_556174?utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term=', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-center">
          <img 
            src="https://i.imgur.com/QMobrc8.png" 
            alt="Logo A Rotina que Toda Mulher Precisa" 
            className="h-12 md:h-16 object-contain"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-gradient-to-r from-pink-100 to-purple-100 rounded-full px-6 py-2 mb-8">
            <span className="text-pink-600 font-medium text-sm">✨ Transforme sua rotina hoje mesmo</span>
          </div>
          
          <div className="inline-block bg-gradient-to-r from-green-400 to-blue-500 rounded-full px-4 py-2 mb-6 animate-pulse shadow-lg">
            <span className="text-white font-bold text-sm">📱 APLICATIVO GRÁTIS</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            🏠 <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">A Rotina que Toda Mulher Precisa</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            <strong>Menos Tempo Limpando, Mais Tempo Vivendo</strong><br />
            Uma nova forma de organizar sua casa com leveza, clareza e motivação — mesmo que sua rotina seja corrida e cansativa. Agora, com um aplicativo exclusivo e gratuito para guiar sua jornada!
          </p>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <p className="text-2xl text-pink-600 font-bold mb-4">✨ Transforme sua casa em um verdadeiro lar com apenas 2h por dia.</p>
          </div>
          
          <button 
            onClick={handleCTAClick}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 mb-8"
          >
            [QUERO ORGANIZAR MINHA CASA AGORA E GANHAR O APP!]
          </button>
          
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-md mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
                <iframe
                  src="https://www.youtube.com/embed/ik1r-a0hGeQ"
                  title="A Rotina que Toda Mulher Precisa"
                  className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Se você sente que o trabalho da casa nunca acaba...
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Se você sente que sempre tem algo por fazer, e mesmo com esforço a bagunça volta... 
            <strong> Você não está sozinha.</strong> Eu sei exatamente como é essa sensação.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-pink-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4">O Problema</h3>
              <p className="text-gray-600">
                Por anos, repeti a rotina de faxina que aprendi com minha mãe — que aprendeu com a minha vó. 
                Mas sabe o que descobri? <strong>Isso não funciona mais.</strong>
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4">A Solução</h3>
              <p className="text-gray-600">
                Foi aí que conheci o <strong>Kanban</strong>, uma metodologia de organização japonesa — simples, visual e extremamente eficiente — e adaptei para minha realidade de mulher, dona de casa e mãe.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-2xl">
            <p className="text-xl font-bold text-gray-800">
              Hoje, minha casa é limpa e organizada com apenas 2 horas por dia, sem estresse, sem peso e com muito mais paz.
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            🌀 Você também pode transformar sua rotina
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            com o nosso <strong>Programa de Organização</strong>
          </p>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Esse método é pra você que:</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Já chorou de frustração ao ver a casa bagunçada, sem saber por onde começar",
                "Se sente cansada e culpada por não dar conta de tudo",
                "Tenta mil métodos diferentes, mas sente que está sempre falhando",
                "Acredita que a organização da casa não pode consumir sua vida"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-pink-50 rounded-xl">
                  <Heart className="text-pink-500 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="https://i.imgur.com/sWdeRem.png" 
              alt="Organização doméstica" 
              className="rounded-2xl shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            💡 O que você vai aprender no programa:
          </h2>
          
          <div className="space-y-6 mb-12">
            {[
              {
                icon: "🔹",
                title: "O Método Kanban Doméstico",
                description: "Aprenda a usar um sistema visual que transforma sua faxina em tarefas simples e organizadas."
              },
              {
                icon: "🔹",
                title: "Cronograma de Limpeza Realista",
                description: "Funciona mesmo com TDAH, rotina cheia ou filhos pequenos."
              },
              {
                icon: "🔹",
                title: "Planner Editável Digital",
                description: "Planeje e programe sua semana no celular, tablet ou computador."
              },
              {
                icon: "🔹",
                title: "Lista Inteligente de Compras",
                description: "Nunca mais esqueça um produto — economize tempo e dinheiro no mercado."
              },
              {
                icon: "🔹",
                title: "Cartões de Limpeza (Cards)",
                description: "Instruções visuais para cada etapa. Clareza total, sem estresse."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}:</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button 
              onClick={handleCTAClick}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              [QUERO ORGANIZAR MINHA CASA AGORA E GANHAR O APP!]
            </button>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            💥 E tem mais! Você ainda leva 3 bônus incríveis:
          </h2>
          
          <div className="mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl mb-8">
              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Smartphone className="text-blue-600" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🎁 BÔNUS EXCLUSIVO E GRATUITO:</h3>
              <h4 className="text-xl font-bold text-blue-600 mb-4">Aplicativo Meu Lar Organizado</h4>
              <p className="text-gray-600 mb-6">Seu painel de controle completo para uma vida leve. Com o nosso app, você vai gerenciar tudo em um só lugar:</p>
              
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>Organização do Lar:</strong> Gerencie as tarefas de cada cômodo.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>Finanças Familiares:</strong> Controle suas receitas e despesas.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>Planejamento Familiar:</strong> Organize o calendário e os compromissos de todos.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>Bem-Estar:</strong> Defina e monitore suas metas de saúde e bem-estar.</span>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mb-6">🎁 BÔNUS ADICIONAIS:</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Gift className="text-pink-600" size={24} />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-3">🎯 Planner de Produtividade Feminina</h4>
                <p className="text-gray-600 text-sm">Para equilibrar vida pessoal, casa e trabalho com mais foco e leveza.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="text-green-600" size={24} />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-3">💰 Guia de Planejamento Financeiro Doméstico</h4>
                <p className="text-gray-600 text-sm">Descubra para onde vai seu dinheiro e aprenda a controlar seu orçamento com tranquilidade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            🗣️ Veja o que dizem outras mulheres que já aplicaram o método:
          </h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-2xl">
              <div className="flex items-start space-x-6">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face" 
                  alt="Juliana M." 
                  className="w-16 h-16 rounded-full object-cover shadow-lg"
                />
                <div className="flex-1">
                  <p className="text-gray-700 mb-4 text-lg italic">
                    "Eu chorava com a bagunça. Agora, em 2h por dia, minha casa está limpa e tenho tempo pra mim!"
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                    <span className="font-bold text-gray-800">— Juliana M.</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl">
              <div className="flex items-start space-x-6">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" 
                  alt="Carla R." 
                  className="w-16 h-16 rounded-full object-cover shadow-lg"
                />
                <div className="flex-1">
                  <p className="text-gray-700 mb-4 text-lg italic">
                    "Achei que fosse mais uma promessa vazia… mas mudou minha vida. Me sinto no controle, sem culpa."
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                    <span className="font-bold text-gray-800">— Carla R.</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl">
              <div className="flex items-start space-x-6">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face" 
                  alt="Bruna L." 
                  className="w-16 h-16 rounded-full object-cover shadow-lg"
                />
                <div className="flex-1">
                  <p className="text-gray-700 mb-4 text-lg italic">
                    "Com o Kanban, minha cabeça fica leve. Minha rotina agora tem começo, meio e fim."
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                    <span className="font-bold text-gray-800">— Bruna L.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            💥 Oferta Especial por Tempo Limitado
          </h2>
          
          <div className="bg-red-600 text-white p-6 rounded-2xl mb-8 shadow-xl">
            <div className="text-center">
              <p className="text-lg font-semibold mb-2">⏰ Esta oferta expira em:</p>
              <div className="text-4xl md:text-5xl font-bold font-mono tracking-wider">
                {formatTime(timeLeft)}
              </div>
              <p className="text-sm mt-2 opacity-90">Não perca esta oportunidade única!</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
            <div className="mb-6">
              <span className="text-2xl text-gray-400 line-through">De R$ 59,00</span>
              <div className="text-5xl font-bold text-green-600 mb-2">R$ 22,00</div>
              <p className="text-xl text-gray-600">ou 4x de R$ 5,92</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center space-x-2">
                <Shield className="text-green-600" size={24} />
                <span className="text-lg">🔒 Compra 100% segura</span>
              </div>
              
              <div className="flex items-center justify-center space-x-2">
                <Clock className="text-blue-600" size={24} />
                <span className="text-lg">💸 Garantia de 7 dias – satisfação ou seu dinheiro de volta</span>
              </div>
            </div>
            
            <button 
              onClick={handleCTAClick}
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold text-xl py-6 px-8 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 mb-4"
            >
              [QUERO ORGANIZAR MINHA CASA AGORA E GANHAR O APP!]
            </button>
            
            <p className="text-sm text-gray-500">Acesso imediato após a compra</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              ✅ Pronta para transformar sua casa com leveza e organização?
            </h3>
            <p className="text-gray-600 mb-6">
              Clique no botão acima e comece hoje mesmo essa nova rotina!
            </p>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Smartphone size={16} />
                <span>Acesso pelo celular</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle size={16} />
                <span>Download imediato</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 shadow-xl">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <img 
                  src="https://i.imgur.com/DAys8oV.jpg" 
                  alt="Manoela Guimarães" 
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-white"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">@manu_organizada</h3>
                </div>
                
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    <strong>"Oi! Sou a Manoela Guimarães</strong>, uma mulher multitarefa de PE: mãe 
                    dedicada a três crianças, esposa apaixonada, Dona de DogHouse e empreendedora digital. 
                    Conciliar todas as minhas responsabilidades nunca foi simples, mas eu enfrentei o desafio 
                    e mergulhei nos estudos sobre produtividade.
                  </p>
                  
                  <p>
                    Aprendi a arte de fazer mais com menos tempo, e agora estou 
                    empolgada em compartilhar esse projeto especial com você. Ele foi inspirado nas 
                    poderosas técnicas ensinadas por Timothy Ferriss em seu curso revolucionário: 
                    <strong>'Trabalhe 2 horas por dia'</strong>.
                  </p>
                  
                  <p>
                    Juntas, vamos conquistar o equilíbrio, alcançar nossos 
                    objetivos e desfrutar de uma vida plena e realizada.
                  </p>
                  
                  <p className="text-xl font-bold text-pink-600">
                    Vamos nessa? 💪"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <img 
              src="https://i.imgur.com/QMobrc8.png" 
              alt="Logo A Rotina que Toda Mulher Precisa" 
              className="h-12 mx-auto mb-4 opacity-80"
            />
          </div>
          
          <p className="text-gray-300 mb-4">
            Transforme sua rotina doméstica com leveza, clareza e organização.
          </p>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="text-sm text-gray-400">
              © 2025 A Rotina que Toda Mulher Precisa. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;