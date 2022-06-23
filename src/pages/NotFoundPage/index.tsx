import { LinkButtonComponent } from "../../components/LinkButtonComponent";

export const NotFoundPage: React.FC = () => {
  return (
    <main className="flex flex-col w-full h-screen items-center justify-center gap-8">
      <h1 className="text-7xl font-bold">404</h1>
      <p className="text-grey-200">Página não encontrada</p>

      <LinkButtonComponent href="/">Voltar para a home</LinkButtonComponent>
    </main>
  );
};
