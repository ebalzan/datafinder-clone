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
            <li>Benef??cios</li>
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
            Nossos dados s??o um diferencial para o crescimento corporativo.
            Atrav??s da tecnologia descomplicamos o processo pra encontrar um
            lead qualificado de forma r??pida e f??cil, com muita assertividade.
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
            A Datafinder foi idealizada em 2019 e atualmente ?? uma plataforma
            tecnol??gica de intelig??ncia de mercado, intelig??ncia comercial e tem
            como prop??sito democratizar os dados possibilitando as conex??es
            entre as empresas.
          </p>
        </div>
        <div className="image">
          <img src={datafinder4} alt="datafinder 4" />
        </div>
      </section>
      <section className="padding2">
        <h1>
          Encontrar informa????es qualificadas de forma r??pida e f??cil, com muita
          assertividade.
        </h1>
      </section>
      <section className="o-que-oferecemos">
        <div className="image">
          <img src={datafinder2} alt="datafinder 2" />
        </div>
        <div className="title">
          <h1>
            Disponibilizamos um banco de dados com informa????es de todas as
            empresas do Brasil
          </h1>
          <p>
            Demonstramos dados de todas as empresas, como por exemplo, dados de
            s??cios, d??vidas ativas por empresa, dados por cnae, intelig??ncia
            fiscal, holdings, MEI, entre outros dados disponibilizados a n??vel
            nacional. ?? mais pr??tico e r??pido encontrar as informa????es
            relevantes para o desenvolvimento do neg??cio.
          </p>
        </div>
      </section>
      <section className="padding3">
        <div className="title">
          <h1>
            Conhe??a nosso Plano Corporate: personalizado para os seus objetivos
          </h1>
          <p>
            Acesso por assinatura, permite que voc?? encontre informa????es
            relevantes atrav??s do cruzamento de dados, contando com atendimento
            personalizado voc?? pode acionar diretamente a nossa equipe
            comercial.
            <br />
            <br />
            Nosso Bigdata mant??m um alto padr??o de qualidade de informa????es
            fornecidos para ajudar no desenvolvimento do seu neg??cio. Estamos em
            constante desenvolvimento e aperfei??oamento dos servi??os para
            atender e melhorar a satisfa????o dos nossos clientes.
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
            <strong>Acesso R??pido e F??cil</strong>
            <br />
            Plataforma amig??vel e r??pida para resultados direcionados, baseados
            em filtros personalizados!
            <br />
            <br />
            <strong>Intelig??ncia sobre dados</strong>
            <br />
            Cruzamento de dados, conforme as informa????es mais atuais,
            respeitando a LGPD, entregando qualidade, precis??o e confiabilidade.
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
          <h1>Cansado de n??o conseguir contato com os leads?</h1>
          <p>
            Prezamos muito pela qualidade do nosso servi??o e nos dedicamos para
            ter o banco de dados em constante atualiza????o.
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
            A DataFinder ?? uma empresa de tecnologia que tem como prop??sito
            democratizar os dados criando conex??es significativas entre as
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
        <p>2022 ?? Data Finder - Copyright Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
