// react
import { useEffect } from "react";
// styles
import "../page/style.scss";
import "react-awesome-slider/dist/styles.css";
// images
import Logo from "../assets/logofinder.png";
import slide1 from "../assets/slide-1.png";
import slide2 from "../assets/slide-2.png";
import datafinder1 from "../assets/datafinder-1.png";
import datafinder2 from "../assets/datafinder-2.png";
import datafinder3 from "../assets/datafinder-3.png";
import datafinder4 from "../assets/datafinder-4.png";
import datafinder5 from "../assets/datafinder-5.png";
import datafinder6 from "../assets/datafinder-6.png";

export default function Page() {
  const slider = [slide1, slide2];

  function changeSlide() {
    let index = 0;
    const home = document.querySelector("section.home");
    const bullet = document.querySelectorAll("span");

    setInterval(() => {
      bullet[index].style.cssText = `background-color: #f8f8f8;
        width: 16px; height: 16px;`;
      if (index === 0) {
        bullet[index + 1].style.cssText = `background-color: #0f4068;
        width: 12px; height: 12px;`;
      }
      if (index > 0) {
        bullet[index - 1].style.cssText = `background-color: #0f4068;
        width: 12px; height: 12px;`;
      }
      home.style.backgroundImage = `url(${slider[index]})`;
      if (index === slider.length - 1) {
        setTimeout(() => {
          index = 0;
        }, 5000);
      } else {
        index++;
      }
    }, 4000);
  }

  function navMenu() {
    const li = document.querySelectorAll("nav.menu li");
    const home = document.querySelector("section.home");
    const quemSomos = document.querySelector("section.quem-somos");
    const oQueOferecemos = document.querySelector("section.o-que-oferecemos");
    const beneficios = document.querySelector("section.beneficios");
    const faleConosco = document.querySelector("section.fale-conosco");
    const tabs = [home, quemSomos, oQueOferecemos, beneficios, faleConosco];

    for (let i = 0; i < li.length; i++) {
      li[i].addEventListener("click", () => {
        var posY = tabs[i].offsetTop - 100;
        window.scrollTo(0, posY);
      });
    }
  }

  changeSlide();

  useEffect(() => {
    navMenu();
  }, []);

  return (
    <div id="page">
      <div></div>
      <header>
        <div className="logo">
          <img src={Logo} alt="Website logo" />
        </div>
        <nav className="menu">
          <ul>
            <li>Home</li>
            <li>Quem somos</li>
            <li>O que oferecemos</li>
            <li>Benefícios</li>
            <li>Fale conosco</li>
          </ul>
        </nav>
      </header>
      <section className="home">
        <div className="bullets">
          {slider.map(() => {
            return <span></span>;
          })}
        </div>
      </section>
      <section className="padding1">
        <div className="title">
          <h1>
            Encontre dados qualificados de empresas em todo Brasil com o
            Datafinder
          </h1>
          <p>
            Nossos dados são um diferencial para o crescimento corporativo.
            Através da tecnologia descomplicamos o processo pra encontrar um
            lead qualificado de forma rápida e fácil, com muita assertividade.
          </p>
        </div>
        <div className="image">
          <img src={datafinder1} alt="datafinder 1" />
        </div>
      </section>
      <section className="quem-somos">
        <div className="title">
          <h1>Quem somos</h1>
          <p>
            A Datafinder foi idealizada em 2019 e atualmente é uma plataforma
            tecnológica de inteligência de mercado, inteligência comercial e tem
            como propósito democratizar os dados possibilitando as conexões
            entre as empresas.
          </p>
        </div>
        <div className="image">
          <img src={datafinder4} alt="datafinder 4" />
        </div>
      </section>
      <section className="padding2">
        <h1>
          Encontrar informações qualificadas de forma rápida e fácil, com muita
          assertividade.
        </h1>
      </section>
      <section className="o-que-oferecemos">
        <div className="image">
          <img src={datafinder2} alt="datafinder 2" />
        </div>
        <div className="title">
          <h1>
            Disponibilizamos um banco de dados com informações de todas as
            empresas do Brasil
          </h1>
          <p>
            Demonstramos dados de todas as empresas, como por exemplo, dados de
            sócios, dívidas ativas por empresa, dados por cnae, inteligência
            fiscal, holdings, MEI, entre outros dados disponibilizados a nível
            nacional. É mais prático e rápido encontrar as informações
            relevantes para o desenvolvimento do negócio.
          </p>
        </div>
      </section>
      <section className="padding3">
        <div className="title">
          <h1>
            Conheça nosso Plano Corporate: personalizado para os seus objetivos
          </h1>
          <p>
            Acesso por assinatura, permite que você encontre informações
            relevantes através do cruzamento de dados, contando com atendimento
            personalizado você pode acionar diretamente a nossa equipe
            comercial.
            <br />
            <br />
            Nosso Bigdata mantém um alto padrão de qualidade de informações
            fornecidos para ajudar no desenvolvimento do seu negócio. Estamos em
            constante desenvolvimento e aperfeiçoamento dos serviços para
            atender e melhorar a satisfação dos nossos clientes.
          </p>
        </div>
        <div className="image">
          <img src={datafinder3} alt="datafinder 3" />
        </div>
      </section>
      <section className="beneficios">
        <div className="image">
          <img src={datafinder6} alt="datafinder 6" />
        </div>
        <div className="title">
          <h1>Beneficios Data Finder</h1>
          <p>
            <strong>Acesso Rápido e Fácil</strong>
            <br />
            Plataforma amigável e rápida para resultados direcionados, baseados
            em filtros personalizados!
            <br />
            <br />
            <strong>Inteligência sobre dados</strong>
            <br />
            Cruzamento de dados, conforme as informações mais atuais,
            respeitando a LGPD, entregando qualidade, precisão e confiabilidade.
            <br />
            <br />
            <strong>LEADS</strong>
            <br />
            Resultados direcionados e posicionados conforme a sua necessidade.
          </p>
        </div>
      </section>
      <section className="padding4">
        <div className="title">
          <h1>Cansado de não conseguir contato com os leads?</h1>
          <p>
            Prezamos muito pela qualidade do nosso serviço e nos dedicamos para
            ter o banco de dados em constante atualização.
          </p>
        </div>
        <div className="image">
          <img src={datafinder5} alt="datafinder 5" />
        </div>
      </section>
      <section className="fale-conosco">
        <div className="title">
          <h3>Data Finder</h3>
          <br />
          <p>
            A DataFinder é uma empresa de tecnologia que tem como propósito
            democratizar os dados criando conexões significativas entre as
            empresas.
          </p>
        </div>
        <div className="phone">
          <p>Fale conosco</p>
          <br />
          <h1>
            (51) 98466-8646
            <br />
            (51) 99775-1924
          </h1>
          <br />
          <p>datafinder.com.br</p>
        </div>
      </section>
      <footer>
        <p>2022 © Data Finder - Copyright Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
