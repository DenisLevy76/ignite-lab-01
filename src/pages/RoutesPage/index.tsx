import { Route, Routes } from "react-router-dom";
import { EventPage } from "../EventPage";
import { NotFoundPage } from "../NotFoundPage";
import { ROUTES } from "../../settings/routes";
import { SubscribePage } from "../SubscribePage";

export const RoutesPage: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<SubscribePage />} />
      <Route path={ROUTES.eventPage} element={<EventPage />} />
      <Route path={ROUTES.lessonPage} element={<EventPage />} />

      <Route path={ROUTES.notFound} element={<NotFoundPage />} />
    </Routes>
  );
};
