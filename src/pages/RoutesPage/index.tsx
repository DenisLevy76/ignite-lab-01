import { Route, Routes } from "react-router-dom";
import { EventPage } from "../EventPage";
import { NotFoundPage } from "../NotFoundPage";

export const RoutesPage: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/event/" element={<EventPage />} />
      <Route path="/event/lesson/:slug" element={<EventPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
