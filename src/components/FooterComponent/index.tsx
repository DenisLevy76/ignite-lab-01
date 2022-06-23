import { FooterLogoComponent } from "./FooterLogoComponent";

export const FooterComponent: React.FC = () => {
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between py-6 px-9 border-t border-grey-600 text-center">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <FooterLogoComponent />
        <span>Rocketseat - Todos os direitos reservados</span>
      </div>
      <span>Políticas de privacidade</span>
    </footer>
  );
};
