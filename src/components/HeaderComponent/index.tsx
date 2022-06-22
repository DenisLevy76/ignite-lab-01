import { LogoComponent } from '../LogoComponent';

export const HeaderComponent = () => {
  return (
    <header className="flex items-center justify-center w-full py-5 bg-grey-700 border-b border-grey-600">
      <LogoComponent />
    </header>
  );
};
