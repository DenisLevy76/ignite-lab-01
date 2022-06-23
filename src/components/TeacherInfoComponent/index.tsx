import { TeacherInfoComponentProps } from "./types";

export const TeacherInfoComponent: React.FC<TeacherInfoComponentProps> = ({
  photoAlt,
  teacherBio,
  teacherName,
  teacherPhoto,
}) => {
  return (
    <div className="flex gap-4 items-center">
      <img
        src={teacherPhoto}
        alt={photoAlt}
        className="w-16 rounded-full border-2 border-grey-100"
      />
      <div>
        <strong className="text-2xl font-bold">{teacherName}</strong>
        <p className="text-sm text-grey-300">{teacherBio}</p>
      </div>
    </div>
  );
};
