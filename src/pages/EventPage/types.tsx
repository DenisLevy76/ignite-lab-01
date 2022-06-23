export type EventPageURLParams = {
  slug: string;
};

export interface TeacherResponse {
  avatarURL: string;
  bio: string;
  name: string;
}

export interface GetLessonBySlugResponse {
  lesson: {
    description: string;
    title: string;
    teacher: TeacherResponse;
    videoId: string;
    challenge: {
      url: string;
    };
  };
}
