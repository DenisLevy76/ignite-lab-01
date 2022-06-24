import codeMockup from "../../assets/codeMockup.png";
import { FooterComponent } from "../../components/FooterComponent";
import { LogoComponent } from "../../components/LogoComponent";
import { SubscribeFormComponent } from "../../components/SubscribeFormComponent";

export const SubscribePage: React.FC = () => {
  return (
    <>
      <main className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
        <section className="flex justify-between lg:min-w-[1216px] flex-col lg:flex-row mt-20 gap-16 lg:gap-0 p-5">
          <div className="max-w-[624px] p-8">
            <LogoComponent />
            <h1 className="mt-8 text-4xl leading-tight">
              Construa uma{" "}
              <strong className="text-blue-500">aplicação completa</strong>, do
              zero, com <strong className="text-blue-500">React</strong>
            </h1>
            <p className="text-grey-200 mt-6 leading-relaxed">
              Em apenas uma semana você vai dominar na prática uma das
              tecnologias mais utilizadas e com alta demanda para acessar as
              melhores oportunidades do mercado.
            </p>
          </div>
          <SubscribeFormComponent />
        </section>
        <img src={codeMockup} alt="code mockup" />
      </main>
      <FooterComponent />
    </>
  );
};
