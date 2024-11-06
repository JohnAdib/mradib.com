import { IChecklistGroupItem } from "../_checklist/interfaces/i-checklist-group-item";

const question1: IChecklistGroupItem = {
  id: 1,
  order: 1,
  title: "نام و نام خانوادگی",
  desc: "اسمت لازمه که بالای رزومه قبل از هر چیزی باشه",
  passedNote: "خیلی خوبه که اسمت رو گذاشتی!",
  failedNote: "جدی اسمت رو تو رزومه نذاشتی!؟",
};

export const resumeChecklistContactItems: IChecklistGroupItem[] = [question1];
