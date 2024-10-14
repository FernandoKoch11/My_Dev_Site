import profileImage from './profile.png';

export function Nav() {
  return (
    <nav className="bg-gradient-to-b from-black to-blue-950 min-h-screen p-8">
      {/* Cabeçalho */}
      <header className="flex flex-col items-center mb-16">
      
        <link rel="icon" href="%PUBLIC_URL%/profile.ico" type="image/x-icon" />


        <img
          src={`${process.env.PUBLIC_URL}/profile.png`}
          alt="Profile"
          className="shadow-lg mb-4"
          style={{ height: '200px', width: '200px', boxShadow: '0px 0px 20px 10px blue' }}
        />
        <h1 className="text-4xl font-bold text-white">Fernando Koch</h1>
        <p className="text-lg text-gray-300">Desenvolvedor Back-End, Web, Mobile</p>
      </header>

      {/* Sobre mim */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">Sobre Mim</h2>
        <div className="text-gray-300">
          <p>Olá! Sou um desenvolvedor freelancer com experiência em automação, desenvolvimento web e bots. Minha paixão por tecnologia me leva a criar soluções práticas e inteligentes que facilitam o dia a dia. Tenho um foco especial em desenvolvimento backend e integração de sistemas. Atualmente, estou me dedicando a projetos que envolvem robótica, controle de dispositivos e automação de processos repetitivos.</p>
        </div>
      </section>

      {/* Projetos Destacados */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">Projetos Destacados</h2>
        <div className="text-gray-300">
          <h3 className="text-blue-500">1. <a href="https://github.com/FernandoKoch11/Bot_Cadastro_Produtos">Bot Cadastro de Produtos</a></h3>
          <p>Um sistema automatizado para login e cadastro de produtos em um site de demonstração. Este projeto utiliza as bibliotecas <strong>pyautogui</strong> e <strong>pandas</strong> para realizar o cadastro eficiente e seguro de dados.</p>
          <p><strong>Tecnologias:</strong> Python, PyAutoGUI, Pandas.</p>
          <h3>2. Wheelchair Controller App</h3>
          <p>Um projeto em desenvolvimento focado no controle de cadeiras de rodas por meio de comandos realizados com movimentos faciais. A proposta é melhorar a acessibilidade com um aplicativo de controle inteligente.</p>
          <h3 className="text-blue-500">3. <a href="https://github.com/FernandoKoch11/Currency_Converter">Conversor de Moedas em Tempo Real</a></h3>
          <p>Desenvolvi um conversor de moedas que acessa cotações em tempo real e realiza cálculos precisos para diferentes moedas utilizando a <a href="https://docs.awesomeapi.com.br/api-de-moedas" className="text-blue-500">AwesomeApi</a>.</p>
          <p><strong>Tecnologias:</strong> Python, CustomTkinter, AwesomeApi.</p>
          <h3>4. Automação de E-mails com Google Sheets</h3>
          <p>Projeto que integra <strong>Google Sheets</strong> com o envio automatizado de e-mails via <strong>Gmail API</strong> e <strong>SMTP</strong>. Ideal para automação de rotinas administrativas e comunicação.</p>
        </div>
      </section>

      {/* Habilidades Técnicas */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">Habilidades Técnicas</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>Html/Css: para desenvolvimento Web;</li>
          <li>React: para desenvolvimento multiplataforma;</li>
          <li>Python: para desenvolvimento de software em geral, e para criação de bots de automção;</li>
          <li>Flutter/Dart: para desenvolvimento mobile.</li>
        </ul>
      </section>

      {/* Tecnologias e Ferramentas */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">Tecnologias e Ferramentas</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>Google APIs (Google Sheets, Gmail): Automação de envio de e-mails e manipulação de planilhas.</li>
          <li>Flet: Desenvolvimento de apps web.</li>
          <li>PyAutoGUI: Automação de processos manuais e cadastro de produtos.</li>
          <li>Pandas: Manipulação e análise de dados.</li>
          <li>SMTP: Integração e envio de e-mails automatizados.</li>
          <li>Git: Controle de versão e colaboração em projetos.</li>
          <li>Scikit-learn: Treinamento de modelos de Inteligência Artificial.</li>
          <li>Google ML Kit: APIs de análise de vídeo e imagem para rotular imagens e detectar códigos de barras, textos, rostos e objetos por meio de Machine Learning.</li>
          <li>Plotly: Biblioteca Python para geração de gráficos, utilizada para análize de dados.</li>
          <li>CustomTkinter: Criação de Interfaces Gráficas em Python.</li>
        </ul>
      </section>

      {/* Contato */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">Contato</h2>
        <p className="text-gray-300">Você pode me contatar através do e-mail e do meu GitHub:</p>
        <ul className="list-disc list-inside text-gray-300">
          <li>E-mail: <a href="mailto:fernandokoch26@gmail.com" className="text-blue-500">fernandokoch26@gmail.com</a></li>
          <li>GitHub: <a href="https://github.com/FernandoKoch11" className="text-blue-500">FernandoKoch11</a></li>
          <li>99freelas: <a href="https://www.99freelas.com.br/user/fernando-miguel-koch" className="text-blue-500">Fernando Miguel Koch</a></li>
        </ul>
      </section>
    </nav>
  );
}