import { HeaderComponent } from '../../components/HeaderComponent';
import { SidebarComponent } from '../../components/SidebarComponent';
import { VideoComponent } from '../../components/VideoComponent';

export const EventPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent />

      <main className="flex flex-1 gap-8">
        <VideoComponent />
        <SidebarComponent />
      </main>
    </div>
  );
};
